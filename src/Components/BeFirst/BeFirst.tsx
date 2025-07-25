import { assets } from "../../assets/assets";

const BeFirst = () => {
  return (
    <section className='py-16 px-4 bg-gray-50'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center gap-12'>
          {/* Image */}
          <div className='lg:w-1/2 order-2 lg:order-1'>
            <img
              src={assets.beFirst.beImage}
              alt='Be the First to Experience DevFest Accra 2025'
              className='w-full h-auto'
            />
          </div>

          {/* Text Content */}
          <div className='lg:w-1/2 space-y-6 order-1 lg:order-2'>
            <h2 className='text-sm uppercase text-gray-600 mb-2'>
              Early Bird Registration
            </h2>
            <h1 className='text-4xl lg:text-5xl font-bold leading-tight'>
              Be the{" "}
              <span className='bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent'>
                First
              </span>{" "}
              to Experience the Future
            </h1>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Don't just attend—be part of the revolution. Early bird tickets
              are now available for the most anticipated tech event in Ghana.
            </p>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Limited spots. Unlimited possibilities. Secure your place in
              history.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 pt-6'>
              <button className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'>
                Get Early Bird Tickets
              </button>
              <button className='border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeFirst;
