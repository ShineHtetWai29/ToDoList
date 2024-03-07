import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import Button from "../../Button/Button";
import { useNavigate } from "react-router";

import axios from "axios";

const Categories = () => {
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    name: "",
    image: "",
  });

  const handleNameChange = (e) => {
    const selectedWriteName = e.target.value;
    setInputData({
      ...inputData,
      name: selectedWriteName,
    });
  };
  const handleImageChange = (e) => {
    const selectedImage = e.target.value;
    setInputData({
      ...inputData,
      image: selectedImage,
    });
  };

  

  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputData.image || !inputData.name) {
      alert("Please fill out all required fields.");
    }
    const apiUrl = "http://localhost:8080/categories";

    axios
      .post(apiUrl, { name: inputData.name, imageUrl: inputData.image })
      .then((value) => console.log(value));

    navigate("/");

  };
  console.log(inputData);

  const backHandler = () => {
    navigate("/");
    
  };
  return (
    <div className="p-4">
      <form action="" className="flex h-full justify-between flex-col">
        <FaArrowLeft onClick={backHandler} />
        <h1 className="font-bold text-xl mt-4 ">Add Category</h1>

        <div className="input">
          <div className="">
            <label className="block font-bold text-l mt-4">
              Category Image
            </label>
            <input
              type="text"
              placeholder="Input Category Image"
              className="w-full bg-gray-100 appearance-none border rounded-2xl p-4 mt-4  focus:bg-white focus:border-gray-300 focus:outline-none"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="w-full ">
          <label className="block font-bold text-l my-4">Categories</label>
          <div className="relative">
            <select
              type="text"
              className="w-full bg-gray-100 appearance-none border rounded-2xl p-4 focus:bg-white focus:border-gray-300 focus:outline-none"
              onChange={handleNameChange}
            >
              <option>School</option>
              <option>Design</option>
              <option>Sport</option>
              <option>Business</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="h-4 w-4">
                <FaChevronDown />
              </svg>
            </div>
          </div>
        </div>
      </form>
      <div className="mt-4">
      {/* <button onClick={submitHandler}> */}
        <Button btnText="Create Category" linkClick={submitHandler}/>
       {/* </button> */}
      </div>
    </div>
  );
};

export default Categories;
