import { FC } from "react";
// import ThreeView from "./ThreeView";

import IMG_1351 from "assets/images/IMG_1351.jpg";
import IMG_1352 from "assets/images/IMG_1352.jpg";
import IMG_1353 from "assets/images/IMG_1353.jpg";
import IMG_1354 from "assets/images/IMG_1354.jpg";
import IMG_1355 from "assets/images/IMG_1355.jpg";
import Invite from "assets/images/Invite.png";

const Landing: FC = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			{/* <ThreeView /> */}
			<div className="p-10 mx-40 my-20 shadow-xl">
				<div className="p-10 text-3xl font-light shadow-inner-lg">
					<p>
						Thanks for helping us celebrate! Feel free to stick
						around and look at pictures. Our registries are located
						on the links above. Thank you! ❤
					</p>
				</div>
			</div>
			<div className="p-10 m-10 shadow-2xl w-[1621px]">
				<div className="grid m-20 shadow-inner-lg">
					<div className="grid grid-cols-2 p-10">
						<img
							src={IMG_1352}
							alt="couple pic"
							className="w-[650px] h-[950px] pr-5"
						/>
						<img
							src={IMG_1353}
							alt="couple pic"
							className="w-[650px] h-[950px] pl-5"
						/>
					</div>
					<div className="grid grid-cols-2 p-10">
						<img
							src={IMG_1354}
							alt="couple pic"
							className="w-[650px] h-[950px] pr-5"
						/>
						<img
							src={Invite}
							alt="couple pic"
							className="w-[650px] h-[950px] pl-5"
						/>
					</div>
					<div className="grid grid-cols-2 p-10">
						<img
							src={IMG_1355}
							alt="couple pic"
							className="w-[650px] h-[950px] pr-5"
						/>
						<img
							src={IMG_1351}
							alt="couple pic"
							className="w-[650px] h-[950px] pl-5"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
