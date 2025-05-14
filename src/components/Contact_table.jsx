import React from 'react';

const Contact_table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="bg-white shadow-lg border-collapse w-full rounded-md overflow-hidden mt-4">
        <thead className="bg-emerald-500 text-white uppercase text-sm">
          <tr>
            <th className="px-6 py-4 text-left">Name</th>
            <th className="px-6 py-4 text-left">Email</th>
            <th className="px-6 py-4 text-left">Number</th>
            <th className="px-6 py-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="even:bg-gray-100 hover:bg-gray-200 transition-all duration-200">
            <td className="px-6 py-4">John Doe</td>
            <td className="px-6 py-4">john@gmail.com</td>
            <td className="px-6 py-4">+254 757 700 934</td>
            <td className="px-6 py-4">
              <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Edit</button>
              <button className="ml-2 text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
            </td>
          </tr>

           <tr className="even:bg-gray-100 hover:bg-gray-200 transition-all duration-200">
            <td className="px-6 py-4">John Doe</td>
            <td className="px-6 py-4">john@gmail.com</td>
            <td className="px-6 py-4">+254 757 700 934</td>
            <td className="px-6 py-4">
              <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Edit</button>
              <button className="ml-2 text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
            </td>
          </tr>


           <tr className="even:bg-gray-100 hover:bg-gray-200 transition-all duration-200">
            <td className="px-6 py-4">John Doe</td>
            <td className="px-6 py-4">john@gmail.com</td>
            <td className="px-6 py-4">+254 757 700 934</td>
            <td className="px-6 py-4">
              <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Edit</button>
              <button className="ml-2 text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contact_table;
