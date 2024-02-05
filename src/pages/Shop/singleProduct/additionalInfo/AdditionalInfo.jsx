import TabSystem from "../../../../components/TabSystem/TabSystem";

const AdditionalInfo = ({ product }) => {
  const { images, description } = product;
  return (
    <div className="mb-20  max-w-7xl mx-auto">
      <TabSystem description={description} />
      <div className="flex flex-col px-5 md:px-10 lg:px-0 lg:flex-row gap-10 mt-10">
        <img
          src={images[0]}
          alt=""
          className="h-[348px] w-full rounded-md hover:scale-105 transition-all duration-150"
        />
        <img
          src={images[1]}
          alt=""
          className="h-[348px] w-full rounded-md hover:scale-105 transition-all duration-150"
        />
      </div>
    </div>
  );
};

export default AdditionalInfo;
