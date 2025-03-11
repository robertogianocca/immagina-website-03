import fetchPortfolioData from "@/utils/fetchPortfolioData";
import PortfolioGallery from "@/components/Portfolio/PortfolioGallery/PortfolioGallery";
import { CaptionsPrivate } from "@/app/private-galleries/captionsPrivate";

export default async function PietroLeemann() {
  const portfolioData = await fetchPortfolioData("Gallerie%20Private", 200);

  if (!portfolioData) {
    return (
      <div>
        <p>Errore nel caricamento dei dati. Riprova più tardi.</p>
      </div>
    );
  }

  const portfolioCultura = portfolioData["IMMAGINA"]["Gallerie Private"];
  CaptionsPrivate(portfolioCultura);

  return (
    <div>
      <PortfolioGallery
        currentCategoryPortfolio={portfolioCultura["Pietro Leemann"]}
        title={"Pietro Leemann"}
        shortDescription={""}
        longDescription={""}
        pathTree={[""]}
        categoriesFromPath={["uno", "due", "tre", "quattro"]}
      />
    </div>
  );
}
