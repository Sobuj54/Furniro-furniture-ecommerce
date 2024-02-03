import TabSystem from "../../../../components/TabSystem/TabSystem";

const AdditionalInfo = ({ product }) => {
  const { images, description } = product;
  return (
    <div className="mb-20  max-w-7xl mx-auto">
      <TabSystem description={description} />
      <div className="flex gap-10 mt-10">
        <img src={images[0]} alt="" className="h-[348px] w-full rounded-md" />
        <img src={images[1]} alt="" className="h-[348px] w-full rounded-md" />
      </div>
    </div>
  );
};

export default AdditionalInfo;
