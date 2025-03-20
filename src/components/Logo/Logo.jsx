import Image from "next/image";

export default function Logo({ logo }) {
  return (
    <div className="w-[190px] h-auto">
      <Image src={logo} width={190} height={190} alt="Logo IMMAGINA" priority />
    </div>
  );
}
