const ComplexImages = () => {
  return (
    <section className="grid grid-cols-12 mt-14 pt-24 gap-5 items-center relative">
      <div className="absolute top-[5%] left-[50%] translate-x-[-50%] text-center">
        <h5 className="font-medium text-lg text-black/90">
          Share your setup with
        </h5>
        <h2 className="font-extrabold text-4xl text-black/85 mt-2">
          #FurniroFurniture
        </h2>
      </div>

      {/* first col */}
      <div className="col-span-5 flex flex-col gap-5">
        {/* top part */}
        <div className="grid grid-cols-4 gap-5 items-baseline">
          <div className="col-span-1">
            <img
              src="https://img.freepik.com/free-photo/picture-frame-with-abstract-art-by-pink-velvet-armchair_53876-128125.jpg?size=626&ext=jpg&ga=GA1.1.336852061.1702737158&semt=sph"
              alt="sofa"
              className="h-[382px] w-full object-cover hover:scale-105 transition-all duration-150"
            />
          </div>
          <div className="col-span-3">
            <img
              src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg?size=626&ext=jpg&ga=GA1.1.336852061.1702737158&semt=sph"
              alt="sofa"
              className="h-[312px] w-full object-cover hover:scale-105 transition-all duration-150"
            />
          </div>
        </div>
        {/* bottom part */}
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-1">
            <img
              src="https://img.freepik.com/free-photo/green-vintage-sofa_1203-3142.jpg?size=626&ext=jpg&ga=GA1.1.336852061.1702737158&semt=sph"
              alt="sofa"
              className="h-[382px] w-full object-cover hover:scale-105 transition-all duration-150"
            />
          </div>
          <div className="col-span-3">
            <img
              src="https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?size=626&ext=jpg&ga=GA1.1.336852061.1702737158&semt=sph"
              alt="sofa"
              className="h-[312px] w-full object-cover hover:scale-105 transition-all duration-150"
            />
          </div>
        </div>
      </div>

      {/* mid col */}
      <div className="col-span-2">
        <img
          src="https://img.freepik.com/free-photo/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg_1258-152155.jpg?size=626&ext=jpg&ga=GA1.1.336852061.1702737158&semt=sph"
          alt="sofa"
          className="h-[392px] w-full object-cover hover:scale-105 transition-all duration-150"
        />
      </div>

      {/* last col */}
      <div className="col-span-5 flex flex-col gap-5">
        {/* top part */}
        <div className="grid grid-cols-4 gap-5 items-baseline">
          <div className="col-span-2">
            <img
              src="https://img.freepik.com/free-photo/yellow-armchair-living-room-with-copy-space_43614-940.jpg?size=626&ext=jpg&ga=GA1.1.336852061.1702737158&semt=sph"
              alt="sofa"
              className="h-[348px] w-full object-cover hover:scale-105 transition-all duration-150"
            />
          </div>
          <div className="col-span-2">
            <img
              src="https://img.freepik.com/free-photo/interior-design-with-armchair-potted-plant_23-2149427983.jpg?size=626&ext=jpg&ga=GA1.1.336852061.1702737158&semt=sph"
              alt="sofa"
              className="h-[433px] w-full object-cover hover:scale-105 transition-all duration-150"
            />
          </div>
        </div>
        {/* bottom part */}
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-1">
            <img
              src="https://img.freepik.com/free-photo/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg_1258-152152.jpg?size=626&ext=jpg&ga=GA1.1.336852061.1702737158&semt=sph"
              alt="sofa"
              className="h-[282px] w-full object-cover hover:scale-105 transition-all duration-150"
            />
          </div>
          <div className="col-span-3">
            <img
              src="https://img.freepik.com/free-photo/comfortable-modern-sofa-luxury-armchair-illuminated-electric-lamp-generated-by-ai_188544-21504.jpg?size=626&ext=jpg&ga=GA1.1.336852061.1702737158&semt=sph"
              alt="sofa"
              className="h-[196px] w-full object-cover hover:scale-105 transition-all duration-150"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplexImages;
