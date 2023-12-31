import { cn } from "@/lib/utils";
import { Montserrat, EB_Garamond } from "next/font/google";
import { Button } from "../ui/button";
import Image from "next/image";

const montserrat = EB_Garamond({ weight: "800", subsets: ["latin"] });
const subFont = EB_Garamond({ weight: "400", subsets: ["latin"] });
const Hero = () => {
  return (
    <div className=" flex lg:justify-evenly items-center bg-gradient-to-bl from-black  via-blue-950 via-10%  to to-black  text-white/90">
      <div className="flex flex-col gap-8 mx-4 ">
        <h1
          className={cn(
            " text-6xl  max-w-lg lg:max-w-xl",
            montserrat.className
          )}
        >
          Decentralized asset management for the next-gen investor.
        </h1>
        <h3 className={cn(" text-lg max-w-lg", subFont.className)}>
          Piron Finance a decentralized platform that empowers you to invest in
          a diverse range of financial and real-world assets. Through innovative
          investment pools, we bridge the gap between asset originators and
          investors, ensuring transparency, security, and enhanced liquidity
        </h3>

        <div>
          <Button className="bg-blue-600" size="lg">
            Get Started
          </Button>
        </div>
      </div>
      <div className=" hidden lg:flex">
        <Image alt="hero" src="/hero.svg" width={500} height={500} />
      </div>
    </div>
  );
};

export default Hero;
