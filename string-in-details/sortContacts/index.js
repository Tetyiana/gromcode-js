const sortContacts = (contacts, isAsc = true) => {
  if (!Array.isArray(contacts)) {
    return null;
  }
  return contacts.slice().sort((a, b) => {
    if (isAsc === false) {
      return b.name.localeCompare(a.name);
    }
    return a.name.localeCompare(b.name);
  });
};
const contacts = [{ name: 'Tom', phoneNumber: '777-77-77' }, { name: 'Ann', phoneNumber: '333-33-33' }, { name: 'Jon', phoneNumber: '222-22-22' }, { name: 'Nik', phoneNumber: '111-11-11' }];
sortContacts(contacts, true);