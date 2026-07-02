interface HeaderProps {
  variant?: "home" | "page";
}

export default function Header({ variant = "home" }: HeaderProps) {
  const isHome = variant === "home";

  return <div className={isHome ? "mb-10" : "mb-8"} />;
}
