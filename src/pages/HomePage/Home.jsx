import React, { useEffect, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { MdOutlineNotifications } from "react-icons/md";
import Button from "../../Button/Button";
import { TbSquarePlus } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { CategoryRequest } from "../CategoriesPage/CategoryRequest";
import TaskRequest from "../TaskPage/TaskRequest";

const Home = () => {
  const navigate = useNavigate();

  const [categoryData, setCategoryData] = useState([]);
  const [taskData, setTaskData] = useState([]);

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

  useEffect(() => {
    TaskRequest()
      .then((response) => {
        console.log("Responsponse data ", response.data);
        if (response.data.httpResponse === 200) {
          console.log("Writer list data", response.data.data);
          setTaskData(response.data.data);
        }
      })
      .catch((error) => {
        if (error.response.data.httpResponse === 502) {
          console.log(error.response.data.message);
          toast.error(error.response.data.message);
        }
      });

    console.log(taskData);
  }, []);

  const categoryHandler = () => {
    navigate("/categories");
  };
  const taskHandler = () => {
    navigate("/task");
  };

  // const linkClickHandler = () => {
  //   navigate("/task")
  // }

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <CgMenuLeft />
        <div className="flex gap-4">
          <CiSearch />
          <MdOutlineNotifications />
        </div>
      </div>
      <h2 className="font-bold my-2 text-2xl">Hey there,Vally</h2>
      <span>Organize your plans for the day</span>
      {/* Categoris code */}
      <div>
        <div className="w-full flex justify-between my-2 items-center">
          <h3 className="font-semibold ">Categories</h3>
          <TbSquarePlus onClick={categoryHandler} />
        </div>

        <div className="categories-body w-full flex  overflow-x-scroll gap-8 p-2 ">
          {categoryData.map((item) => (
            <div className="text-center" key={item.id}>
              <div>
                <img
                  src={item.imageUrl}
                  alt="category item"
                  className="w-full md:w-1/4 bg-gray-100 p-3 rounded-xl size-12"
                />
              </div>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <h3 className="font-semibold">Today's Tasks</h3>

      {
        taskData.map((item, index) => (
          <div className="flex my-2 bg-gray-100 p-2 rounded-xl">
            <input type="checkbox" className="bordered border-blue-500 m-5" />
            <div>
              <h4 className="font-semibold ">{item.label}</h4>
              <p className="text-gray-600">{item.startTime} - {item.endTime}</p>
            </div>
          </div>

        ))
      }

      <Button btnText="+ Add a new task" linkClick={taskHandler} />
    </div>
  );
};

export default Home;
