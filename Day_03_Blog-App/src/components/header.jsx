function Header() {
  return (
    <header className="bg-blue-300 w-full flex items-center justify-between px-8 py-5 shadow-md">
      {/* Logo / Title */}
      <h1 className="text-4xl text-amber-950 font-bold">My Blog</h1>

      {/* Logout Button */}
      <button className="bg-red-700 text-2xl  text-white px-4 py-2 rounded-1.5xl hover:bg-red-800 transition">
        Logout
      </button>
    </header>
  );
}

export default Header;
