// FETCH PORTFOLIO DATA FUNCTION

import { getDataStructure } from "@/utils/portfolio-data-structure";

export default async function fetchPortfolioData(path, imagesQuantity) {
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_ID}/resources/image/?max_results=${imagesQuantity}&metadata=true&context=true&prefix=IMMAGINA/${path}/&type=upload`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`
          ).toString("base64")}`,
        },
        cache: "force-cache",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch portfolio data");
    }

    const cloudinaryResponse = await response.json();
    const portfolioData = getDataStructure(cloudinaryResponse);

    return portfolioData;
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    return null;
  }
}
