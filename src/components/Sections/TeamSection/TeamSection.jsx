import TeamCard from "@/components/Sections/TeamSection/TeamCard/TeamCard";

const portraitRobertoGianocca = "/images/team/roberto-gianocca.jpg";
const portraitAdrianoHeitmann = "/images/team/adriano-heitmann.jpg";

const teamList = [
  {
    name: "Adriano Heitmann",
    description: "Fondatore. Fotografo e art director.",
    picture: portraitAdrianoHeitmann,
  },
  {
    name: "Roberto Gianocca",
    description: "Regista, cameraman, fotografo, grafico, webdesigner.",
    picture: portraitRobertoGianocca,
  },
];

const mappedTeam = teamList.map((item, index) => (
  <TeamCard key={index} name={item.name} description={item.description} picture={item.picture} />
));

export default function TeamSection() {
  return (
    <div className="grid grid-cols-2 2xl:grid-cols-6 gap-y-10 gap-x-4 xl:gap-6">{mappedTeam}</div>
  );
}
