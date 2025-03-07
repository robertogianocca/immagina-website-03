import Link from "next/link";

export default function Path({ pathTree, categoriesFromPath }) {
  //   --------------------------------- PATHS ---------------------------------

  const mappedPath = pathTree.map((item, index) => (
    <div key={index}>
      <Link
        href={`/cultura/${categoriesFromPath.slice(0, index + 1).join("/")}`}
        className="flex items-center"
      >
        <p className={index === 0 ? "hidden" : "block, mx-1"}>{">"}</p>
        <p className="hover:text-custom-red transition-all">{item}</p>
      </Link>
    </div>
  ));
  return <div className="flex items-center pb-2">{mappedPath}</div>;
}
