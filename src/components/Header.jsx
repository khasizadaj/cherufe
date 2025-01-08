import { Drumstick } from "lucide-react";

function Header() {
  return (
    <header>
      <nav className="text-orange-600 flex gap-2 justify-center items-center h-[100px]">
        <Drumstick size={40} strokeWidth={1.5} />
        <span className="text-2xl font-semibold tracking-wider">CHERUFE</span>
      </nav>
    </header>
  );
}

export default Header;
