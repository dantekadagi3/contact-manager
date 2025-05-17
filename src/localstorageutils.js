//Key to store contacts
const CONTACT_KEY = 'contacts';

//save contacts to local storage
export const saveContacts=(contacts) => {
    localStorage.setItem(CONTACT_KEY, JSON.stringify(contacts));
    
}

//load contacts from local storage
export const loadContacts=() => {
    const contacts = localStorage.getItem(CONTACT_KEY);
    return contacts ? JSON.parse(contacts) : [];
}

//Delete contacts from local storage by index
export const deleteContact=(index) => {
    const contacts = loadContacts();
    contacts.splice(index, 1);
    saveContacts(contacts);
}