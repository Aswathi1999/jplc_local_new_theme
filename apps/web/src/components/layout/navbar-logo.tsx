import Image from "next/image";

interface NavbarLogoProps {
  lightBg?: boolean;
}

export function NavbarLogo({ lightBg = false }: NavbarLogoProps) {
  return (
    <a href="/" className="flex items-center">
      <Image
        src={lightBg ? "/jplc_logo_1.png" : "/jplc_logo_2.png"}
        alt="JPLC Holdings"
        width={180}
        height={72}
        className="h-16 w-auto object-contain"
        priority
      />
    </a>
  );
}
