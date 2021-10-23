import { FC, useEffect, useState } from "react";
import Confetti from "react-dom-confetti";
// import ThreeView from "./ThreeView";

import IMG_1351 from "assets/images/IMG_1351.jpg";
import IMG_1352 from "assets/images/IMG_1352.jpg";
import IMG_1353 from "assets/images/IMG_1353.jpg";
import IMG_1354 from "assets/images/IMG_1354.jpg";
import IMG_1355 from "assets/images/IMG_1355.jpg";
import Invite from "assets/images/Invite.png";
import { createMessage, getMessages } from "api/firebase";
import { toast } from "react-toastify";
import {
	DocumentData,
	QueryDocumentSnapshot,
	QuerySnapshot,
} from "@firebase/firestore";

const confettiConfig = {
	angle: 90,
	spread: 360,
	startVelocity: 40,
	elementCount: 70,
	dragFriction: 0.12,
	duration: 3000,
	stagger: 3,
	width: "10px",
	height: "10px",
	perspective: "500px",
	colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

const Landing: FC = () => {
	const [sendPress, setSendPress] = useState<boolean>(false);
	const [is_private, setIsPrivate] = useState<boolean>(false);
	const [message, setMessage] = useState<string>("");
	const [username, setUsername] = useState<string>("");

	const [messages, setMessages] = useState<
		QueryDocumentSnapshot<DocumentData>[]
	>([]);

	useEffect(() => {
		getMessages()
			.then((querySnapShot: QuerySnapshot) => {
				setMessages(querySnapShot.docs);
			})
			.catch((err) => console.log(err));
	}, []);

	async function onSendPress() {
		await setTimeout(() => {}, 2500);
		setSendPress(false);
		if (message !== "" && username !== "") {
			createMessage({
				message,
				username,
				is_private,
			})
				.then(() => {
					setMessage("");
					setUsername("");
					setIsPrivate(false);
					toast("Thank you for your message!");
					getMessages()
						.then((querySnapShot: QuerySnapshot) => {
							setMessages(querySnapShot.docs);
						})
						.catch((err) => console.log(err));
				})
				.catch(() => {
					toast("Oh no! Your message was not sent...");
				});
		}
	}

	return (
		<div>
			<div className="pt-20 text-5xl font-light text-center select-none font-special-2">
				<h1>
					Celebrating the marriage of{" "}
					<span className="text-blue-500 transition-all duration-500 hover:text-yellow-300">
						Whitney
					</span>{" "}
					and{" "}
					<span className="text-green-500 transition-all duration-500 hover:text-yellow-300">
						Stephen
					</span>
				</h1>
				<h1 className="m-10 text-red-500 transition-all duration-500 scale-75 text-8xl hover:text-yellow-300 hover:scale-100">
					Horton
				</h1>
			</div>
			{/* Desktop View */}
			<div className="flex-col items-center justify-center hidden min-h-screen md:flex">
				{/* <ThreeView /> */}
				<div className="w-4/5 p-10 mx-40 my-10 shadow-xl">
					<div className="p-10 text-3xl font-light shadow-inner-lg">
						<p>
							Thanks for helping us celebrate! Feel free to stick
							around and look at pictures. Our registries are
							located on the links above. Thank you! ❤
						</p>
					</div>
				</div>
				<div className="w-4/5 p-10 mx-40 my-10 shadow-xl">
					<div className="p-10 text-3xl font-light shadow-inner-lg">
						<form>
							<fieldset className="flex flex-col space-y-4">
								<label>Send us a message!</label>
								<textarea
									className={`${
										message === ""
											? "bg-gray-50"
											: "shadow-lg"
									} outline-none focus:shadow-lg transition-all duration-250 focus:bg-white focus:border-blue-500 border-2 border-gray-300 rounded-md min-h-[300px] p-4`}
									value={message}
									onChange={(e) => setMessage(e.target.value)}
								/>
								<label>Your Name:</label>
								<input
									className={`${
										username === ""
											? "bg-gray-50"
											: "shadow-lg"
									} w-1/2 p-4 border-2 focus:shadow-lg transition-all duration-250 border-gray-300 rounded-md outline-none focus:border-blue-500 focus:bg-white`}
									value={username}
									onChange={(e) =>
										setUsername(e.target.value)
									}
								/>
								<div className="flex items-center space-x-10">
									<label
										className={`${
											is_private
												? "opacity-100"
												: "opacity-40"
										} whitespace-nowrap`}
									>
										Make my message private
									</label>
									<input
										type="checkbox"
										className="w-10 h-10"
										checked={is_private}
										onChange={(e) =>
											setIsPrivate(e.target.checked)
										}
									/>
								</div>
								<button
									onClick={(e) => {
										e.preventDefault();
										setSendPress(true);
										onSendPress();
									}}
									className="self-end px-6 py-2 font-extrabold text-white transition-all duration-75 bg-blue-500 rounded-md shadow-md active:bg-blue-400 active:scale-95"
								>
									Send
								</button>
								<div className="fixed transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
									<Confetti
										active={sendPress}
										config={confettiConfig}
									/>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
				<div className="p-10 m-10 shadow-2xl w-[1621px]">
					<div className="grid m-20 shadow-inner-lg">
						<div className="grid grid-cols-2 p-10">
							<img
								src={IMG_1352}
								alt="couple pic"
								className="w-[650px] h-[950px] pr-5 select-none"
							/>
							<img
								src={IMG_1353}
								alt="couple pic"
								className="w-[650px] h-[950px] pl-5 select-none"
							/>
						</div>
						<div className="grid grid-cols-2 p-10">
							<img
								src={IMG_1354}
								alt="couple pic"
								className="w-[650px] h-[950px] pr-5 select-none"
							/>
							<img
								src={Invite}
								alt="couple pic"
								className="w-[650px] h-[950px] pl-5 select-none"
							/>
						</div>
						<div className="grid grid-cols-2 p-10">
							<img
								src={IMG_1355}
								alt="couple pic"
								className="w-[650px] h-[950px] pr-5 select-none"
							/>
							<img
								src={IMG_1351}
								alt="couple pic"
								className="w-[650px] h-[950px] pl-5 select-none"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile View */}
			<div className="flex flex-col items-center justify-center min-h-screen overflow-hidden md:hidden">
				{/* <ThreeView /> */}
				<div className="w-11/12 p-2 mx-20 my-10 shadow-lg">
					<div className="p-4 text-xl font-light shadow-inner-lg">
						<p>
							Thanks for helping us celebrate! Feel free to stick
							around and look at pictures. Our registries are
							located on the links above. Thank you! ❤
						</p>
					</div>
				</div>
				<div className="w-11/12 p-2 shadow-lg">
					<div className="p-4 text-xl font-light shadow-inner-lg">
						<form>
							<fieldset className="flex flex-col space-y-4">
								<label>Send us a message!</label>
								<textarea
									className={`${
										message === ""
											? "bg-gray-50"
											: "shadow-lg"
									} outline-none focus:shadow-lg transition-all duration-250 focus:bg-white focus:border-blue-500 border-2 border-gray-300 rounded-md min-h-[200px] p-1`}
									value={message}
									onChange={(e) => setMessage(e.target.value)}
								/>
								<label>Your Name:</label>
								<input
									className={`${
										username === ""
											? "bg-gray-50"
											: "shadow-lg"
									} p-1 border-2 focus:shadow-lg transition-all duration-250 border-gray-300 rounded-md outline-none focus:border-blue-500 focus:bg-white`}
									value={username}
									onChange={(e) =>
										setUsername(e.target.value)
									}
								/>
								<div className="flex items-center justify-between">
									<label
										className={`${
											is_private
												? "opacity-100"
												: "opacity-40"
										} text-base whitespace-nowrap`}
									>
										Make my message private
									</label>
									<input
										type="checkbox"
										className="w-5 h-5"
										checked={is_private}
										onChange={(e) =>
											setIsPrivate(e.target.checked)
										}
									/>
								</div>
								<button
									onClick={(e) => {
										e.preventDefault();
										setSendPress(true);
										onSendPress();
									}}
									className="px-6 py-2 font-extrabold text-white transition-all duration-75 bg-blue-500 rounded-md shadow-md active:bg-blue-400 active:scale-95"
								>
									Send
								</button>
								<div className="fixed transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
									<Confetti
										active={sendPress}
										config={confettiConfig}
									/>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
				<div className="w-11/12 p-2 m-10 shadow-2xl">
					<div className="grid p-4 space-y-4 shadow-inner-lg">
						<img
							src={IMG_1352}
							alt="couple pic"
							className="select-none"
						/>
						<img
							src={IMG_1353}
							alt="couple pic"
							className="select-none"
						/>
						<img
							src={IMG_1354}
							alt="couple pic"
							className="select-none"
						/>
						<img
							src={Invite}
							alt="couple pic"
							className="select-none"
						/>
						<img
							src={IMG_1355}
							alt="couple pic"
							className="select-none"
						/>
						<img
							src={IMG_1351}
							alt="couple pic"
							className="select-none"
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center mt-20 mb-40 space-y-5">
				{messages
					.filter((doc) => !doc.data().is_private)
					.map((doc, index) => (
						<div
							key={index}
							className="w-full p-2 mx-4 text-center shadow-lg md:w-1/2"
						>
							<div
								className="px-4 py-10 shadow-inner-lg"
								key={index}
							>
								<p className="mb-4 break-words">
									"{doc.data().message}"
								</p>
								<p className="whitespace-nowrap">
									- {doc.data().username}
								</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Landing;
