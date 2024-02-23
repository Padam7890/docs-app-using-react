import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/slice/Todo";
import Cardnew from "./Cardnew";
import Button from "./Button";
import Filter from "./Filter";
import Search from "./Search";

const Foreground = () => {
  const [isSearch, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const productsFromStore = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  const ref = useRef(null);
  let filterproduct;

 

  if (searchTerm && isSearch) {
    filterproduct = productsFromStore.filter((product) =>
      product.data.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } else {
    filterproduct = productsFromStore;
  }

  const addNewCard = () => {
    if (
      productsFromStore.length === 0 ||
      productsFromStore[productsFromStore.length - 1].data.desc
    ) {
      dispatch(addTodo([""]));
    } else {
      alert("Save Previous one or to Add Another");
    }

  return (
    <>
      {isSearch && (
        <Search setSearch ={setSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      )}
      <Filter setSearch={setSearch} addNewCard={addNewCard} />

      <div
        ref={ref}
        className="absolute z-[3] top-0 left-0  w-full h-full flex gap-5 flex-wrap p-10"
      >
        {filterproduct.map((item) => (
          <Cardnew key={item.id} item={item} id={item.id} reference={ref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
