import React from "react";
import { AiFillStar } from "react-icons/ai";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

const Listingcard = () => {
  return (
    <div className="cursor-pointer h-full w-full">
      <SkeletonLoader />
      <img
        src="https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=1200"
        alt=""
        className={"w-full h-full object-cover rounded-xl"}
      />
      <div className={"mt-2 flex justify-between "}>
        <div>
          <p className={"location font-bold text-base"}>London, UK</p>
          <p className={"location text-[15px]"}>2839 Kilometers Away</p>
          <p className={"price text-[15px] mt-1"}>
            <span className="font-bold">$290 </span>
            night
          </p>
          <SkeletonLoader count={1} height={"10px"} width={"55%"} />
          <SkeletonLoader count={1} height={"10px"} width={"80%"} />
          <SkeletonLoader count={1} height={"10px"} width={"46%"} />
        </div>
        <div className={"flex justify-center h-fit items-center gap-1"}>
          <p>4.53</p>
          <AiFillStar />
        </div>
      </div>
    </div>
  );
};

export default Listingcard;
