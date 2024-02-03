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
    </section>
  );
};

export default Products;
