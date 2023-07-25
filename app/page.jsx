import Image from "next/image";
import { BiHome } from "react-icons/bi";
import bgimage from "@/public/tasksBG.jpg";
import Add from "./Components/Add";

export default function Home() {
  return (
    <div className="">
      <Image
        src={bgimage}
        alt="/"
        fill={true}
        className="object-cover z-[1] brightness-50  "
      />
      <div className="flex flex-col gap-3 h-screen font-bold text-3xl p-10 tracking-wider z-10 absolute">
        <div className="flex gap-3">
          <BiHome />
          Tasks
        </div>
        {/* <Add /> */}
      </div>
    </div>
  );
}
