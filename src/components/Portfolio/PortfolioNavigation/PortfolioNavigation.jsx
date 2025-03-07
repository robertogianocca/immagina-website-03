import Triangle from "@/components/Icons/Triangle";
import Link from "next/link";
import BackBar from "@/components/Portfolio/PortfolioGallery/PortfolioGallerySideBar/BackBar";

export default function PortfolioNavigation({
  title,
  path,
  pathTree,
  longDescription,
  labelColor,
}) {
  return (
    <div className="main-grid pb-8">
      <div className="text-sm">
        <div className="flex flex-row items-center pb-4">
          <BackBar pathTree={pathTree} />
          <p className="pl-4 pr-2 hover:text-custom-red transition-all">
            <Link href={`/cultura/#portfolio`}>portfolio</Link>
          </p>
          {path}
        </div>
        <div className="flex">
          <h1 className="font-courier font-bold text-2xl md:text-4xl xl:text-4xl">{title}</h1>
        </div>
      </div>
      <div className="hidden lg:block lg:text-s xl:text-base font-semibold col-span-2">
        {longDescription}
      </div>
    </div>
  );
}
