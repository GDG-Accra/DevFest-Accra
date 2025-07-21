import Location from "../../assets/images/EventDetails/Location.png";
import Calendar from "../../assets/images/EventDetails/Calendar.png";

const EventDetails = () => {
  return (
    <div className="bg-white rounded-tl-[60px] shadow-xl p-6 max-w-3xl ml-auto mt-[30px]">
      <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-around space-y-6 md:space-y-0 md:space-x-8">
        {/* Location */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-50">
            <img src={Location} alt="location" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Where</p>
            <p className="text-lg font-medium">ISSER Conference Hall - University of Ghana, Legon</p>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-50">
            <img src={Calendar} alt="location" />
          </div>
          <div>
            <p className="text-sm text-gray-500">When</p>
            <p className="text-lg font-medium">Saturday, 4th October 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
