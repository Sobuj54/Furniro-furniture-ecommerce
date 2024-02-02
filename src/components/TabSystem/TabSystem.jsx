import { useState } from "react";

const TabSystem = ({ description }) => {
  const [currentTab, setCurrentTab] = useState("description");

  return (
    <div className="">
      {/* tab buttons */}
      <div className="flex gap-10 justify-center">
        <button
          className={
            currentTab == "description"
              ? "text-2xl font-medium"
              : "text-2xl font-medium text-black/50"
          }
          onClick={() => setCurrentTab("description")}>
          Description
        </button>
        <button
          className={
            currentTab == "information"
              ? "text-2xl font-medium"
              : "text-2xl font-medium text-black/50"
          }
          onClick={() => setCurrentTab("information")}>
          Additional Information
        </button>
        <button
          className={
            currentTab == "reviews"
              ? "text-2xl font-medium"
              : "text-2xl font-medium text-black/50"
          }
          onClick={() => setCurrentTab("reviews")}>
          Reviews
        </button>
      </div>

      <div className="max-w-5xl mx-auto mt-10 text-black/80">
        {currentTab == "description" ? (
          <p>
            {description} <br /> <br /> Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Odio sint beatae ducimus dolor neque dolore enim
            quaerat blanditiis at itaque. Blanditiis dolorem alias consequatur
            tempora iure molestiae! Blanditiis, accusantium sit aspernatur
            perspiciatis maxime dolore ducimus saepe. Tenetur sint, accusantium
            voluptas explicabo perferendis ut eos alias necessitatibus
            repudiandae odit pariatur sunt!
          </p>
        ) : currentTab == "information" ? (
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem odit
            libero ipsam quae sit consequatur doloribus, voluptatem iusto
            delectus, assumenda reiciendis voluptatibus est? Voluptas, cum
            suscipit nemo assumenda, odit nihil et incidunt tenetur repellat
            harum aperiam eius quidem blanditiis eligendi. <br /> <br /> Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quos dolorum ut
            commodi dignissimos, est quis necessitatibus tempora inventore, sed
            in eos delectus error repellat incidunt quaerat odit dolorem iure
            nam!
          </p>
        ) : currentTab == "reviews" ? (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, ea
            laborum? Debitis veniam eum, autem error corporis iusto ex et
            reiciendis accusamus voluptatibus tempore veritatis atque fugit
            doloremque voluptatem voluptate eos maiores rem? Quasi blanditiis ut
            iste quis aut expedita officia facere at perspiciatis sequi ducimus,
            soluta alias odio aperiam. <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            nihil quia repellat nisi error unde ad, sit iusto sequi voluptatibus
            quibusdam illum accusantium aut, cum earum saepe explicabo harum
            dolor debitis voluptatem quidem laudantium odio in tenetur. Sit, rem
            blanditiis!
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TabSystem;
