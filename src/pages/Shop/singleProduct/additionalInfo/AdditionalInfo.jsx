import TabSystem from "../../../../components/TabSystem/TabSystem";

const AdditionalInfo = ({ product }) => {
  const { images, description } = product;
  return (
    <div>
      <TabSystem description={description} />
      <img src={images[0]} alt="" />
    </div>
  );
};

export default AdditionalInfo;
