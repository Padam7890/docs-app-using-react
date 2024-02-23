import React, { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../Redux/slice/Todo";

const Cardnew = ({ reference, item }) => {


  const desc = item.data.desc;
  const high = item.data.high;
  const low = item.data.low;
  const medium = item.data.medium;

  const dispatch = useDispatch();


  const updateonebyone = (low, medium, high) => {
    dispatch(
      updateTodo({
        id: item.id,
        data: {
          desc: desc,
          low: !!low,
          medium : !!medium,
          high: !!high,
        },
      })
    );
  };

  const updateOnInputChange = (desc) => {
    dispatch(
      updateTodo({
        id: item.id,
        data: {
          desc: desc,
          low: !!low,
          medium: !!medium,
          high: !!high,
        },
      })
    );
  };

  const handleGreenClick = () => {
    updateonebyone(true, false, false);
  };

  const handleYellowClick = () => {
    updateonebyone(false, true, false);
  };

  const handleRedClick = () => {
    updateonebyone(false, false, true);
  };

  return (
    <>
   
      <motion.div
        layoutId={item}
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.4 }}
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
        className="text-white flex-shrink-0 relative py-10 px-5 w-60 h-72 bg-zinc-900/90 rounded-[50px] overflow-hidden"
      >
        <div className="priority absolute top-6 flex gap-2 mb-3">
          <button
            onClick={handleGreenClick}
            className={`color-green bg-green-500 h-5 w-5 rounded-full ${
              low ? "active" : ""
            }`}
          ></button>
          <button
            onClick={handleYellowClick}
            className={`color-yellow bg-yellow-500 h-5 w-5 rounded-full ${
              medium ? "active" : ""
            }`}
          ></button>
          <button
            onClick={handleRedClick}
            className={`color-red bg-red-500 h-5 w-5 rounded-full ${
              high ? "active" : ""
            }`}
          ></button>
        </div>
        <FaRegFileAlt className=" absolute top-6 right-7 " />
        <textarea
          onChange={(e) => {
            updateOnInputChange(e.target.value);
          }}
          className="bg-transparent w-full outline-none text-sm leading-tight mt-5 font-semibold block h-[100px] overflow-hidden"
          value={desc}
          name=""
          id=""
        />

        <div className="footer absolute bottom-0  w-full h-[95px]   left-0">
          <div className="flex items-center justify-between px-8 py-3 mb-3">
            <span className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center">
              <MdDelete
                className=" cursor-pointer"
                onClick={() => dispatch(removeTodo(item.id))}
              />
            </span>

            {/* <span className="w-7 h-7 bg-pink-500 rounded-full flex items-center justify-center">
              <FaSave
                className=" cursor-pointer"
                onClick={updateonebyone}
                size={"0.7em"}
                color="#fff"
              />
            </span> */}
          </div>

          {high ? (
            <div className="tag w-full py-2 flex items-center bg-red-500 justify-center">
              <h3 className="text-sm font-semibold">High</h3>
            </div>
          ) : medium ? (
            <div className="tag w-full py-2 flex items-center bg-yellow-500 justify-center">
              <h3 className="text-sm font-semibold">Medium</h3>
            </div>
          ) : (
            <div className="tag w-full py-2 flex items-center bg-green-500 justify-center">
              <h3 className="text-sm font-semibold">Low</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Cardnew;
