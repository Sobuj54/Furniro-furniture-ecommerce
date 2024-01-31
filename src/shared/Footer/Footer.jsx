import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section>
      <div className="w-full h-[1px] border-slate-300 border-[1px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 px-10 md:grid-cols-2 lg:grid-cols-12 md:gap-20 lg:px-0 lg:gap-7 mt-14">
          {/* logo span */}
          <div className="order-1 lg:col-span-4">
            <Link to="/" className="flex gap-1">
              <img className="w-9" src="/favicon.svg" alt="icon" />
              <h3 className="text-2xl font-bold font-montserrat">Furniro</h3>
            </Link>
            <p className="mt-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda, quibusdam!
            </p>
          </div>
          {/* links span */}
          <div className="flex flex-col order-3 gap-5 font-medium lg:col-span-2 lg:order-2 md:gap-10">
            <h6 className="text-base text-black/60">Links</h6>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* help span */}
          <div className="flex flex-col order-4 gap-5 font-medium lg:col-span-2 lg:order-3 md:gap-10">
            <h6 className="text-base text-black/60">Help</h6>
            <Link to="/">Payment Options</Link>
            <Link to="/shop">Returns</Link>
            <Link to="/about">Privacy Policy</Link>
          </div>

          {/* newsletter span */}
          <div className="flex flex-col order-2 gap-5 font-medium lg:col-span-4 lg:order-4 md:gap-10">
            <h6 className="text-base text-black/60">Newsletter</h6>
            <form>
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="border-b-[4px] border-slate-500 mr-4 focus:outline-none focus:border-teal-600 hover:scale-105 transition-all duration-150"
              />
              <button className="underline underline-offset-8 decoration-[3px] decoration-slate-500 hover:scale-105">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="w-full h-[1px] border-slate-300 border-[1px] mt-10" />
        <p className="px-10 my-10 font-medium lg:px-0">
          2024 furniro. All rights reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
