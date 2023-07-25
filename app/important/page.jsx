import Image from "next/image";
import React from "react";
import { BsStar } from "react-icons/bs";
import backImage from "../../public/backgound.jpg";

const ImportantPage = () => {
  return (
    <div className="">
      <Image
        src={backImage}
        alt="/"
        fill={true}
        className="object-cover z-[1] brightness-50"
      />
      <div className="flex gap-3 h-screen font-bold text-3xl p-10 tracking-wider z-10 absolute">
        <BsStar />
        Important
      </div>
    </div>
  );
};

export default ImportantPage;
