import Link from "next/link";
import Logo from "@/components/Logo/Logo";
import MenuDesktop from "@/components/NavigationBar/MenuDesktop/MenuDesktop";

const logoRed = "/images/logo/logo-immagina.svg"; // Reference from the public directory

const menuItems = ["Portfolio", "Team"];

export default function NavigationBar({ color, menuColor, bgColor }) {
  return (
    <nav
      className={`w-full h-[60px] fixed left-0 top-0 flex-row main-grid justify-between px-4 lg:px-6 xl:pl-14 xl:pr-24 z-50 overflow-hidden bg-custom-white`}
    >
      {/* ---------- LOGO ---------- */}
      <div className="pt-3 sm:pt-2">
        <Link href="/cultura">
          <Logo logo={logoRed} />
          <h1 className="text-custom-red font-courier font-bold">cultura</h1>
        </Link>
      </div>
      {/* ---------- MENU ---------- */}
      <div className="w-full h-auto flex flex-row items-center lg:col-span-2 justify-between  ">
        <div>
          <MenuDesktop menuItems={menuItems} menuColor={menuColor} />
        </div>
        <p className="text-2xs sm:text-xs md:text-sm mt-[-6px] sm:mt-0 pl-4 xl:pl-0 font-bold text-custom-red">
          <Link href="mailto:contact@immagina.ch">contact@immagina.ch</Link>
        </p>
      </div>
    </nav>
  );
}
