import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="mt-20">
      <div className="w-full h-[1px] border-slate-300 border-[1px]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-7 mt-14">
          {/* logo span */}
          <div className="col-span-4">
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
          <div className="col-span-2 flex flex-col gap-10 font-medium">
            <h6 className="text-base text-black/60">Links</h6>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* help span */}
          <div className="col-span-2 flex flex-col gap-10 font-medium">
            <h6 className="text-base text-black/60">Help</h6>
            <Link to="/">Payment Options</Link>
            <Link to="/shop">Returns</Link>
            <Link to="/about">Privacy Policy</Link>
          </div>

          {/* newsletter span */}
          <div className="col-span-4 flex flex-col gap-10 font-medium">
            <h6 className="text-base text-black/60">Newsletter</h6>
            <form>
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="border-b-2 border-slate-500 mr-4 focus:outline-none hover:scale-105 transition-all duration-150"
              />
              <button className="underline underline-offset-8 decoration-2 decoration-slate-500 hover:scale-105">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="w-full h-[1px] border-slate-300 border-[1px] mt-10" />
        <p className="my-10 font-medium">2024 furniro. All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
