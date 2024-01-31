import { GrTrophy } from "react-icons/gr";
import { MdOutlineBrightnessAuto } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";

const Badge = () => {
  return (
    <section className="px-10 py-20 mt-10 bg-orange-100">
      <div className="grid justify-between grid-cols-1 gap-10 lg:gap-0 md:grid-cols-2 lg:flex">
        <div className="flex items-center gap-3">
          <GrTrophy className="text-5xl" />
          <div>
            <h4 className="text-xl font-semibold md:text-3xl">High Quality</h4>
            <p className="mt-1 font-medium text-black/80">
              Crafted from top materials
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <MdOutlineBrightnessAuto className="text-5xl" />
          <div>
            <h4 className="text-xl font-semibold md:text-3xl">
              Warranty Protection
            </h4>
            <p className="mt-1 font-medium text-black/80">Over 2 years</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <LiaShippingFastSolid className="text-5xl" />
          <div>
            <h4 className="text-xl font-semibold md:text-3xl">Free Shipping</h4>
            <p className="mt-1 font-medium text-black/80">Order over 150$ </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <MdOutlineSupportAgent className="text-5xl" />
          <div>
            <h4 className="text-xl font-semibold md:text-3xl">
              24 / 7 Support
            </h4>
            <p className="mt-1 font-medium text-black/80">Dedicated support </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Badge;
