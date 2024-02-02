import { useState } from "react";
import { CiShare2 } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { _id, images, product_name, intro, price, discount } = product;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative">
      <img
        src={images[0]}
        alt={product_name}
        className="object-cover w-full h-72"
      />
      <div className="p-4 bg-slate-200">
        <h5 className="py-2 text-lg font-bold">{product_name}</h5>
        <p className="text-sm">{intro}</p>
        <div className="flex items-center gap-10 pt-2">
          <h6 className="text-base font-semibold ">$ {price}</h6>
          <p className="line-through">$ {discount}</p>
        </div>
      </div>
      {isHovered && (
        <div className="absolute top-0 bottom-0 left-0 right-0 z-50 transition-all ease-in-out hover:bg-slate-500/70">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <Link to={`/product/${_id}`}>
              <button className="py-2 font-bold text-orange-400 bg-white px-7">
                Add to Cart
              </button>
            </Link>
            <div className="flex w-full mt-4 font-semibold text-white justify-evenly">
              <div className="flex items-center gap-1 cursor-pointer">
                <CiShare2 />
                <p>Share</p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <MdOutlineCompareArrows />
                <p>Compare</p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <IoIosHeartEmpty />
                <p>Like</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
