import profile from '../assets/images/profile.jpeg'

const Side_card = () => {
  return (
    <div className='bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center max-w-sm w-full mx-auto'>
      <div className='w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden mb-4 border-4 border-emerald-200'>
        <img src={profile} alt="profile" className='w-full h-full object-cover' />
      </div>

      <div className='text-center'>
        <h1 className='text-2xl sm:text-3xl font-bold mb-1'>Dante Kadagi</h1>
        <p className='text-gray-500 mb-4 text-sm sm:text-base'>Software Engineer</p>
        
        <button className='bg-emerald-500 hover:bg-emerald-600 transition duration-300 w-36 py-2 text-white font-semibold rounded-full shadow-md'>
          Contact Me
        </button>
      </div>
    </div>
  )
}

export default Side_card
