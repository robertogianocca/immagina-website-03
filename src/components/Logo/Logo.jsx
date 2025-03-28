import Image from "next/image";

export default function Logo({ logo }) {
  return (
    <div className="w-[140px] sm:w-[190px] h-auto">
      <Image src={logo} width={190} height={60} alt="IMMAGINA" priority={true} />
    </div>
  );
}
