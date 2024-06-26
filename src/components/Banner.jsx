import React from "react";

const Banner = () => {
  return (
    <section className="bg-black">
      <div className="bg-black p-2 text-slate-200 md:font-semibold flex items-center justify-end container text-xs md:text-lg">        
        <div className="flex gap-3 px-3">
          <a target="blank" href="tel:+54 9 11-5308-8311" className="hover:text-sky-200">11-5308-8311</a>
          <a target="blank" href="mailto:obras@zingueriadontorcuato.com" className="hover:text-sky-200">obras@zingueriadontorcuato.com</a>
        </div>
      </div>
    </section>
  );
};

export default Banner;