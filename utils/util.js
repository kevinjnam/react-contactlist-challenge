export const formatPhone = phone => {
  if (!phone) return;
  if (phone[0] === '(') return phone;

  let newNumbers = '';
  const format = phone.split('-');
  for (let i = 0; i < format.length; i++) {
    const currentDigits = format[i];

    if (i === 0) {
      newNumbers = `(${currentDigits}) `;
    } else if (i === 1) {
      newNumbers = newNumbers + `${currentDigits}-`;
    } else {
      newNumbers = newNumbers + `${currentDigits}`;
    }
  }

  return newNumbers;
};

export const checkPhones = contacts => {
  return contacts.filter(contact => contact.phone);
};
