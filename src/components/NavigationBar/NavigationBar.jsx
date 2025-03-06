import Link from "next/link";
import Logo from "../Logo/Logo";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import MenuDesktop from "./MenuDesktop/MenuDesktop";

const logoRed = "/images/logo/logo-immagina.svg"; // Reference from the public directory

const menuItems = ["Portfolio", "Team"];

export default function NavigationBar({ color, menuColor, bgColor }) {
  return (
    <nav
      className={`w-full h-[60px] fixed left-0 top-0 flex justify-between lg:main-grid grid-cols-3 px-4 lg:px-6 xl:pl-14 xl:pr-24 z-50 bg-customWhite`}
    >
      <div className="flex h-10 justify-between pt-2">
        {/* ---------- LOGO CULTURA ---------- */}
        <Link href="/cultura">
          <Logo logo={logoRed} />
          <p className="text-customRed font-courier font-bold">cultura</p>
        </Link>
        {/* ---------- HAMBURGE ICON ---------- */}
        {/* <HamburgerIcon className={`lg:hidden text-customRed`} /> */}
      </div>
      <div className="flex flex-row items-center col-span-2 justify-between">
        <div>
          <MenuDesktop menuItems={menuItems} menuColor={menuColor} />
        </div>
        <p className="text-xs pl-4 xl:pl-0 md:text-xs font-bold text-customRed">
          <Link href="mailto:contact@immagina.ch">contact@immagina.ch</Link>
        </p>
      </div>
    </nav>
  );
}
