import { nextDay } from "date-fns";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegClock } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import { BsArrow90DegLeft } from "react-icons/bs";

import Banner2 from "../../assets/Images/banner2.png";
function BookingPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [calendarOpen, setCalendarOpen] = useState(true);
  const [level, setLevel] = useState(0);
  const isDateDisabled = (date) => {
    const next7Days = new Date();
    next7Days.setDate(next7Days.getDate() + 14);
    return date < next7Days;
  };

  return (
    <div className="flex flex-col bookingPage text-center tracking-wider h-[100vh] pt-12">
      <div>
      <h2 className="yolk text-[52px]">
        Book a free 25 mins appointment with us
      </h2>
      <h2 className="mb-8">Let's Start a Conversation</h2>
      <p className="dull w-[40%] mx-auto">
        Ready to get started? Contact us today to schedule a consultation. We’re
        here to discuss your needs and how we can help your business grow!
      </p>
      </div>

      <div className="mt-8 h-[100vh]">
        <div className="flex mx-auto relative items-center">
          {level == 0 ? (
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              filterDate={isDateDisabled}
              open={calendarOpen}
              // showTimeSelect
               className="mx-auto text-center block"
              // popperModifiers={[
              //   {
              //     name: "flip",
              //     enabled: false,
              //   },
              // ]}
            />
          ) : (
            <div className=" mx-auto p-6 bg-white shadow-lg rounded-xl">
              <form className="space-y-4">
                <h2
                  className="text-xl text-start font-semibold mb-5 black "
                  onClick={() => setLevel(level - 1)}
                >
                  <BsArrow90DegLeft />
                </h2>
                <div>
                  <label className="block text-sm text-start font-medium text-gray-700">
                    Name *
                  </label>
                  <input
                    type="text"
                    className="mt-1 black block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block black text-start text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    className=" black mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-start text-sm font-medium text-gray-700">
                    Please share anything that will help prepare for our
                    meeting.
                  </label>
                  <textarea
                    className="mt-1 black block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    rows="3"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 black bg-yellow-500 font-semibold rounded-lg hover:bg-yellow-400"
                >
                  Schedule Event
                </button>
              </form>
            </div>
          )}
          {level == 0 && (
            <div className="w-[90%] flex justify-center items-center relative top-90">
              <button
                onClick={() => setLevel(level + 1)}
                className="bg-yellow-500  text-black font-semibold py-2 px-6 rounded-lg hover:bg-yellow-400 w-30 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default BookingPage;
