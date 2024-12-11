import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../Context/userContext";

const ProductForm = (onSubmit) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    pricePerUnit: "",
    unit: "",
    totalQuantity: "",
  });
  const { user } = useContext(UserContext);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form data
    if (
      formData.name &&
      formData.description &&
      formData.pricePerUnit &&
      formData.unit &&
      formData.totalQuantity
    ) {
      // Convert pricePerUnit and totalQuantity to numbers
      const data = {
        ...formData,
        pricePerUnit: parseFloat(formData.pricePerUnit),
        totalQuantity: parseFloat(formData.totalQuantity),
      };

      try {
        const response = await axios.post(
          "http://localhost:8081/product/register?masterCheck=*",
          data,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          console.log("Form Data:", data);
          // Clear form data
          setFormData({
            name: "",
            description: "",
            pricePerUnit: "",
            unit: "",
            totalQuantity: "",
          });
          // Show success message
          setSuccessMessage("Product successfully added!");
          setErrorMessage("");

          // Hide success message after 5 seconds
          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);
        } else {
          setErrorMessage("Failed to add product. Please try again.");
          setSuccessMessage("");
        }
      } catch (error) {
        console.error("Error:", error);
        setErrorMessage("An error occurred. Please try again.");
        setSuccessMessage("");
      }
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <form className="max-w-md w-full mx-auto" onSubmit={handleSubmit}>
        {successMessage && (
          <div className="mb-4 text-green-600 dark:text-green-400">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mb-4 text-red-600 dark:text-red-400">
            {errorMessage}
          </div>
        )}
        <h1 className="text-xl font-bold text-white">Add The Products</h1>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-slate-900"
            placeholder=" "
            required
            value={formData.name}
            onChange={handleChange}
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="description"
            id="description"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={formData.description}
            onChange={handleChange}
          />
          <label
            htmlFor="description"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="pricePerUnit"
            id="pricePerUnit"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={formData.pricePerUnit}
            onChange={handleChange}
          />
          <label
            htmlFor="pricePerUnit"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Price Per Unit
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group bg-gray-100 dark:bg-gray-800">
          <select
            name="unit"
            id="unit"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            value={formData.unit}
            onChange={handleChange}
          >
            <option className="bg-gray-100 dark:bg-gray-800" value="">
              Select Unit
            </option>
            <option className="bg-gray-100 dark:bg-gray-800" value="lit">
              Liters
            </option>
            <option className="bg-gray-100 dark:bg-gray-800" value="ml">
              Milliliters
            </option>
            <option className="bg-gray-100 dark:bg-gray-800" value="kg">
              Kilograms
            </option>
            <option className="bg-gray-100 dark:bg-gray-800" value="gm">
              Grams
            </option>
            <option className="bg-gray-100 dark:bg-gray-800" value="pkt">
              Packets
            </option>
          </select>
          <label
            htmlFor="unit"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Unit
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="totalQuantity"
            id="totalQuantity"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={formData.totalQuantity}
            onChange={handleChange}
          />
          <label
            htmlFor="totalQuantity"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Total Quantity
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
