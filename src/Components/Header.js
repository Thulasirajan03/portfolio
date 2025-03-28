

function Header() {
  return (
    <header className="flex justify-between items-center px-5 py-4 bg-primary text-xl">
     
      <a className="text-white font-bold text-2xl font-poppins" href="#">Portfolio</a>

      
      <nav className="hidden md:block">
        <ul className="flex text-white space-x-4">
          <li className="nav"><a href="#">Home</a></li>
          <li className="nav"><a href="#about">About</a></li>
          <li className="nav"><a href="#project">Projects</a></li>
          <li className="nav"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
