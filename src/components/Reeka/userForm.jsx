import React, { useState } from "react";
import api from "../../appRedux/axios";

export const UserForm = () => {
  const [airbnbPrice, setAirbnbPrice] = useState(100);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handlePriceUpdate = async () => {
    const url = "properties/update-rate-single-date";

    const payload = {
      propertyId: "2acf5b5b-e595-4b23-9bd4-a2ce1a9a9476",
      date: startDate,
      newRate: parseFloat(airbnbPrice),
    };

    try {
      await api.post(url, payload).then((res) => console.log(res));
    } catch (error) {}
  };

  const UpdatePricewithDates = async () => {
    const url = "properties/update-rate-multiple-dates";

    const payload = {
      propertyId: "2acf5b5b-e595-4b23-9bd4-a2ce1a9a9476",
      dateFrom: startDate,
      dateTo: endDate,
      newRate: parseFloat(airbnbPrice),
    };

    try {
      await api.post(url, payload).then((res) => console.log(res));
    } catch (error) {}
  };

  return (
    <div className=" bg-orange text-white p-2 md:p-6 w-full h-full max-h-[40rem]">
      Reekha Airbnb Price
      <div className=" bg-white text-black mt-12 h-full p-6">
        <div>
          <div>
            <h3>Edit Price Over a Date Range</h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 items-center">
              <p className="font-bold text-black">
                Item: <span className="text-orange">Airbnb</span>{" "}
              </p>

              <div>
                <label>Price:</label>
                <input
                  type="number"
                  className="border border-orange outline-none ml-1 md:ml-2 rounded-md p-2 bg-[#f8eada]"
                  value={airbnbPrice}
                  onChange={(e) => setAirbnbPrice(e.target.value)}
                />
              </div>

              <div>
                <label>Start Date:</label>
                <input
                  type="date"
                  className="border border-orange outline-none ml-1 md:ml-2 rounded-md p-2 bg-[#f8eada]"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>

              <div>
                <label>End Date:</label>
                <input
                  type="date"
                  className="border border-orange outline-none ml-1 md:ml-2 rounded-md p-2 bg-[#f8eada]"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>

              <div
                onClick={() => {
                  endDate ? UpdatePricewithDates() : handlePriceUpdate();
                }}
                className="mt-8 bg-orange text-white font-semibold text-sm w-fit px-8 py-2 cursor-pointer"
              >
                Save Price
              </div>
            </div>

            <div className="mt-12 text-xs">
              <h4>Current Prices:</h4>
              <ul>
                <li>
                  Price: ${airbnbPrice} | Date Range: {startDate} - {endDate}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//
