// HOME CULTURA

import fetchPortfolioData from "@/utils/fetchPortfolioData";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import IntroSection from "@/components/Sections/IntroSection/IntroSection";
import TeamSection from "@/components/Sections/TeamSection/TeamSection";
import PortfolioCategoryCard from "@/components/Portfolio/PortfolioCategoryCard/PortfolioCategoryCard";

export const metadata = {
  title: "IMMAGINA | Cultura",
  description:
    "Come il sarto confeziona l'abito, IMMAGINA confeziona la tua immagine, la tua comunicazione.",
  alternates: {
    canonical: "https://immagina.ch/cultura",
  },
};

export default async function Cultura() {
  const portfolioData = await fetchPortfolioData("Cultura", 500);

  if (!portfolioData) {
    return (
      <div>
        <p>Errore nel caricamento dei dati. Riprova più tardi.</p>
      </div>
    );
  }

  const portfolioCultura = portfolioData["IMMAGINA"]["Cultura"]["Portfolio"];

  const photographyData = portfolioCultura?.["Photography"]?.pictures?.[0];

  return (
    <div className="text-custom-brown">
      <NavigationBar
        color="text-custom-red"
        menuColor="text-custom-red hover:border-b-2 hover:border-custom-red"
        bgColor="bg-custom-white lg:shadow-xl lg:shadow-slate-200"
      />
      <main className="min-h-[calc(100vh-60px)] w-full mt-[60px] pb-20 bg-custom-grey">
        {/* ---------- INTRO SECTION ---------- */}
        <section
          id="home"
          className="h-space lg:min-h-[calc(100vh-60px)] overflow-hidden pt-4 xl:pt-8 px-4 lg:px-6 xl:pl-14 xl:pr-24"
        >
          <IntroSection
            text={
              <div className="flex flex-col gap-y-4 mb-4 font-semibold text-xs xl:text-base">
                <p>
                  Questa sezione del sito di IMMAGINA è dedicata agli
                  <span className="font-bold text-custom-brown-red"> artisti</span> e agli
                  <span className="font-bold text-custom-brown-red"> operatori culturali</span>.
                </p>
                <p>
                  Come il sarto, vestiamo su misura ogni aspetto legato alla sconfinata attività
                  culturale. Per mezzo di foto, video, testi. Seguiamo la produzione di libri,
                  cataloghi, manifesti, mostre…
                </p>
                <p>
                  La nostra missione: Vestire la cultura, comunicare con successo il profumo
                  dell’arte.
                </p>
                <p className="hidden sm:block font-semibold">
                  IMMAGINA ti invita a <span className="italic">sfogliare</span> il suo portfolio.
                </p>
              </div>
            }
          />
        </section>
        {/* ---------- PORTFOLIO SECTION ---------- */}
        <section
          id="portfolio"
          className="h-space lg:min-h-[calc(100vh-60px)] pt-4 xl:pt-8 px-4 lg:px-6 xl:pl-14 xl:pr-24 pb-20 bg-zinc-300"
        >
          <h2 className="text-3xl xl:text-4xl font-courier font-bold mb-6">Portfolio</h2>
          <div className="main-grid">
            <PortfolioCategoryCard
              title="Photography"
              hrefLink="/cultura/photography"
              cover={photographyData?.url || "/images/card-default-image.jpg"} // Fallback image
              shortDescription={photographyData?.shortDescription || "Descrizione non disponibile"}
            />
            <PortfolioCategoryCard
              title="Video"
              hrefLink="/cultura/video"
              shortDescription="IMMAGINA offre servizi video a tutto tondo. Produciamo di preferenza documentari per artisti, musicisti, attori, teatri, festival, matrimoni: per gente simpatica only."
              cover="https://res.cloudinary.com/immagina/image/upload/v1733128441/IMMAGINA/Video/Video_-_Cover_kvdqep.jpg"
            />
          </div>
        </section>
        {/* ---------- TEAM SECTION ---------- */}
        <section
          id="team"
          className="h-space lg:min-h-[calc(100vh-60px)] pt-4 xl:pt-8 px-4 lg:px-6 xl:pl-14 xl:pr-24 pb-20"
        >
          <h2 className="text-3xl xl:text-4xl font-courier font-bold mb-6 col-span-1">Team</h2>
          <TeamSection />
        </section>
      </main>
    </div>
  );
}
