import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import Button from "../../Button/Button";
import { useNavigate } from "react-router";
import axios from "axios";
import Home from "../HomePage/Home";
import { CategoryRequest } from "../CategoriesPage/CategoryRequest";

const Task = () => {
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState([]);

  const [inputData, setInputData] = useState({
    title: "",
    startTime: "",
    endTime: "",
    repeat: "",
    categoryId: "",
  });

  const backHandler = () => {
    navigate("/");
  };

  const handleTitleChange = (e) => {
    const selectWriteTitle = e.target.value;
    setInputData({
      ...inputData,
      title: selectWriteTitle,
    });
  };

  const handleStartTimeChange = (e) => {
    const selectWriteStartTime = e.target.value;
    setInputData({
      ...inputData,
      startTime: selectWriteStartTime,
    });
  };

  const handleEndTimeChange = (e) => {
    const selectWriteEndTime = e.target.value;
    setInputData({
      ...inputData,
      endTime: selectWriteEndTime,
    });
  };

  const handleCategoryChange = (e) => {

    const selectWriteCategoryId = e.target.value;
    console.log(selectWriteCategoryId)
    setInputData({
      ...inputData,
      categoryId: selectWriteCategoryId,
    });
    console.log(inputData)

  };

  const handleRepeatChange = (e) => {
    const selectWriteRepeat = e.target.value;
    setInputData({
      ...inputData,
      repeat: selectWriteRepeat,
    });
  };

  const taskSubmitHandler = (e) => {
    e.preventDefault();

    console.log(inputData)
    if (
      !inputData.startTime ||
      !inputData.endTime ||
      !inputData.repeat ||
      !inputData.title ||
      !inputData.categoryId
    ) {
      alert("Please fill out all required fields.");
    }
    const apiUrl = "http://localhost:8080/tasks";

    axios
      .post(apiUrl, {
        label: inputData.title,
        startTime: inputData.startTime,
        endTime: inputData.endTime,
        repeatType: inputData.repeat,
        categoryId: inputData.categoryId,
      })
      .then((value) => console.log(value));

    navigate("/");
  };

  useEffect(() => {
    CategoryRequest()
      .then((response) => {
        console.log("Responsponse data ", response.data);
        if (response.data.httpResponse === 200) {
          console.log("Writer list data", response.data.data);
          setCategoryData(response.data.data);
        }
      })
      .catch((error) => {
        if (error.response.data.httpResponse === 502) {
          console.log(error.response.data.message);
          toast.error(error.response.data.message);
        }
      });

    console.log(categoryData);
  }, []);

  return (
    <div className="p-4">
      <FaArrowLeft onClick={backHandler} />
      <h1 className="font-bold text-xl mt-4 ">Add Task</h1>
      <form action="" className="flex h-full justify-between flex-col">
        <div className="input">
          <div className="">
            <label className="block font-bold text-l mt-4">Label</label>
            <input
              type="text"
              placeholder="Create Instagram post"
              className="w-full bg-gray-100 appearance-none border rounded-2xl p-4 mt-4  focus:bg-white focus:border-gray-300 focus:outline-none"
              onChange={handleTitleChange}
            />
          </div>
          <div className="flex gap-4">
            <div className="w-full md:w-1/2">
              <label className="block font-bold text-l my-4">Start</label>
              <div className="relative">
                <input
                  type="time"
                  className="w-full bg-gray-100 appearance-none border rounded-2xl p-4  focus:bg-white focus:border-gray-300 focus:outline-none"
                  onChange={handleStartTimeChange}
                >
                  {/* <option>1Am</option>
                  <option>2Am</option>
                  <option>3Am</option>
                  <option>4Am</option>
                  <option>5Am</option> */}
                </input>
                {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-4 w-4">
                    <FaChevronDown />
                  </svg>
                </div> */}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <label className="block font-bold text-l my-4 ">End</label>
              <div className="relative">
                <input
                  type="time"
                  placeholder="Create Instagram post"
                  className="w-full bg-gray-100 appearance-none border rounded-2xl p-4  focus:bg-white focus:border-gray-300 focus:outline-none"
                  onChange={handleEndTimeChange}
                >
                  {/* <option>1Pm</option>
                  <option>2Pm</option>
                  <option>3Pm</option>
                  <option>4Pm</option>
                  <option>5Pm</option> */}
                </input>
                {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-4 w-4">
                    <FaChevronDown />
                  </svg>
                </div> */}
              </div>
            </div>
          </div>

          <div className="w-full ">
            <label className="block font-bold text-l my-4">Repeat</label>
            <div className="relative">
              <select
                type="text"
                placeholder="Create Instagram post"
                className="w-full bg-gray-100 appearance-none border rounded-2xl p-4 focus:bg-white focus:border-gray-300 focus:outline-none"
                onChange={handleRepeatChange}
              >
                <option>EVERYDAY</option>
                <option>EVERY_WEEK</option>
                <option>EVERY_MONTH</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-4 w-4">
                  <FaChevronDown />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full ">
            <label className="block font-bold text-l my-4">Category</label>
            <div className="relative">
              <select
                type="text"
                placeholder="Create Instagram post"
                className="w-full bg-gray-100 appearance-none border rounded-2xl p-4 focus:bg-white focus:border-gray-300 focus:outline-none"
                onChange={handleCategoryChange}
              >
                {categoryData.map((item,index) => {
                  return(
                    <option key={index} value={item.id}> {item.name}</option>
                    )
                })}
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-4 w-4">
                  <FaChevronDown />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="button mt-6">
          <Button btnText="Create Task" linkClick={taskSubmitHandler} />
        </div>
      </form>
    </div>
  );
};

export default Task;
