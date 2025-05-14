import search from "../assets/icons/search.svg"

const Search_bar = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search"
        className="w-full pl-10 pr-4 py-2 rounded-full bg-white text-gray-600 shadow focus:outline-none"
      />
      <img
        src={search}
        alt="add icon"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-70"
      />
    </div>
  )
}

export default Search_bar
