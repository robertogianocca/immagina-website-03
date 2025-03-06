import Link from "next/link";

export default function MenuDesktop({ menuItems, menuColor }) {
  const mappedMenu = menuItems.map((item, index) => {
    return (
      <li key={index} className="whitespace-nowrap mr-20">
        <Link href={`/cultura/#${item.toLowerCase()}`} className={menuColor}>
          {item}
        </Link>
      </li>
    );
  });
  return (
    <ul className="w-full 3xl:w-[70%] hidden lg:flex lg:justify-between font-courier font-bold text-sm xl:text-lg 3xl:text-xl">
      {mappedMenu}
    </ul>
  );
}
