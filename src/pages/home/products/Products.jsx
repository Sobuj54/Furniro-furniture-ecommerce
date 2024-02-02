import Product from "./Product";

const Products = ({ products, title }) => {
  return (
    <section className="mx-auto max-w-7xl mt-28">
      {title && (
        <h1 className="text-3xl font-bold text-center md:text-5xl text-slate-900 drop-shadow-xl">
          {title}
        </h1>
      )}
      <div className="grid grid-cols-1 px-5 lg:px-0 gap-10 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      {products.length > 8 && (
        <div className="mt-10 text-center">
          <button className="px-10 py-3 font-bold text-orange-500 transition-all duration-150 border-2 border-orange-400 hover:bg-orange-500 hover:text-white">
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default Products;
