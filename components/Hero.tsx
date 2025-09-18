import { Button } from "./ui/button";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center bg-[#F2F0FF] px-4 sm:px-10 md:px-40">
      <div className="space-y-7 px-4 md:px-10">
        <div>
          <Image
            src={"/images/lamp.png"}
            alt="lamp"
            width={225}
            height={225}
            className="absolute top-0 left-0 hidden md:block"
          />
        </div>
        <p className="text-[#FB2E86]">Best Furniture For Your Castle....</p>
        <h1 className="text-4xl text-[#151875] font-bold">
          New Furniture Collection Trends in 2020
        </h1>
        <p className="text-[#8A8FB9]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <Button variant={"destructive"}>Shop Now</Button>
      </div>
      <div>
        <Image src={"/images/chair.png"} alt="chair" width={600} height={600} />
      </div>
      {/* Dots Section */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 pt-4">
        <span className="w-3 h-3 bg-[#FB2E86] rounded-full"></span>
        <span className="w-3 h-3 bg-[#FB2E86] rounded-full"></span>
        <span className="w-3 h-3 bg-[#FB2E86] rounded-full"></span>
      </div>
    </div>
  );
};
export default Hero;