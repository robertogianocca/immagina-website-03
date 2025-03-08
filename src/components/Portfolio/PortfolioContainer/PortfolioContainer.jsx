"use client";
import Link from "next/link";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Wrapper from "@/components/Wrapper/Wrapper";
import PortfolioCategoryCard from "@/components/Portfolio/PortfolioCategoryCard/PortfolioCategoryCard";
import PortfolioGallery from "@/components/Portfolio/PortfolioGallery/PortfolioGallery";
import PortfolioNavigation from "@/components/Portfolio/PortfolioNavigation/PortfolioNavigation";
import { motion } from "framer-motion";

export default function PortfolioContainer({ portfolioCultura, categoriesFromPath }) {
  /* ---------- CURRENT CATEGORY NAME ---------- */
  let currentCategoryName =
    categoriesFromPath[categoriesFromPath.length - 1].charAt(0).toUpperCase() +
    categoriesFromPath[categoriesFromPath.length - 1].slice(1).toLowerCase();

  currentCategoryName = currentCategoryName
    .replace("a-s", "a's-s")
    .split("-") // Split the string into an array of words using "-" as the delimiter
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" "); // Join the array back into a string with spaces

  /* ---------- TITLE LABEL ---------- */

  let labelTitleColor = "";
  if (categoriesFromPath.length == 1) {
    labelTitleColor = "border-l-custom-red";
  }
  if (categoriesFromPath.length == 2) {
    labelTitleColor = "border-l-custom-green";
  }

  /* ---------- CURRENT CATEGORY PORTFOLIO TREE ---------- */

  let currentCategoryPortfolio = portfolioCultura;
  // Traverse the portfolio object to find the current category
  categoriesFromPath.forEach((item) => {
    const formattedItem = item
      .replace("a-s", "a's-s")
      .split("-") // Split the string into an array of words using "-" as the delimiter
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "); // Join the array back into a string with spaces

    currentCategoryPortfolio = currentCategoryPortfolio[formattedItem];
  });

  /* ---------- PATH TREE ---------- */
  const pathTree = categoriesFromPath.slice(0, -1);

  const mappedPath = pathTree.map((item, index) => (
    <div key={index}>
      <Link
        href={`/cultura/${categoriesFromPath.slice(0, index + 1).join("/")}`}
        className="flex items-center"
      >
        {">"}
        <p className="pl-1 pr-2 hover:text-custom-red transition-all">{item}</p>
      </Link>
    </div>
  ));

  /* ---------- MAP SUBCATEGORIES CARDS - (All the subcategories inside the current)  ---------- */

  // Filter out the "pictures" key
  const subCategories = Object.keys(currentCategoryPortfolio).filter(
    (item) => item.toLowerCase() !== "pictures"
  );

  // Create an array of subcategories with their cover images and indexNumber
  const subCategoriesWithIndex = subCategories.map((item) => {
    const coverImage = currentCategoryPortfolio[item].pictures[0];
    return {
      name: item,
      coverImage: coverImage,
      indexNumber: coverImage.indexNumber || 0, // Default to 0 if indexNumber doesn't exist
    };
  });

  // Sort the subcategories based on the indexNumber of their cover images
  subCategoriesWithIndex.sort((a, b) => a.indexNumber - b.indexNumber);

  const mappedSubCategories = subCategoriesWithIndex.map((item, index) => {
    const formattedItem = item.name.toLowerCase().replace(/\s+/g, "-").replace("a's-s", "a-s");
    const formattedPath = categoriesFromPath
      .map((category) => category.toLowerCase().replace(/\s+/g, "-"))
      .join("/");

    /* ---------- LABELS  ---------- */

    let labelColor = "";
    if (categoriesFromPath.length == 1) {
      labelColor = "border-l-custom-green";
    }
    if (categoriesFromPath.length == 2) {
      labelColor = "border-l-custom-yellow";
    }

    /* ---------- CARDS  ---------- */

    return (
      <PortfolioCategoryCard
        key={index + item.name}
        title={item.name}
        shortDescription={item.coverImage.shortDescription}
        cover={item.coverImage.url}
        coverAlt={item.coverImage.alt}
        labelColor={labelColor}
        hrefLink={`/cultura/${formattedPath}/${formattedItem}`}
      />
    );
  });

  /* ------------------------------ RETURN ------------------------------ */

  if (!currentCategoryPortfolio.images) {
    /* ---------- PORTFOLIO ---------- */
    return (
      <div>
        <NavigationBar menuColor="text-custom-red hover:border-b-2 hover:border-custom-red" />
        <Wrapper>
          <motion.div
            className="text-custom-brown"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* ---------- Portfolio Navigation ---------- */}
            <PortfolioNavigation
              title={currentCategoryName}
              longDescription={currentCategoryPortfolio.pictures[0].longDescription}
              path={mappedPath}
              pathTree={pathTree}
              labelColor={labelTitleColor}
            />

            {/* ---------- Card List ---------- */}
            <ul className="main-grid">{mappedSubCategories}</ul>
          </motion.div>
        </Wrapper>
      </div>
      /* ---------- GALLERY ---------- */
    );
  } else {
    return (
      <PortfolioGallery
        currentCategoryPortfolio={currentCategoryPortfolio}
        title={currentCategoryName}
        shortDescription={currentCategoryPortfolio.pictures[0].shortDescription}
        longDescription={currentCategoryPortfolio.pictures[0].longDescription}
        pathTree={pathTree}
        categoriesFromPath={categoriesFromPath}
      />
    );
  }
}
