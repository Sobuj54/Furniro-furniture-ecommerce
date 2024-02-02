import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const {
    product_name,
    product_type,
    images,
    price,
    intro,
    description,
    rating,
    offer,
  } = product;

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto my-14">
      {/* image part */}
      <div className="col-span-5 flex gap-7">
        <div className="flex flex-col gap-7">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={product_name}
              className="h-20 w-full object-cover rounded-md"
            />
          ))}
        </div>
        <div>
          <img
            src={images[0]}
            alt={product_name}
            className="h-[500px] w-full object-cover rounded-md"
          />
        </div>
      </div>

      {/* title and description part */}
      <div className="col-span-7 pl-16">
        <h2 className="text-4xl font-medium">{product_name}</h2>
        <h3 className="text-2xl mt-2 text-black/70">$ {price}</h3>
        <Rating
          style={{ maxWidth: 150 }}
          value={rating}
          readOnly
          className="my-4"
        />
        <p className="max-w-xl mt-2">{description}</p>

        {/* furniture size buttons */}
        <div className="mt-5">
          <p className="text-lg text-black/70 font-medium">Size</p>
          <div className="flex gap-4 mt-3">
            <button className="p-2 px-4 rounded-md font-medium bg-orange-100 hover:text-white hover:bg-[#B88E2F]">
              M
            </button>
            <button className="p-2 px-4 rounded-md font-medium bg-orange-100 hover:text-white hover:bg-[#B88E2F]">
              L
            </button>
            <button className="p-2 px-4 rounded-md font-medium bg-orange-100 hover:text-white hover:bg-[#B88E2F]">
              XL
            </button>
          </div>
        </div>

        {/* furniture color buttons */}
        <div className="mt-5">
          <p className="text-lg text-black/70 font-medium">Color</p>
          <div className="flex gap-5 mt-3">
            <button className="w-7 h-7 rounded-full bg-blue-500"></button>
            <button className="w-7 h-7 rounded-full bg-black"></button>
            <button className="bg-[#B88E2F] w-7 h-7 rounded-full"></button>
          </div>
        </div>

        {/* add to cart button */}
        <div className="mt-10 flex gap-7">
          <div className="h-14 w-32 border-2 rounded-md border-black p-3 flex justify-between items-center text-xl">
            <button onClick={decreaseQuantity}>-</button>
            <p>{quantity}</p>

            <button onClick={increaseQuantity}>+</button>
          </div>

          <button className="h-14 px-10 border-2 rounded-md border-black p-3 text-xl font-medium">
            Add to Cart
          </button>
          <button className="h-14 px-10 border-2 rounded-md border-black p-3 text-xl font-medium">
            + Compare
          </button>
        </div>

        <div className="w-full h-[1px] bg-black/30 my-10" />
        <div className="text-black/60 text-lg font-medium grid grid-cols-6">
          <div className="col-span-2 flex flex-col gap-4">
            <p>SKU</p>
            <p>Category</p>
            <p>Tags</p>
            <p>Share</p>
          </div>
          <div className="col-span-4 flex flex-col gap-4">
            <p>
              : <span className="ml-3">SS01</span>
            </p>
            <p>
              : <span className="ml-3">{product_type}</span>
            </p>
            <p>
              : <span className="ml-3">Sofa,Chair,Home,Shop</span>
            </p>
            <p className="flex gap-4 text-black items-center">
              :
              <FaFacebook />
              <SlSocialInstagram />
              <FaXTwitter />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
