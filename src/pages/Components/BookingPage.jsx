import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsArrowLeft } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

const BookingPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [level, setLevel] = useState(0);

  const isDateDisabled = (date) => {
    const minSelectableDate = new Date();
    minSelectableDate.setDate(minSelectableDate.getDate() + 7);
    return date < minSelectableDate;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-white px-4 py-12 bookingPage">
      <h2 className="text-3xl md:text-5xl font-bold text-[#FAD007]">
        Book a Free 25-Min Appointment
      </h2>
      <p className="mt-4 text-lg md:w-3/4 mx-auto">
        Ready to get started? Contact us today to schedule a consultation. We’re
        here to discuss your needs and help your business grow!
      </p>

      <div className="mt-8 w-full max-w-md bg-white text-black p-6 rounded-lg shadow-lg">
        <AnimatePresence mode="wait">
          {level === 0 ? (
            <motion.div
              key="date-selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-2">Select a Date:</h3>
              <div className="p-2 rounded-lg relative">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  minDate={new Date()}
                  filterDate={isDateDisabled}
                  showTimeSelect
                  timeIntervals={30}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  inline
                />
              </div>
              <button
                onClick={() => setLevel(1)}
                className="mt-4 w-full bg-[#FAD007] text-black font-semibold py-2 rounded-lg cursor-pointer transition-all"
              >
                Next
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="form-step"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button
                className="flex items-center text-gray-600 mb-4"
                onClick={() => setLevel(0)}
              >
                <BsArrowLeft className="mr-2 cursor-pointer" /> Back
              </button>
              <h3 className="text-lg font-semibold mb-2">
                Enter Your Details:
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name *"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
                <textarea
                  placeholder="Additional Information"
                  rows="3"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#FAD007] text-black font-semibold py-2 rounded-lg cursor-pointer transition-all"
                >
                  Schedule Event
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BookingPage;
