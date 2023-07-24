// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";

const Navbar = () => {
	const [isUserJobSeeker, setIsUserJobSeeker] = useState(false);

	const jobSeekerOrJobPosterEvent = (e) => {
		setIsUserJobSeeker(e.target.checked);
	};

	const menuItems = (
		<>
			<li>
				<NavLink
					className={({ isActive }) =>
						`navlink dark:hover:text-zinc-500 ${
							isActive
								? "bg-primary text-white font-semibold lg:scale-110 hover:scale-100"
								: "text-primary bg-transparent hover:scale-110"
						}`
					}
					to={"/"}
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					className={({ isActive }) =>
						`navlink dark:hover:text-zinc-500 ${
							isActive
								? "bg-primary text-white font-semibold lg:scale-110 hover:scale-100"
								: "text-primary bg-transparent hover:scale-110"
						}`
					}
					to={"/contact"}
				>
					Contact Us
				</NavLink>
			</li>
			<li>
				<NavLink
					className={({ isActive }) =>
						`navlink dark:hover:text-zinc-500 ${
							isActive
								? "bg-primary text-white font-semibold lg:scale-110 hover:scale-100"
								: "text-primary bg-transparent hover:scale-110"
						}`
					}
					to={"/about"}
				>
					About
				</NavLink>
			</li>
		</>
	);

	const endMenuItems = (
		<>
			<li className="flex items-center justify-evenly lg:justify-end flex-row gap-2 hover:bg-transparent active:bg-transparent">
				<p className="text-primary text-xl font-bold active:bg-transparent hover:text-primary ">
					{isUserJobSeeker ? "Job Seeker" : "Job Poster"}
				</p>
				<input
					type="checkbox"
					className="toggle checked:bg-primary checked:border-primary rounded-full bg-green-200 shadow-green-200"
					onChange={jobSeekerOrJobPosterEvent}
				/>
			</li>
			<li className="flex items-center flex-row gap-2">
				{/* <NavLink
					className={`navlink  bg-primary hover:scale-110 hover:bg-primary text-white hover:text-white `}
					to={"/authentication/login"}
				>
					Log In
				</NavLink> */}

				{/* <img src={userImg} alt="user avatar" /> */}
				<div>
					<FaUserCircle className="w-7 h-7" />
					<button className="navlink bg-primary text-white rounded-xl hover:text-white hover:scale-110">
						Logout
					</button>
				</div>
			</li>
		</>
	);

	return (
		<nav className="bg-green-200">
			<div className="max-w-7xl mx-auto">
				<div className="navbar">
					<div className="navbar-start w-full lg:w-1/2 justify-between lg:justify-start pr-4">
						<div className="dropdown">
							<label
								tabIndex={0}
								className="btn btn-ghost lg:hidden"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</label>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2"
							>
								{menuItems}
								{endMenuItems}
							</ul>
						</div>
						<Link to={"/"}>
							<div className="flex items-center justify-start gap-2">
								<img
									src={logo}
									className="w-16 h-16"
									alt="logo image"
								/>

								<h1 className="text-3xl text-primary font-extrabold flex items-center justify-center flex-wrap">
									<span>Job &nbsp;</span>
									<span>Finder</span>
								</h1>
							</div>
						</Link>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal px-1">
							{menuItems}
						</ul>
					</div>
					<div className="navbar-end hidden lg:flex ">
						<ul className="menu enu-horizontal flex-row gap-4 w-full justify-end">
							{endMenuItems}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
