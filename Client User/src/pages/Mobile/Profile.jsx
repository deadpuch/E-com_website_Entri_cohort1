import React from "react";

export const Profile = () => {
  return (
    <main>
      <section className="flex justify-center ">
        {/* profile pic  */}
        <div className="h-[80px] w-[80px] rounded-full bg-black"></div>
      </section>

      {/* menu */}
      <section>
        <div>Edit Profile </div>
        <div>Orders</div>
        <div>Track Order</div>
        <div>Customer Support </div>
      </section>
    </main>
  );
};
