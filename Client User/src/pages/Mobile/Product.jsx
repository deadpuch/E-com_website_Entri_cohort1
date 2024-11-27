import React from "react";

export const Product = () => {
  return (
    <main>
      <section>
        {/* top */}

        <div className="flex">
          <input type="text" placeholder="search" className="border-2" />
          <div>filter</div>
        </div>
      </section>

      {/* products List */}

      <section>

        <div>
            wishlist
        </div>
        
        <div className="mt-5 flex-wrap flex">
          <div className="h-[200px] w-[150px] bg-slate-500"></div>
        </div>

        <h1>Name of the Products</h1>

        <div>
            <button>Add to cart </button>
        </div>
      </section>
    </main>
  );
};
