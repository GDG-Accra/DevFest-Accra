import { assets } from "@/assets/assets";

const EventDetails = () => {
  return (
    <section className='py-16 px-4 bg-white'>
      <div className='container mx-auto text-center'>
        <h2 className='text-sm uppercase text-gray-600 mb-4'>Event Details</h2>
        <h1 className='text-4xl lg:text-5xl font-bold mb-12'>
          Mark Your Calendar
        </h1>

        <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          {/* Date */}
          <div className='bg-gray-50 p-8 rounded-lg'>
            <img
              src={assets.eventDetails.calendar}
              alt='Calendar'
              className='w-16 h-16 mx-auto mb-4'
            />
            <h3 className='text-xl font-semibold mb-2'>Date</h3>
            <p className='text-gray-600'>March 15, 2025</p>
            <p className='text-gray-600'>9:00 AM - 6:00 PM</p>
          </div>

          {/* Location */}
          <div className='bg-gray-50 p-8 rounded-lg'>
            <img
              src={assets.eventDetails.location}
              alt='Location'
              className='w-16 h-16 mx-auto mb-4'
            />
            <h3 className='text-xl font-semibold mb-2'>Location</h3>
            <p className='text-gray-600'>Accra International Conference Centre</p>
            <p className='text-gray-600'>Accra, Ghana</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
