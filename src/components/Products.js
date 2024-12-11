import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Modal from "./Modal";
import ProductForm from "./AddProduct"

export default function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Apples",
      description: "Fresh and juicy apples from the orchard",
      pricePerUnit: 2.5,
      unit: "kg",
      stockQuantity: 150.0,
      totalQuantity: 200.0,
    },
    {
      id: 2,
      name: "Bananas",
      description: "Ripe bananas with a sweet taste",
      pricePerUnit: 1.2,
      unit: "dozen",
      stockQuantity: 50.0,
      totalQuantity: 100.0,
    },
    {
      id: 3,
      name: "Oranges",
      description: "Citrusy and tangy oranges",
      pricePerUnit: 3.0,
      unit: "kg",
      stockQuantity: 75.0,
      totalQuantity: 100.0,
    },
    {
      id: 4,
      name: "Milk",
      description: "Fresh organic milk",
      pricePerUnit: 1.5,
      unit: "liter",
      stockQuantity: 100.0,
      totalQuantity: 200.0,
    },
    {
      id: 5,
      name: "Rice",
      description: "Long-grain basmati rice",
      pricePerUnit: 0.8,
      unit: "kg",
      stockQuantity: 500.0,
      totalQuantity: 1000.0,
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [whichModal, setWhichModal] = useState("");

  const onDetail = (id) => {
    setWhichModal("detail");
    console.log(id);
    setIsOpen(true);
  };

  const onUpdate = (id) => {
    setWhichModal("update");
    console.log(id);
    setIsOpen(true);
  };

  const handleAddProduct = ()=>{
    setWhichModal("add");
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex flex-col w-full justify-between items-center">
        <div className="h-12"><button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" onClick={handleAddProduct}>Add</button></div>
        <div className="w-full h-full overflow-y-auto">
          <div className="bg-gray-100 dark:bg-gray-800">
            <div className="flex flex-wrap justify-center gap-4">
              {products.map((item, index) => (
                <ProductCard
                  index={index}
                  name={item.name}
                  description={item.description}
                  pricePerUnit={item.pricePerUnit}
                  unit={item.unit}
                  stockQuantity={item.stockQuantity}
                  totalQuantity={item.totalQuantity}
                  onDetail={onDetail}
                  onUpdate={onUpdate}
                />
              ))}
            </div>
            <Modal onClose={setIsOpen} isOpen={isOpen}>
              {whichModal === "detail" && <p>Detail page</p>}
              {whichModal === "update" && <ProductUpdateForm />}
              {whichModal === "add" && <ProductForm />}
            </Modal>
          </div>
        </div>
        <div>3</div>
      </div>
    </>
  );
}

const ProductUpdateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    pricePerUnit: "",
    unit: "kg", // Default unit
    stockQuantity: "",
    totalQuantity: "",
  });

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data (e.g., send it to an API)
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-slate-800 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-300 mb-4">
        Update Product
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Product Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-400">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-800"
            required
          />
        </div>

        {/* Product Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-400">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-800"
            required
          />
        </div>

        {/* Price per Unit */}
        <div className="mb-4">
          <label htmlFor="pricePerUnit" className="block text-gray-400">
            Price per Unit
          </label>
          <input
            type="number"
            id="pricePerUnit"
            name="pricePerUnit"
            value={formData.pricePerUnit}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-800"
            step="0.01"
            required
          />
        </div>

        {/* Unit */}
        <div className="mb-4">
          <label htmlFor="unit" className="block text-gray-400">
            Unit
          </label>
          <select
            id="unit"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-800"
          >
            <option value="kg">kg</option>
            <option value="g">g</option>
            <option value="ltr">ltr</option>
            <option value="pcs">pcs</option>
          </select>
        </div>

        {/* Stock Quantity */}
        <div className="mb-4">
          <label htmlFor="stockQuantity" className="block text-gray-400">
            Stock Quantity
          </label>
          <input
            type="number"
            id="stockQuantity"
            name="stockQuantity"
            value={formData.stockQuantity}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-800"
            step="0.1"
            required
          />
        </div>

        {/* Total Quantity */}
        <div className="mb-4">
          <label htmlFor="totalQuantity" className="block text-gray-400">
            Total Quantity
          </label>
          <input
            type="number"
            id="totalQuantity"
            name="totalQuantity"
            value={formData.totalQuantity}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-800"
            step="0.1"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};
