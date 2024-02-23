import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll, orderDESC } from "../Redux/slice/Todo";
import { motion } from "framer-motion";
import { IoFilter } from "react-icons/io5";
import Search from "./Search";

const Filter = ({ addNewCard, setSearch }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const handleSort = () => {
    dispatch(orderDESC());
    setSearch(false);
  };
  const deleteAlllist = () => {
    dispatch(deleteAll());
  };

  function opensearchbox() {
    setSearch(true);
  }

  return (
    <div>
      <Button
        icon={"+"}
        position="fixed bottom-0 right-0"
        color="bg-blue-500"
        action={addNewCard}
      />
      <Button
        icon={<IoFilter size={30} />}
        position="fixed bottom-0 left-0"
        color="bg-green-400"
        action={toggleList}
      />
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className=" fixed flex flex-col gap-2 text-white  bottom-[120px] z-[9] left-4 list-none p-4 mt-2 rounded"
        >
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={opensearchbox}
            className="p-5 h-8 flex items-center justify-center rounded-md bg-green-500"
          >
            Search
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={handleSort}
            className="p-5 h-8 flex items-center justify-center rounded-md bg-green-500"
          >
            Order Priority
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={deleteAlllist}
            className="p-5 h-8 flex items-center justify-center rounded-md bg-green-500"
          >
            Delete All
          </motion.button>
        </motion.ul>
      )}
    </div>
  );
};

export default Filter;
