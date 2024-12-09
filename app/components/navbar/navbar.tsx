"use client"

import { User } from "@prisma/client";
import Container from "../container";
import Logo from "./logo";
import Search from "./search";
import UserMenu from "./usermenu";

interface NavbarProps {
	currentUser?: User | null;
}

function Navbar({ currentUser }: NavbarProps) {
	return (
		<div className="w-full bg-white z-10 fixed shadow-sm">
			<div className="py-4 border-b-[1px]">
				<Container>
					<div
						className="
							flex
							flex-row
							items-center
							justify-between
							gap-3
							md:gap-0
						"
					>
						<Logo />
						<Search />
						<UserMenu currentUser={currentUser} />
					</div>
				</Container>
			</div>
		</div>);
}

export default Navbar;