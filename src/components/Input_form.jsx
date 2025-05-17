import React, { useState } from 'react';

const Input_form = ({ onAddContact, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    location: '' // New Field
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(formData);
    setFormData({ name: '', email: '', number: '', location: '' });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border px-4 py-2 rounded"
            type="email"
            required
          />
          <input
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full border px-4 py-2 rounded"
            required
          />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="text-gray-500">Cancel</button>
            <button type="submit" className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Input_form;
