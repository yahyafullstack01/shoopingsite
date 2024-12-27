
const OpeningHours = () => (
    <section className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 sm:pb-12 pb-8 sm:ml-0 ml-4 md:mb-0 text-center md:text-left">
          Opening Hours
        </h2>
        <div className="flex flex-col space-y-6 sm:space-y-4 md:space-y-2 text-lg text-left sm:text-right sm:pl-0 pl-4 md:pr-32">
          <div className="flex flex-col sm:flex-row justify-between sm:space-x-4">
            <p className="font-semibold text-lg sm:text-xl">Mon - Fri</p>
            <p className="text-gray-400 sm:pl-32">8:00 am – 8:00 pm</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between sm:space-x-4">
            <p className="font-semibold text-lg sm:text-xl">Saturday</p>
            <p className="text-gray-400 sm:pl-4">9:00 am – 7:00 pm</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between sm:space-x-4">
            <p className="font-semibold text-lg sm:text-xl">Sunday</p>
            <p className="text-gray-400 sm:pl-4">9:00 am – 9:00 pm</p>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default OpeningHours;
  