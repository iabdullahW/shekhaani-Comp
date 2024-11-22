import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Computer Components</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-white focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <div className="group relative">
            <button className="hover:text-gray-300">External Devices</button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-gray-700 rounded shadow-lg w-48">
              <a href="#keyboard" className="block px-4 py-2 hover:bg-gray-600">Keyboard</a>
              <a href="#mouse" className="block px-4 py-2 hover:bg-gray-600">Mouse</a>
              <a href="#monitor" className="block px-4 py-2 hover:bg-gray-600">Monitor</a>
              <a href="#printer" className="block px-4 py-2 hover:bg-gray-600">Printer</a>
              <a href="#speakers" className="block px-4 py-2 hover:bg-gray-600">Speakers</a>
              <a href="#headset" className="block px-4 py-2 hover:bg-gray-600">Headset/Headphones</a>
            </div>
          </div>

          <div className="group relative">
            <button className="hover:text-gray-300">Internal Components</button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-gray-700 rounded shadow-lg w-48">
              <a href="#cpu" className="block px-4 py-2 hover:bg-gray-600">Processor (CPU)</a>
              <a href="#motherboard" className="block px-4 py-2 hover:bg-gray-600">Motherboard</a>
              <a href="#psu" className="block px-4 py-2 hover:bg-gray-600">Power Supply Unit (PSU)</a>
              <a href="#ram" className="block px-4 py-2 hover:bg-gray-600">Random Access Memory (RAM)</a>
              <a href="#gpu" className="block px-4 py-2 hover:bg-gray-600">Graphics Card (GPU)</a>
              <a href="#nic" className="block px-4 py-2 hover:bg-gray-600">Network Interface Card (NIC)</a>
              <a href="#audio" className="block px-4 py-2 hover:bg-gray-600">Audio Card (Optional)</a>
              <a href="#bluetooth" className="block px-4 py-2 hover:bg-gray-600">Bluetooth Card (Optional)</a>
            </div>
          </div>

          <a href="#storage" className="hover:text-gray-300">Storage Devices</a>
          <a href="#cables" className="hover:text-gray-300">Cables & Adapters</a>
          <a href="#webcam" className="hover:text-gray-300">Webcams & Microphones</a>

          <div className="group relative">
            <button className="hover:text-gray-300">Case/Chassis</button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-gray-700 rounded shadow-lg w-48">
              <a href="#full-tower" className="block px-4 py-2 hover:bg-gray-600">Full Tower</a>
              <a href="#mid-tower" className="block px-4 py-2 hover:bg-gray-600">Mid Tower</a>
              <a href="#mini-tower" className="block px-4 py-2 hover:bg-gray-600">Mini Tower</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
