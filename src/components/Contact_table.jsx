const Contact_table = ({ contacts = [] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="bg-white shadow-lg border-collapse w-full rounded-md overflow-hidden mt-4">
        <thead className="bg-emerald-500 text-white uppercase text-sm">
          <tr>
            <th className="px-6 py-4 text-left">Name</th>
            <th className="px-6 py-4 text-left">Email</th>
            <th className="px-6 py-4 text-left">Number</th>
            <th className="px-6 py-4 text-left">Location</th>
            <th className="px-6 py-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {contacts.length > 0 ? (
            contacts.map((contact, index) => (
              <tr key={index} className="even:bg-gray-100 hover:bg-gray-200 transition-all duration-200">
                <td className="px-6 py-4">{contact.name}</td>
                <td className="px-6 py-4">{contact.email}</td>
                <td className="px-6 py-4">{contact.number}</td>
                <td className="px-6 py-4">{contact.location}</td>
                <td className="px-6 py-4">
                  <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Edit</button>
                  <button className="ml-2 text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="px-6 py-4 text-center text-gray-500">No contacts yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Contact_table;
