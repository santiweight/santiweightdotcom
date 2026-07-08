import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center gap-4 mb-10">
      <Image
        src="/images/profile-photo.png"
        alt="Santi Weight"
        width={72}
        height={72}
        className="rounded-full object-cover w-[72px] h-[72px] bg-gray-200"
        priority
      />
      <h1 className="font-bold text-[22px]">
        <Link href="/" className="hover:underline">
          Santi Weight
        </Link>
      </h1>
    </header>
  );
}
