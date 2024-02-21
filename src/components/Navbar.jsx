import React from "react";

const Navbar = () => {
  return (
    <div className="bg-slate-300 flex justify-between py-5 px-10">
      {/* logo side */}
      <div className="flex font-bold">
        <span className="bg-yellow-300 rounded-s p-2">GYM</span>
        <span className="bg-red-300 rounded-e p-2">CLUB</span>
      </div>
      {/* Page side */}
      <div className="flex gap-6">
        <button>Home</button>
        <button>Price</button>
        <button>service</button>
        <button>Protfolio</button>
        <button>About</button>
        <button>contact</button>
      </div>
    </div>
  );
};

export default Navbar;
