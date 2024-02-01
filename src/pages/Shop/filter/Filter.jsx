import { GrSort } from "react-icons/gr";
import { PiDotsNineBold } from "react-icons/pi";
import { BsViewList } from "react-icons/bs";
import { useState } from "react";

const Filter = () => {
  const [value, setValue] = useState("Bedroom");

  const handleSelectedValue = (e) => {
    setValue(e.target.value);
  };

  console.log(value);

  return (
    <section className="flex items-center justify-between h-24 px-10 bg-orange-100">
      {/* left part */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <button>
            <GrSort />
          </button>
          <p>Filter</p>
        </div>
        <button className="text-2xl">
          <PiDotsNineBold />
        </button>
        <button className="text-xl">
          <BsViewList />
        </button>

        <div className="h-7 text-black border-2 w-[4px] bg-black" />

        <p>Showing 1-16 of 32 results</p>
      </div>

      {/* right part */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <label for="show">Show</label>
          <input
            type="number"
            id="show"
            defaultValue={16}
            min={8}
            max={24}
            className="h-10 text-center w-14 focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="sort">
            Sort by
            <select
              id="sort"
              onChange={handleSelectedValue}
              defaultValue={value}
              className="w-40 h-10 text-center focus:outline-none">
              <option value="Bedroom">Bedroom</option>
              <option value="Living Room">Living Room</option>
              <option value="Dining">Dining</option>
              <option value="Office">Office</option>
              <option value="Home Decor">Home Decor</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Kids">Kids</option>
            </select>
          </label>
        </div>
      </div>
    </section>
  );
};

export default Filter;
