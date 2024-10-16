import React from "react";
import { FaTelegram } from "react-icons/fa";
import {
  FaWhatsapp,
  FaFacebook,
  FaTiktok,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

const Card = (props) => {
  return (
    <>
      <section className="flex w-[500px]  flex-col p-3 m-2 shadow-lg gap-4 text-wrap shadow-gray-100 rounded  bg-white items-center">
        <h1 className="font-bold mb-3 text-white text-xl text-center bg-sky-400 p-2 rounded-xl">
          Welcome to my Profile
        </h1>
        <div className="flex gap-[20px]">
          <img
            className=" h-[150px] w-[150px] cursor-pointer blur-xs hover:blur-0 rounded-full object-cover shadow-lg shadow-gray-600 hover:border-[2px] hover:border-white transition-all"
            src={`/public/${props.image}`}
            alt="picture"
          />
          <div className="text-md">
            <p className="font-bold">
              Name: <span>{props.name}</span>{" "}
            </p>

            <p className="font-bold">
              State: <span>{props.state}</span>
            </p>
            <div className="font-bold">
              Institution: <span> {props.institution}</span>
            </div>
            <div className="font-bold">
              Course: <span>{props.course}</span>
            </div>
            <p className="font-bold">
              Gender: <span> {props.gender}</span>
            </p>
            <p className="text-center font-bold mt-9 p-2 rounded bg-green-500 cursor-pointer text-white ">
              {props.level}
            </p>
          </div>
          <div className="flex flex-col gap-[20px] cursor-pointer relative bottom-[50px]">
            <FaWhatsapp className="icon bg-green-500 text-white rounded-full" />
            <FaFacebook className="icon bg-white rounded-full text-blue-600" />
            <FaTiktok className="icon text-red-600" />
            <FaTelegram className="icon" />
            <FaLinkedinIn className="icon" />
            <FaInstagram className="icon text-red-800" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
