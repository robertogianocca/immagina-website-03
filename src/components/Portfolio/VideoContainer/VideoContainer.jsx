"use client";
import Wrapper from "@/components/Wrapper/Wrapper";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { motion } from "framer-motion";
import PortfolioNavigation from "@/components/Portfolio/PortfolioNavigation/PortfolioNavigation";
import { videoDatabaseCultura } from "@/app/cultura/video/video-database-cultura";
export default function VideoContainer() {
  const portfolioCultura = {
    Video: {
      CARIE: {
        pictures: [
          {
            url: "https://res.cloudinary.com/immagina/image/upload/v1732543369/IMMAGINA/Video/thumb-carie_dbccnk.jpg",
            public_id: "IMMAGINA/Cultura/Portfolio/Photography/Fotografia_-_Cover_igvggl",
            longDescription:
              "Ho pensato che l’arrampicata potesse ridare dignità a queste montagne ferite”. Con queste parole Marzio introduce il progetto Carie. Carie è un progetto crossmediale indipendente a cura di Achille Mauri, Marzio Nardi e Federico Ravassard. Narra di Carrara e delle sue cave. Il film scava nel passato,  presente e futuro di Carrara. Protagonisti gli arrampicatori, minatori, geologi, ambientalisti di tutta Italia. Tuono Blu, (nickname di Roberto Gianocca/IMMAGINA) è stato integrato del team quale cameraman/dronista, collaborato nella postproduzione e nell’animazione 3D del logo.",
            shortDescription:
              "Film sulle cave di Carrara. Un film realizzato con un gruppo di appassionati (della vita: cavisti, geologi, ambientalisti, scalatori, cineasti) hanno dialogato con la cava del Michelangelo, interrogandosi su passato presente e futuro del celebre marmo.",
            width: 800,
            height: 640,
            alt: "Image",
          },
        ],
      },
      pictures: [[Object]],
      "Memorie Future Laveggio": {
        pictures: [
          {
            url: "https://res.cloudinary.com/immagina/image/upload/v1724931246/IMMAGINA/Video/thumb-memorie-future_a1w2in.jpg",
            public_id: "IMMAGINA/Cultura/Portfolio/Photography/Fotografia_-_Cover_igvggl",
            longDescription:
              "In passato il Laveggio scorreva indisturbato da Stabio a Capolago dove versava le sue acque. Anni ’60: boom economico. Il Laveggio diventa una cloaca. Si edifica il Parco industriale Laveggio. Arrivano il traffico, strade, ferrovie, gas-dotti, elettrodotti,  parcheggi, spedizionieri, doganieri eccetera eccetera. Anno 2023: si inaugura il neo-Parco ecologico. Forse sarebbe più appropriato parlare di Riserva del Laveggio, luogo riservato ai superstiti, flora e fauna, nativi. Un po’ come le celebri riserve dell’America del Nord…  Nel suo splendore un sentiero, discontinuo in vero, costeggia autostrada, treno, attraversa le zone industriali, le zone agricole e s’arrende a Riva San Vitale dove il fiume sfocia, in gran fretta, nel Ceresio.",
            shortDescription:
              "In passato il Laveggio scorreva indisturbato da Stabio a Capolago dove versava le sue limpide acque. Anni ’60: boom economico. Il Laveggio diventa una cloaca. Si edifica il Parco industriale Laveggio. Anno 2023: si inaugura il parco del Laveggio…",
            width: 800,
            height: 640,
            alt: "Image",
          },
        ],
      },
      "Met Parachute MCR": {
        pictures: [
          {
            url: "https://res.cloudinary.com/immagina/image/upload/v1724931249/IMMAGINA/Video/thumb-met-parachute_zigmgf.jpg",
            public_id: "IMMAGINA/Cultura/Portfolio/Photography/Fotografia_-_Cover_igvggl",
            longDescription:
              "Sport pubblicitario di Achille Mauri per i caschi Parachute della ditta MET di Lecco. Location:  Scozia Ligura e Lecco. Riprese con il drone, correzione cromatica e postproduzione di Roberto Gianocca/IMMAGINA.",
            shortDescription:
              "Sport pubblicitario di Achille Mauri per i caschi Parachute della ditta MET di Lecco. Location:  Scozia Ligura e Lecco. Riprese con il drone, correzione cromatica e postproduzione di Roberto Gianocca/IMMAGINA.",
            width: 800,
            height: 640,
            alt: "Image",
          },
        ],
      },
    },
  };

  const mappedVideo = videoDatabaseCultura.map((item, index) => {
    return (
      <div className="w-full h-full relative flex flex-col gap-4 lg:gap-y-4 bg-zinc-50 shadow-xl transition-all duration-1000 hover:shadow-slate-600 shadow-slate-400">
        <h2 className="pt-4 px-4 font-courier font-bold text-lg xl:text-xl">{item.title}</h2>
        <div className="hidden px-4 md:block lg:w-[80%] text-2xs xl:text-xs font-semibold opacity-85">
          {item.shortDescription}
        </div>
        <div className="w-full aspect-video">
          <iframe
            src={item.videoLink}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            className="w-full h-full"
            title={item.title}
          ></iframe>
        </div>
      </div>
    );
  });
  return (
    <div className="">
      <NavigationBar menuColor="text-custom-red hover:border-b-2 hover:border-custom-red" />
      <Wrapper addClass="!px-0 lg:!px-4 xl:!pl-14 xl:!pr-24">
        <motion.div
          className="text-custom-brown"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* ---------- Portfolio Navigation ---------- */}
          <div className="px-4 pt-4 lg:p-0">
            <PortfolioNavigation
              title={"Video"}
              longDescription={
                "Produciamo corto e lungo metraggi. Produciamo di preferenza documentari per artisti, e manifestazioni culturali. Anche matrimoni per gente simpatica. Per imprenditori simpatici e con umore produciamo volontieri spot pubblicitari, simpatici e … naturalmente ci integriamo volentieri a un più esteso team per prestar servizi quali riprese, riprese con droni, montaggio, color balancing, prise de son, produzione di colonne sonore, eccetera eccetera."
              }
              path={""}
              pathTree={["", ""]}
              labelColor={"labelTitleColor"}
            />
          </div>

          {/* ---------- Card List ---------- */}
          <ul className="video-grid">{mappedVideo}</ul>
        </motion.div>
      </Wrapper>
    </div>
  );
}
