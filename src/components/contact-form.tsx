export const ContactForm = () => {
  return (
    <form className="w-full">
      <h2 className="text-xl font-semibold text-gray-300">SEND A NOTE</h2>
      <div className="grid md:flex md:gap-x-5 gap-y-5 mt-2">
        <input
          className="md:p-5 p-3 bg-gray-800 rounded-xl md:w-1/2 text-lg font-medium 
          text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-300"
          placeholder="Name"
        />
        <input
          className="md:p-5 p-3 bg-gray-800 rounded-xl md:w-1/2 font-medium text-gray-300 
          focus:outline-none focus:ring-1 focus:ring-blue-300"
          placeholder="Email"
        />
      </div>
      <div className="w-full mt-5">
        <textarea
          className="w-full p-5 bg-gray-800 rounded-xl font-medium text-gray-300 
          focus:outline-none focus:ring-1 focus:ring-blue-300"
          rows={5}
        />
      </div>
      <div className="mt-5">
        <button className="rounded-full w-80 bg-green-400 py-3 px-1 text-lg font-semibold">
          Send Message
        </button>
      </div>
    </form>
  );
};
