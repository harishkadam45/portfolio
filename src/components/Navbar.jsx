import logo from "../assets/hk-logo.png";
const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 p-2 shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center ">
        <div className="flex items-center">
          <img
            src={logo}
            alt="HK Logo"
            className="h-10 w-auto rounded-full object-contain"
          />
        </div>

        <div className="space-x-6 hidden md:flex text-white ">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
