import React, { useEffect, useState } from "react";
import { Top } from "../../components/mobileview/Top";
import { NavLink } from "react-router-dom";
import { Adcarosal } from "../../components/mobileview/Adcarosal";
import { LatestProductCard } from "../../components/mobileview/LatestProductCard";
import { axiosInstance } from "../../config/axiosInstance";

export const Home = () => {
  const [Item, setItem] = useState([]);

  const fetchLatestitem = async () => {
    try {
      const response = await axiosInstance({
        url: "/products/latestproducts",
      });
      setItem(response?.data?.data);
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    fetchLatestitem();
  }, []);

  console.log(Item,"item===");
  

  return (
    <main className="md:hidden">
      <Top />

      {/* search */}
      <section className="mt-20 mx-4 flex justify-between">
        <div>
          <input
            type="text"
            className="border-2 rounded-lg p-1 w-[75vw]"
            placeholder="search"
          />
        </div>

        <div className="bg-black p-1 w-9  flex items-center justify-center rounded-lg">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5ZM3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.8487 18.3729 14.551 17.3199 15.9056L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L15.9056 17.3199C14.551 18.3729 12.8487 19 11 19C6.58172 19 3 15.4183 3 11Z"
              fill="#F9F9F9"
            />
          </svg>
        </div>
      </section>

      {/* advirtisment */}

      <Adcarosal />

      {/* cateogry */}
      <section className="mt-5 ps-4 overflow-x-scroll scrollbar-hide">
        <ul className="flex gap-2">
          <NavLink
            to="#"
            style={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            {" "}
            <li className="text-sm ">Fruits</li>
          </NavLink>
          <li className="border-2 px-3 rounded-full flex items-center justify-center text-sm ">
            Vegitable
          </li>
          <li className="border-2 px-3 rounded-full flex items-center justify-center text-sm ">
            jwellery
          </li>
          <li className="border-2 px-3 rounded-full flex items-center justify-center text-sm ">
            Vegitable
          </li>
          <li className="border-2 px-3 rounded-full flex items-center justify-center text-sm ">
            jwellery
          </li>
          <li className="border-2 px-3 rounded-full flex items-center justify-center text-sm ">
            Vegitable
          </li>
          <li className="border-2 px-3 rounded-full flex items-center justify-center text-sm ">
            jwellery
          </li>
        </ul>
      </section>

      {/* latest products */}
      <h2 className="my-5 text-[0.9rem] mx-4">Latest</h2>

      <div className="scrollbar-hide flex overflow-scroll">
        {Item?.map((value) => (<LatestProductCard key={value._id} item={value} />)
          
        )}
      </div>

      {/* Top deals*/}
      
      <section>
        <div className="mt-5 mx-5 mb-16">
          <div className="w-full h-[200px] bg-slate-500 rounded-lg"></div>
        </div>
      </section>
    </main>
  );
};
