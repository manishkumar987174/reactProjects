import { useState } from "react";
import Card from "./Card";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
function Testimonal(props) {
  let reviews = props.data;
  const [index, setIndex] = useState(0);

  function leftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
      console.log(index);
    } else {
      let x = reviews.length;
      setIndex(index - 1);
      console.log(index);
    }
  }

  function rightHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    let random = Math.floor(Math.random() * reviews.length);
    setIndex(random);
  }
  return (
    <>
      <div className="bg-white p-5 w-[40vw]  flex flex-col justify-center items-center hover:shadow-xl mt-2">
        <Card review={reviews[index]} />
        <div className=" text-violet-400 mt-5 px-3">
          <button
            onClick={leftHandler}
            className="mx-2 cursor-pointer hover:text-violet-700"
          >
            <FaLessThan />
          </button>
          <button
            onClick={rightHandler}
            className=" mx-2 hover:text-violet-700 cursor-pointer"
          >
            <FaGreaterThan />
          </button>
        </div>
        <div className="flex justify-center">
          <button
            onClick={surpriseHandler}
            type="button"
            className="bg-violet-400 mt-2 cursor-pointer px-10 py-2 hover:bg-violet-500 hover:text-white font-bold  transition-all duration-200 inline-block text-lg rounded-md"
          >
            Surprise Me
          </button>
        </div>
      </div>
    </>
  );
}

export default Testimonal;
