import React from "react";

export const LatestProductCard = (item) => {


  return (
    <section className="mx-4">
      <div>
        <div className=" w-[150px] h-[180px] bg-slate-500 rounded-xl overflow-hidden ">
          <img src={item?.item?.thumbnail} alt="" className=" object-cover w-full h-full" />
        </div>
        <h3 className="font-outFit">{item?.item?.productName}</h3>
        <h3 className="font-outFit font-semibold">{`₹ ${item?.item?.price}`} </h3>
      </div>
    </section>
  );
};
