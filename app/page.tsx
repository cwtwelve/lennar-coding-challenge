"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const menuItems = ["Product", "Features", "Marketplace", "Company"];
	const [dropDownmenuOpen, setDropDownmenuOpen] = useState(false);

	const getImage = (
		id: string,
		height: number,
		width: number,
		classNames: string
	) => {
		return (
			<Image
				className={classNames}
				src={`/${id}.png`}
				alt={id}
				height={height}
				width={width}
			/>
		);
	};

	const openDropdownMenu = () => {
		setDropDownmenuOpen(true);
	};

	const closeDropdownMenu = () => {
		setDropDownmenuOpen(false);
	};

	return (
		<main className="p-4 page-container">
			<div
				className={`text-white flex items-center ${
					dropDownmenuOpen && "opacity-25"
				}`}
			>
				{getImage("Logo", 75, 75, "pr-4")}
				<div className="hidden sm:flex items-center space-x-4">
					{menuItems.map((menuItem) => (
						<div key={menuItem}>{menuItem}</div>
					))}
				</div>
				<div className="ml-auto hidden sm:flex items-center">
					<div className="mr-4">Log in</div>
					<button className="btn bg-gray-600 text-white normal-case font-normal border-none hover:bg-gray-700">
						Start free trial
					</button>
				</div>
				<div className="ml-auto sm:hidden">
					<button
						onClick={openDropdownMenu}
						className="btn bg-inherit border-none hover:bg-gray-700"
					>
						{getImage("Hamburger-Icon", 25, 25, "")}
					</button>
				</div>
			</div>
			<div className="mt-40">
				<div className="sm:text-6xl text-4xl font-bold text-white">
					A better way to
				</div>
				<div className="sm:text-6xl text-4xl font-bold text-indigo-400">
					ship web apps
				</div>
				<div className="text-white w-96 mt-2">
					Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
					qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam
					occaecat fugiat.
				</div>
				<input
					type="text"
					placeholder="Enter your email"
					className="mt-10 input input-bordered w-full max-w-xs"
				/>
			</div>
			{dropDownmenuOpen && (
				<div className="dropdown-menu absolute top-0 left-0 w-full p-4">
					<div className="w-full bg-white rounded p-4">
						<div className="flex place-content-between items-center">
							{getImage("Logo", 35, 35, "")}
							<button
								onClick={closeDropdownMenu}
								className="btn bg-inherit border-none hover:bg-none"
							>
								{getImage("Close-Icon", 15, 15, "")}
							</button>
						</div>
						{menuItems.map((menuItem) => (
							<div key={menuItem} className="pt-4">
								{menuItem}
							</div>
						))}
						<button className="btn bg-primary text-white normal-case font-normal border-none hover:bg-blue-700 mt-6 w-full">
							Start free trial
						</button>
						<div className="mt-6 text-center">
							Existing customer?{" "}
							<a
								className="link font-semibold no-underline"
								href="/"
							>
								Login
							</a>
						</div>
					</div>
				</div>
			)}
		</main>
	);
}
