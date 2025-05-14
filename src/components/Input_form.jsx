const Input_form = () => {
  return (
    <form action="#" className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto space-y-4">
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1 text-gray-700 font-medium">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          required
          className="bg-gray-100 border border-gray-300 rounded-md h-12 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 text-gray-700 font-medium">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your  Email"
          required
          className="bg-gray-100 border border-gray-300 rounded-md h-12 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="phone" className="mb-1 text-gray-700 font-medium">Phone:</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          id="phone"
          required
          className="bg-gray-100 border border-gray-300 rounded-md h-12 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-md transition"
      >
        Submit
      </button>
    </form>
  )
}

export default Input_form
