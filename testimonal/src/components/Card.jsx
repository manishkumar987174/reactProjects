  import React from "react";
  import { FaQuoteLeft } from "react-icons/fa";
  import { FaQuoteRight } from "react-icons/fa";


  export const Card = (props) => {
    let review = props.review;
    return (
      <>
        <div className="flex flex-col relative">
          <div className="absolute left-0 top-[-5rem]">
            <img
              src={review.image}
              className="rounded-full w-[100px] h-[100px]  "
            />
            <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6rem] z-[-4] left-[-4px]"></div>
          </div>
          <div>
            <h2 className="text-2xl font-bold ">{review.name}</h2>
            <p className="text-violet-300 text-sm uppercase">{review.title}</p>
          </div>
          <div className="mx-auto text-violet-400 mt-5">
            <FaQuoteLeft />
          </div>
            <p className=" text-slate-500 mt-4 text-center">{review.description}</p>
            <div className="mx-auto text-violet-400 mt-5">
            <FaQuoteRight />
          </div>
        
        </div>
      </>
    );
  };

  export default Card;
