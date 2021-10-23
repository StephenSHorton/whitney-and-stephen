import React, { FC } from "react";
import { NavLink } from "react-router-dom";

const Navbar: FC = () => {
	return (
		<nav className="fixed top-0 z-40 flex justify-center w-full text-center bg-white shadow-md font-special-text center-content">
			<div className="flex items-center justify-center w-full px-10 py-3 sm:justify-between">
				<h1 className="hidden text-4xl sm:block ">
					<span className="text-green-500">Stephen</span> &{" "}
					<span className="text-blue-500">Whitney</span>
				</h1>
				<div className="flex justify-end space-x-5 text-xl">
					<a
						href="https://www.amazon.com/wedding/stephen-horton-whitney-horton--december-2021/registry/O9UE6YOO5UTK"
						rel="noreferrer"
						target="_blank"
						className="px-2 border-l-2 border-r-2"
					>
						<span className="text-yellow-500">Amazon</span> Registry
					</a>
					<a
						href="https://www.wayfair.com/registry/wedding/0edab719-c70c-427c-8301-4ffe3dc9d844"
						rel="noreferrer"
						target="_blank"
						className="px-2 border-l-2 border-r-2"
					>
						<span className="text-purple-500">Wayfair</span>{" "}
						Registry
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
