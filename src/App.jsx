import React from 'react'
import add from "./assets/icons/add.svg"
import Success_display from './components/Success_display'
import Side_card from './components/Side_card'
import Search_bar from './components/Search_bar'
import Input_form from './components/Input_form'
import Contact_table from './components/Contact_table'

const App = () => {
  return (
    <>
      {/* Header */}
      <header className='bg-emerald-500 text-white px-4 py-6'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <h1 className='font-bold text-2xl md:text-3xl text-center md:text-left'>
            Contact Manager<span className="text-white">.</span>
          </h1>

          <div className='flex items-center gap-4'>
            <button className="bg-white p-2 rounded-full hover:bg-gray-100 transition">
              <img src={add} alt="add button" className='w-6 h-6' />
            </button>
            <Search_bar />
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <main className='flex flex-col md:flex-row gap-6 p-4 bg-gray-100 min-h-screen'>
        {/* Side Card */}
        <div className='w-full md:w-1/3 lg:w-1/4'>
          <Side_card />
        </div>

        {/* Table Section */}
        <div className='w-full'>
          <Contact_table />
        </div>
      </main>
    </>
  )
}

export default App
