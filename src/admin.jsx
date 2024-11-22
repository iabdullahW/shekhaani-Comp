import React, { useState } from "react";

const AdminPage = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    price: "",
    image: "",
    quantity: "",
    category: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    const productToAdd = {
      ...newProduct,
      id: Date.now(),
      price: parseFloat(newProduct.price),
      quantity: parseInt(newProduct.quantity),
    };


    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
    
    
    const updatedProducts = [...existingProducts, productToAdd];
    
    
    localStorage.setItem("products", JSON.stringify(updatedProducts));


    onAddProduct(productToAdd);
    
    
    setNewProduct({
      id: "",
      name: "",
      price: "",
      image: "",
      quantity: "",
      category: "", 
    });
  };

  return (
    <div className="w-[85%] p-4 bg-black shadow-lg rounded-lg flex items-center text-center ">
      <h2 className="text-xl font-semibold mb-4">Admin - Add New Product</h2>
      <div className="space-y-2">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleChange}
          className="p-2 rounded-full w-full max-w-xs bg-gradient-to-br ml-0 from-gray-800 to-gray-500 border-none text-black text-lg focus:outline-none focus:bg-gradient-to-br focus:from-gray-50 focus:to-gray-500 shadow-lg"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleChange}
          className="p-2 rounded-full w-full max-w-xs bg-gradient-to-br ml-0 from-gray-800 to-gray-500 border-none text-black text-lg focus:outline-none focus:bg-gradient-to-br focus:from-gray-50 focus:to-gray-500 shadow-lg"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={handleChange}
          className="p-2 rounded-full w-full max-w-xs bg-gradient-to-br ml-0 from-gray-800 to-gray-500 border-none text-black text-lg focus:outline-none focus:bg-gradient-to-br focus:from-gray-50 focus:to-gray-500 shadow-lg"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Stock Quantity"
          value={newProduct.quantity}
          onChange={handleChange}
          className="p-2 rounded-full w-full max-w-xs bg-gradient-to-br ml-0 from-gray-800 to-gray-500 border-none text-black text-lg focus:outline-none focus:bg-gradient-to-br focus:from-gray-50 focus:to-gray-500 shadow-lg"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newProduct.category}
          onChange={handleChange}
          className="p-2 rounded-full w-full max-w-xs bg-gradient-to-br ml-0 from-gray-800 to-gray-500 border-none text-black text-lg focus:outline-none focus:bg-gradient-to-br focus:from-gray-50 focus:to-gray-500 shadow-lg "
        />
        <div>
        <button
          onClick={handleAddProduct}
          className="px-8 py-2 text-[#DDD7D7] font-bold text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-[#DDD7D7] hover:scale-105 hover:border-[#800000] hover:shadow-[#800000] hover:shadow-2xl focus:outline-none"
        >
          Add Product
        </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
