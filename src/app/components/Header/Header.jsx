export default function Header() {
    return (
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow">
        <div className="text-xl font-bold">Latore Atelier</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#products" className="hover:underline">Products</a></li>
            <li><a href="#follow-us" className="hover:underline">Follow Us</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  