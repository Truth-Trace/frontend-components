import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ['latin'] });

const Hero = () => {
  return (
    <>
      <div
        className="flex flex-col lg:flex-row justify-center lg:px-12 lg:py-24 flex-wrap lg:flex-nowrap items-center"
        id="home"
      >
        <div className="lg:w-1/2  flex flex-col justify-center text-center lg:text-left lg:items-start">
          <h1 className="font-medium pt-16 leading-tight text-xl p-2 text-black lg:text-6xl">
          Truth Trace: Looking Beyond Labels
          </h1>
          <div className={raleway.className}>
            <p className="font-small leading-tight text-24 mt-0 mb-2 text-black p-2 lg:text-left lg:text-2xl">
            Truth Trace empowers consumers with a blockchain-driven platform, ensuring unmatched transparency and ethical sourcing. Through an interactive map, users visually trace product origins, facilitating informed choices. <br></br>
            Our B2B model enhances business transparency, while B2G collaborations empower regulatory oversight. Truth Trace guides you in a marketplace defined by transparency, sustainability, and informed consumer choices.
            </p>
          </div>
        </div>
        <Image
          src="/Hero.png"
          alt="Home Image"
          className="lg:w-1/2 mb-10 md:w-1/3 lg:mt-20 w-full px-2"
          width={1000}
          height={800}
        />
      </div>
    </>
  );
};

export default Hero;
