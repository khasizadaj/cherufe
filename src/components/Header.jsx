import { Drumstick } from "lucide-react";

function Header() {
  return (
    <header className="py-12 text-orange-600">
      <nav className="flex gap-2 justify-center">
        <Drumstick size={40} strokeWidth={1.5} />
        <span className="text-2xl font-semibold tracking-wider">CHERUFE</span>
      </nav>
    </header>
  );
}

export default Header;
