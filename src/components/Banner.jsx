import React from "react";

const Banner = () => {
  return (
    <section className="bg-black">
      <div className="bg-black p-2 text-slate-200 font-semibold flex items-center justify-end container">        
        <div className="flex gap-5">
          <a href="tel:+54 9 11-5308-8311" className="hover:text-sky-200">11-5308-8311</a>
          <a href="mailto:info@zingueriaadaro.com.ar" className="hover:text-sky-200">info@zingueriaadaro.com.ar</a>
        </div>
      </div>
    </section>
  );
};

export default Banner;