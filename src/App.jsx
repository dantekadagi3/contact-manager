import React, { useState } from 'react';
import add from "../src/assets/icons/add.svg";
import Success_display from '../src/components/Success_display';
import Side_card from '../src/components/Side_card';
import Search_bar from '../src/components/Search_bar';
import Input_form from '../src/components/Input_form';
import Contact_table from '../src/components/Contact_table';

const loadContacts = () => {
  const stored = localStorage.getItem('contacts');
  return stored ? JSON.parse(stored) : [];
};

const saveContacts = (contacts) => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

const App = () => {
  const [contacts, setContacts] = useState(() => loadContacts());
  const [showModule, setShowModule] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddContact = (contact) => {
    const updated = [...contacts, contact];
    setContacts(updated);
    saveContacts(updated);
    setShowModule(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-emerald-500 text-white px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="font-bold text-2xl md:text-3xl text-center md:text-left">
            Contact Manager<span className="text-white">.</span>
          </h1>

          <div className="flex items-center gap-4">
            <button
              className="bg-white p-2 rounded-full hover:bg-gray-100 transition"
              onClick={() => setShowModule(true)}
            >
              <img src={add} alt="add button" className="w-6 h-6" />
            </button>
            <Search_bar />
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <main className="flex flex-col md:flex-row gap-6 p-4 bg-gray-100 min-h-screen">
        {/* Side Card */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <Side_card />
        </div>

        {/* Table Section */}
        <div className="w-full">
          {/* ✅ Pass contacts to Contact_table */}
          <Contact_table contacts={contacts} />
        </div>
      </main>

      {/* Success Feedback */}
      {showSuccess && <Success_display message="Contact added successfully!" />}

      {/* Conditional Input Form */}
      {showModule && (
        <Input_form
          onAddContact={handleAddContact}
          onClose={() => setShowModule(false)}
        />
      )}
    </>
  );
};

export default App;
