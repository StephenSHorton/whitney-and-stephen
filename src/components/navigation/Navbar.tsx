import React, { FC } from "react";

import Venmo from "assets/images/venmo.png";
import Wayfair from "assets/images/wayfair.png";
import Amazon from "assets/images/amazon.png";

const Navbar: FC = () => {
	return (
		<nav className="fixed top-0 z-40 flex justify-center w-full text-center bg-white shadow-md font-special-1 center-content">
			<div className="flex items-center justify-center w-full px-10 py-3 sm:justify-between">
				<h1 className="hidden text-4xl sm:block ">Stephen & Whitney</h1>
				<div className="flex justify-end space-x-5 text-xl scale-75 md:scale-100">
					<a
						href="https://venmo.com/u/Stephen-Horton0"
						rel="noreferrer"
						target="_blank"
						className="flex items-center justify-center px-2 space-x-2 md:border-l-2 md:border-r-2"
					>
						<img src={Venmo} alt="venmo" width="25px" />
						<span className="text-blue-500">Venmo</span>
					</a>
					<a
						href="https://www.amazon.com/wedding/stephen-horton-whitney-horton--december-2021/registry/O9UE6YOO5UTK"
						rel="noreferrer"
						target="_blank"
						className="flex items-center justify-center px-2 space-x-2 md:border-l-2 md:border-r-2"
					>
						<img src={Amazon} alt="venmo" width="25px" />
						<span className="text-yellow-500">Amazon</span>
						<span>Registry</span>
					</a>
					<a
						href="https://www.wayfair.com/registry/wedding/0edab719-c70c-427c-8301-4ffe3dc9d844"
						rel="noreferrer"
						target="_blank"
						className="flex items-center justify-center px-2 space-x-2 md:border-l-2 md:border-r-2"
					>
						<img src={Wayfair} alt="venmo" width="25px" />
						<span className="text-purple-500">Wayfair</span>
						<span> Registry</span>
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
