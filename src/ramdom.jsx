import React, { useState } from "react";

const categories = [
  {
    name: "External Devices",
    products: [
      { name: "Mechanical Keyboard", image: "keyboard.jpg" },
      { name: "Wireless Mouse", image: "mouse.jpg" },
      { name: "LED Monitor", image: "monitor.jpg" },
      { name: "Laser Printer", image: "printer.jpg" },
      { name: "Bluetooth Speakers", image: "speakers.jpg" },
      { name: "Wireless Headset", image: "headset.jpg" },
    ],
  },
  {
    name: "Storage Devices",
    products: [
      { name: "1TB External HDD", image: "hdd.jpg" },
      { name: "512GB SSD", image: "ssd.jpg" },
    ],
  },
  {
    name: "Cables & Adapters",
    products: [
      { name: "HDMI Cable", image: "hdmi.jpg" },
      { name: "USB-C Adapter", image: "usb-c.jpg" },
    ],
  },
  {
    name: "Webcams & Microphones",
    products: [
      { name: "1080p Webcam", image: "webcam.jpg" },
      { name: "Podcast Microphone", image: "microphone.jpg" },
    ],
  },
  {
    name: "Internal Components",
    products: [
      { name: "Processor (CPU)", image: "cpu.jpg" },
      { name: "Motherboard", image: "motherboard.jpg" },
      { name: "Power Supply Unit (PSU)", image: "psu.jpg" },
      { name: "8GB RAM", image: "ram.jpg" },
      { name: "Graphics Card (GPU)", image: "gpu.jpg" },
      { name: "Network Interface Card (NIC)", image: "nic.jpg" },
      { name: "Audio Card (Optional)", image: "audio-card.jpg" },
    ],
  },
  {
    name: "Case/Chassis",
    products: [
      { name: "Full Tower Case", image: "full-tower.jpg" },
      { name: "Mid Tower Case", image: "mid-tower.jpg" },
      { name: "Mini Tower Case", image: "mini-tower.jpg" },
    ],
  },
  {
    name: "Optional Components",
    products: [
      { name: "Bluetooth Card", image: "bluetooth-card.jpg" },
    ],
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="p-6">
      {/* Categories List */}
      <div className="flex flex-wrap gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category)}
            className="px-6 py-3 rounded-lg bg-gray-200 hover:bg-blue-500 hover:text-white transition"
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Detailed View */}
      {selectedCategory && (
        <div className="p-4 border rounded-lg bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">{selectedCategory.name}</h2>
          <div className="grid grid-cols-2 gap-4">
            {selectedCategory.products.map((product, index) => (
              <div key={index} className="p-4 border rounded-lg text-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover mb-2"
                />
                <p className="font-medium">{product.name}</p>
              </div>
            ))}
          </div>
          {/* Back Button */}
          <button
            onClick={() => setSelectedCategory(null)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Categories
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
