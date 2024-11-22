import React, { useState } from "react";
import jsPDF from "jspdf";
import AdminPage from "./admin";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { BsCartX } from "react-icons/bs";


const App = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([
    
    // External Devices
    { id: 1, name: "Mechanical Keyboard", price: 70, quantity: 10, category: "External Devices", image: "https://images-cdn.ubuy.qa/63400c68afe02d2b0c7aeb85-mechanical-gaming-keyboard-87-keys-small.jpg" },
    { id: 2, name: "Wireless Mouse", price: 30, quantity: 10, category: "External Devices", image: "https://img.drz.lazcdn.com/static/pk/p/8743024fa6c2a7a62f8a2d85ca0d4b46.jpg_720x720q80.jpg" },
    { id: 3, name: "LED Monitor", price: 200, quantity: 10, category: "External Devices", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHRNeESN3sI36OuYeJDZYYXjjooXtCh32ZA&s" },
    { id: 4, name: "Laser Printer", price: 150, quantity: 5, category: "External Devices", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZtvKJCDUt4TfYli0-3GI_oJhsNmDgec0uw&s" },
    { id: 5, name: "Bluetooth Speakers", price: 50, quantity: 15, category: "External Devices", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzm330_QXVLpQJnT6jKW3ixSYYI9Vka9t6Q&s" },
    { id: 6, name: "Wireless Headset", price: 60, quantity: 12, category: "External Devices", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-Bfbzv0rfvM8DsKZgWsEIpHNw6e8Mhi1dQ&s" },

    // Storage Devices
    { id: 7, name: "1TB External HDD", price: 100, quantity: 20, category: "Storage Devices", image: "https://globalcomputers.pk/wp-content/uploads/2021/06/Seagate-Expansion-Portable-Hard-Drive.jpg" },
    { id: 8, name: "512GB SSD", price: 120, quantity: 15, category: "Storage Devices", image: "https://m.media-amazon.com/images/I/31vp9ZYw9mL.jpg" },

    // Cables & Adapters
    { id: 9, name: "HDMI Cable", price: 15, quantity: 50, category: "Cables & Adapters", image: "https://img.drz.lazcdn.com/static/pk/p/d9cbd77524c729a73e72d7a0c28501fe.jpg_720x720q80.jpg_.webp" },
    { id: 10, name: "USB-C Adapter", price: 25, quantity: 40, category: "Cables & Adapters", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsWbO_UtEdi-YivsE_YYokSE_Byys_Qo2EWQ&s" },

    // Webcams & Microphones
    { id: 11, name: "1080p Webcam", price: 80, quantity: 10, category: "Webcams & Microphones", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVKhuo7VVy4OrTsUjtVWywOLkeSjT6OKEqA&s" },
    { id: 12, name: "Podcast Microphone", price: 100, quantity: 8, category: "Webcams & Microphones", image: "https://m.media-amazon.com/images/I/615XaXY83ZL._AC_SL1500_.jpg" },

    // Internal Components
    { id: 13, name: "Processor (CPU)", price: 300, quantity: 5, category: "Internal Components", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJcQAFG_fhLGx5kRsmjwu9y1yYuUmMBFVu0A&s" },
    { id: 14, name: "Motherboard", price: 150, quantity: 5, category: "Internal Components", image: "https://www.zdnet.com/a/img/resize/44e03660f0e18a6df4a866c26f27026ebcdb5f2e/2024/08/02/c24bdaea-0e2c-4a85-810f-1334a3f2b83c/asus-rog-strix-z790-e.jpg?auto=webp&width=1280" },
    { id: 15, name: "Power Supply Unit (PSU)", price: 80, quantity: 10, category: "Internal Components", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuY4dhocOW0pWsRdZTz_7qvsgMlyGhkivwuA&s" },
    { id: 16, name: "8GB RAM", price: 40, quantity: 20, category: "Internal Components", image: "https://www.laptab.com.pk/theme/mobile/216/ram-ddr3.jpg" },
    { id: 17, name: "Graphics Card (GPU)", price: 500, quantity: 3, category: "Internal Components", image: "https://cdn.mos.cms.futurecdn.net/XLaJnNkhTpQgPnUm7ptpcN-1200-80.jpg" },
    { id: 18, name: "Network Interface Card (NIC)", price: 25, quantity: 10, category: "Internal Components", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_csER-eLXYy5oqLXLn0N5w7Lxvcwgjp8wCw&s" },
    { id: 19, name: "Audio Card (Optional)", price: 50, quantity: 7, category: "Internal Components", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtC10627fm0LgP8RaUZW92Y93VmfmbXnaQaw&s" },

    // Case/Chassis
    { id: 20, name: "Full Tower Case", price: 120, quantity: 5, category: "Case/Chassis", image: "https://static3.webx.pk/files/19643/Images/cooler-master-haf-700-white-casing-price-in-pakistan-2-19643-2098825-010624065709212.png" },
    { id: 21, name: "Mid Tower Case", price: 100, quantity: 10, category: "Case/Chassis", image: "https://eezepc.com/wp-content/uploads/2024/05/corsair-1-5.webp" },
    { id: 22, name: "Mini Tower Case", price: 80, quantity: 8, category: "Case/Chassis", image: "https://www.kosovo.ubuy.com/productimg/?image=aHR0cHM6Ly9pLmViYXlpbWcuY29tL2ltYWdlcy9nLzZEc0FBT1N3Nkx0bFJQeXQvcy1sNTAwLndlYnA.jpg" },

    // Optional Components
    { id: 23, name: "Bluetooth Card", price: 30, quantity: 12, category: "Optional Components", image: "https://m.media-amazon.com/images/I/51Kzw8kfPdL._AC_UF1000,1000_QL80_.jpg" }
  ]);



  const [showAdminPage, setShowAdminPage] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const categories = ["All", "External Devices", "Storage Devices", "Cables & Adapters", "Webcams & Microphones", "Internal Components", "Case/Chassis", "Optional Components"];
  const addToCart = (product) => {
    if (product.quantity > 0) {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === product.id);
        if (existingItem) {
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prevCart, { ...product, quantity: 1 }];
      });

      // Reduce stock
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.id === product.id
            ? { ...p, quantity: Math.max(0, p.quantity - 1) }
            : p
        )
      );
    } else {
      alert(`${product.name} is out of stock.`);
    }
  };



  const handleEditProduct = (product) => {
    setEditProduct(product);
  };

  const handleSaveEdit = () => {
    if (editProduct.quantity < 0) {
      alert("Quantity cannot be negative.");
      return;
    }

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === editProduct.id ? { ...product, ...editProduct } : product
      )
    );
    setEditProduct(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditProduct((prev) => ({
      ...prev,
      [name]: name === "quantity" || name === "price" ? parseFloat(value) : value,
    }));
  };

  const removeFromCart = (productId) => {
    const item = cart.find((item) => item.id === productId);
    if (item) {
      setCart(
        cart
          .map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0)
      );
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const filteredProducts = products
    .filter((product) =>
      selectedCategory === "All"
        ? true
        : product.category.toLowerCase() === selectedCategory.toLowerCase()
    )
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const generatePDF = () => {
      const doc = new jsPDF();
      let y = 60;
  
      const imgData = 'https://www.shutterstock.com/image-vector/computer-monitor-blank-display-screen-600nw-2476195103.jpg';
  
  
      addHeader(doc, imgData);
  
      y += 40; 
  
      
      y = addShoppingCartTitle(doc, y);
  
      y = addTableHeaders(doc, y);
  
    
      y = addTableRows(doc, y);
  
      y = addTotals(doc, y);
  
     
      y = addFooter(doc, y);
  
   
      doc.save("bill.pdf");
  };
  
  const addHeader = (doc, imgData) => {
      // Logo
      doc.addImage(imgData, 'PNG', 35, 10, 20, 30);
  
      // Shop Name
      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text("Fast Technology", 70, 20);
  
      // Shop Address 
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text("Shop # M98 1st Floor, Odeon Centre, Saddar", 70, 27);
      doc.text("Ph: 021-32700733, 0321-2800050", 70, 32);
  };
  
  const addShoppingCartTitle = (doc, y) => {
      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");
      doc.text("Shopping Cart", 14, y);
      return y + 20; 
  };
  
  const addTableHeaders = (doc, y) => {
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text("Item", 14, y);
      doc.text("Quantity", 100, y);
      doc.text("Price", 140, y);
      doc.text("Total", 180, y);
      y += 10;
  
      doc.setLineWidth(0.5);
      doc.line(14, y, 200, y);
      return y + 10; 
  };
  
  const addTableRows = (doc, y) => {
      cart.forEach((item, index) => {
          doc.setFont("helvetica", "normal");
          doc.text(item.name, 14, y);
          doc.text(`${item.quantity}`, 100, y);
          doc.text(`PKR ${(item.price).toFixed(2)}`, 140, y);
          doc.text(`PKR ${(item.price * item.quantity).toFixed(2)}`, 180, y);
          y += 10;
  
          if (y > 280) {
              doc.addPage();
              y = 20;
          }
      });
      return y; 
  };
  
  const addTotals = (doc, y) => {
      doc.setFont("helvetica", "bold");
      const subtotal = calculateTotal();
      const total = subtotal - discount;
  
      doc.text(`Subtotal:`, 14, y);
      doc.text(`PKR ${subtotal.toFixed(2)}`, 180, y);
      y += 10;
  
      doc.text(`Discount:`, 14, y);
      doc.text(`- PKR ${discount.toFixed(2)}`, 180, y);
      y += 10;
  
      doc.setFont("helvetica", "bold");
      doc.text(`Total:`, 14, y);
      doc.text(`PKR ${total.toFixed(2)}`, 180, y);
  
      doc.setLineWidth(0.5);
      doc.line(14, y + 10, 200, y + 10);
      return y + 20; // Return new y position
  };
  
  const addFooter = (doc, y) => {
      y += 20; // Space before footer
  
      doc.setFont("helvetica", "normal");
      doc.text("Receiver's Signature: ____________________", 14, y);
      doc.text("Authorized Signature: ____________________", 110, y);
  
      return y;
  };
  
  const clearCart = () => {
      setCart([]);
  };
  
  
  const [discount, setDiscount] = useState(0);


  const handleDiscountChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setDiscount(value); 
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap p-4 bg-black">
    {/* Left Section: Products and Filters */}
    <div className="w-full md:w-3/4 mr-0 md:mr-4 bg-black">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
        <img
          src="https://www.shutterstock.com/image-vector/computer-monitor-blank-display-screen-600nw-2476195103.jpg"
          alt=""
          className="w-12 h-12 rounded-[50%] border-white"
        />
        <input
          type="text"
          placeholder="Search all products here..."
          className="p-2 rounded-full w-full sm:w-auto max-w-xs bg-gradient-to-br from-gray-400 to-gray-500 border-none text-black text-lg focus:outline-none focus:bg-gradient-to-br focus:from-gray-50 focus:to-gray-500 shadow-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => setShowAdminPage(!showAdminPage)}
          className="px-8 py-2 text-[#DDD7D7] font-bold text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-[#DDD7D7] hover:scale-105 hover:border-[#800000] hover:shadow-[#800000] hover:shadow-2xl focus:outline-none"
        >
          {showAdminPage ? "Hide Admin Panel" : "Show Admin Panel"}
        </button>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="py-2 px-4 rounded-full w-full sm:w-auto max-w-xs bg-gradient-to-br from-gray-400 to-gray-500 border-none text-black text-lg focus:outline-none focus:bg-gradient-to-br focus:from-gray-50 focus:to-gray-500 shadow-lg"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
  
      {showAdminPage && (
        <AdminPage onAddProduct={(newProduct) => setProducts([...products, newProduct])} />
      )}
  
      {/* Edit Product Form */}
      {editProduct && (
        <div className="mt-4 p-4  rounded-lg shadow-md mb-4">
          <h3 className="text-lg font-semibold">Edit Product</h3>
          <div>
            <label className="block">Product Name</label>
            <input
              type="text"
              name="name"
              value={editProduct.name}
              onChange={handleInputChange}
              className="p-2 rounded-lg w-full border"
            />
          </div>
          <div>
            <label className="block">Price</label>
            <input
              type="number"
              name="price"
              value={editProduct.price}
              onChange={handleInputChange}
              className="p-2 rounded-lg w-full border"
            />
          </div>
          <div>
            <label className="block">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={editProduct.quantity}
              onChange={handleInputChange}
              className="p-2 rounded-lg w-full border"
            />
          </div>
          <div className="flex space-x-4 mt-3">
            <button
              onClick={handleSaveEdit}
              className="px-5 py-2 text-[#DDD7D7] font-bold text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-[#DDD7D7] hover:scale-105 hover:border-green-600 hover:shadow-green-600 hover:shadow-2xl focus:outline-none"
            >
              Save
            </button>
            <button
              onClick={() => setEditProduct(null)}
              className="px-4 py-2 text-[#DDD7D7] font-bold text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-[#DDD7D7] hover:scale-105 hover:border-[#800000] hover:shadow-[#800000] hover:shadow-2xl focus:outline-none"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
  
      {/* Product Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border border-red-600 rounded-lg shadow-md p-4 flex flex-col"
          >
            <div className="flex items-center">
              <img src={product.image} alt={product.name} className="w-24 h-24 mb-4" />
              <h3 className="text-[16px] ml-5 font-bold text-[#DDD7D7]">{product.name}</h3>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-500">Stock: {product.quantity}</p>
              {product.quantity === 0 && <p className="text-red-500">Sold Out</p>}
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-blue-500 font-bold text-[17px]">
                PKR {product.price.toFixed(2)}
              </p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => addToCart(product)}
                  disabled={product.quantity === 0}
                  className={`px-1 py-1 text-[#DDD7D7] font-bold rounded-full shadow-lg transition-transform transform ${
                    product.quantity === 0
                      ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                      : "border-2 border-[#DDD7D7] hover:scale-105 hover:border-green-600 hover:shadow-green-500/50 hover:shadow-2xl focus:outline-none"
                  }`}
                >
                  {product.quantity === 0 ? <BsCartX /> : <TiShoppingCart />}
                </button>
                <button
          onClick={() => handleEditProduct(product)} // Edit button click
          className="px-1 py-1 text-[#DDD7D7] font-bold rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-[#DDD7D7] hover:scale-105 hover:border-[#800000] hover:shadow-[#800000] hover:shadow-2xl focus:outline-none"
        >
                  <MdOutlineEdit />
                </button>
              </div> 
            </div>
          </div>
        ))}
      </div>
    </div>
  
    {/* Right Section: Cart */}
    <div className="w-full md:w-1/4 border bg-[#141414] border-[#800000] rounded-lg shadow-md p-4 mt-4 md:mt-0 text-[#DDD7D7]">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center text-sm"
          >
            <div className="flex items-center">
              <img src={item.image} alt={item.name} className="w-10 h-10 mr-3" />
              <span>
                {item.name} x {item.quantity}
              </span>
            </div>
            <span>PKR {(item.price * item.quantity).toFixed(2)}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 px-2 py-1 text-[20px]"
            >
              <RiDeleteBinLine />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4 border-t pt-2">
        <p className="flex justify-between">
          <span>Subtotal</span>
          <span>PKR {calculateTotal().toFixed(2)}</span>
        </p>
        <div className="flex justify-between items-center mt-2">
          <span>Discount</span>
          <input
            value={discount}
            onChange={handleDiscountChange}
            className="w-16 p-1 border rounded bg-gray-700 text-white"
            placeholder="0"
          />
        </div>
        <p className="flex justify-between mt-2">
          <span>Total</span>
          <span>PKR {(calculateTotal() - discount).toFixed(2)}</span>
        </p>
      </div>
      <div className="mt-4">
        <button
          onClick={generatePDF}
          className="w-full px-4 py-2 my-2 text-[#DDD7D7] font-bold text-lg rounded-[10px] shadow-lg transition-transform transform bg-transparent border-2 border-[#DDD7D7] hover:scale-95 hover:border-[#800000] hover:shadow-[#800000] hover:shadow-2xl focus:outline-none"
        >
          Generate Bill
        </button>
        <button
          onClick={clearCart}
          className="w-full px-4 py-2 my-2 text-[#DDD7D7] font-bold text-lg rounded-[10px] shadow-lg transition-transform transform bg-transparent border-2 border-[#DDD7D7] hover:scale-95 hover:border-[#800000] hover:shadow-[#800000] hover:shadow-2xl focus:outline-none"
        >
          Clear Cart
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default App;