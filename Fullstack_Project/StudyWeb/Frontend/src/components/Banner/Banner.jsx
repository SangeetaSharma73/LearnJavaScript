import React from "react";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex">
        <div className="w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello,welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis nam quia dignissimos, voluptatum harum odit amet dolor,
              tempore atque, delectus nobis veniam expedita rerum facilis. Saepe
              nihil dolorem tempora sequi. 
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">Right</div>
      </div>
    </>
  );
};

export default Banner;
