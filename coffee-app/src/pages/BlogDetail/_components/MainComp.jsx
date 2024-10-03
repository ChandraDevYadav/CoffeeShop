import React from "react";
import { FaEye, FaRegCalendarAlt, FaRegComments } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const MainComp = () => {
  return (
    <div className="mt-2 md:mt-6 mx-4 md:mx-8 lg:mx-16">
      <h1 className="text-2xl md:text-3xl font-semibold font-caudex pr-0 md:pr-16 pb-4 md:pb-8">
        With our vastly improved notifications system, users have more control.
      </h1>
      <div className="border-t-2 border-t-gray-200 flex flex-wrap pt-4">
        <div className="flex items-center border-r-2 border-r-gray-300 pr-4 md:pr-8 my-4 gap-2 md:gap-4">
          <FaEye className="text-lg md:text-xl" />
          <p className="text-sm md:text-md font-caudex font-semibold text-gray-500">
            100 Views
          </p>
        </div>
        <div className="flex items-center border-r-2 border-r-gray-300 pl-4 md:pl-0 pr-4 md:pr-8 my-4 gap-2 md:gap-4">
          <FaRegComments className="text-lg md:text-xl" />
          <p className="text-sm md:text-md font-caudex font-semibold text-gray-500">
            35 Comments
          </p>
        </div>
        <div className="flex items-center my-4 pl-0 md:pl-4 gap-2 md:gap-4">
          <FaRegCalendarAlt className="text-lg md:text-xl" />
          <p className="text-sm md:text-md font-caudex font-semibold text-gray-500">
            24th March 2019
          </p>
        </div>
      </div>
      <p className="my-4 text-gray-600 text-sm md:text-md">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo amet set for your cool happiness for lyour loyal city.
      </p>
      <p className="mb-8 text-gray-600 text-sm md:text-md">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deser unt
        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusant ium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit asperna tur aut odit aut fugit, sed quia consequuntur magni
        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisq.
      </p>
      <div className="text-center bg-[#101010] rounded-xl py-10 px-6 md:py-16 md:px-14">
        <p className="text-lg md:text-xl text-[#ae6957] font-medium py-4">
          By Chandra Dev
        </p>
        <p className="text-2xl md:text-3xl text-center text-white font-semibold px-2 font-caudex pb-4">
          Viral dreamcatcher keytar typewriter, aest hetic offal umami.
          Aesthetic polaroid pug pitchfork post-ironic.
        </p>
      </div>
      <p className="my-4 text-gray-600 text-sm md:text-md pr-0 md:pr-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deser unt
        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium.
      </p>
      <div>
        <img src="./inner_b3.jpg" alt="" className="w-full h-auto md:h-[400px]" />
        <p className="my-12 text-gray-600 pr-0 md:pr-4 text-sm md:text-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deser unt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusan tium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi archi tecto beatae vitae dicta sunt explicabo. Nemo
          enim ipsam voluptatem quia voluptas sit asperna tur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non num quam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Lorem ipsum dolor sit amet,consectetur adipisicing elit,
          sed do eiusmod incididunt.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-2">
          <img src="./inner_b1.jpg" alt="" className="w-full h-auto md:h-[320px] mt-2" />
        </div>
        <div className="md:col-span-3">
          <p className="text-gray-600 pr-0 md:pr-8 text-sm md:text-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et
          </p>
        </div>
      </div>
      <p className="text-gray-600 pr-0 md:pr-8 text-sm md:text-md">
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  );
};

export default MainComp;
