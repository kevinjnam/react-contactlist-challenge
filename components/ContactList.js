import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, modifyFavorite } from '../actions/contacts';
import { getContacts } from '../selectors/contacts';
import { checkPhones } from '../utils/util';
import ContactItem from './ContactItem';
import Divider from './Divider';
// [x] Render a list of contacts alphabetically by last name, first name.
//
// [x] The list should be broken up into sections where each section has
//     a title of the first letter of the last names of contacts in that
//     section.
//
// [x] Contacts without a phone number should be ignored.
//
// [x] Phone numbers should be displayed in a (xxx) xxx-xxxx format.
//
// Ex.
// J
// –––––––
// Richard Julian – (542) 211-5678
//
// L
// –––––––
// Alejandro Lane – (542) 345-8721
// Allen Lane – (542) 987-3456
// Erin Larson – (542) 321-3456
// .....

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const validContacts = checkPhones(contacts);

  const contactListJSX = () => {
    const listOfDividers = getListOfDividers();
    const organizedContactItems = organizeContactListByDivider(listOfDividers);
    const dividedContacts = dividedContactsJSX(organizedContactItems);
    return dividedContacts;
  };

  const dividedContactsJSX = organizedContactItems => {
    const dividedContacts = [];
    for (let dividers in organizedContactItems) {
      dividedContacts.push(
        <Divider key={dividers} category={dividers}>
          {organizedContactItems[dividers]}
        </Divider>
      );
    }
    return dividedContacts;
  };

  const organizeContactListByDivider = listOfDividers => {
    const contactList = {};
    //create an array for each divider key
    listOfDividers.forEach(divider => {
      if (!contactList[divider]) {
        contactList[divider] = new Array();
      }
    });

    //organize each contact by last name
    if (validContacts) {
      validContacts.forEach((contact, index) => {
        const letter = contact.lastName[0].toUpperCase();
        const id = `${contact.lastName}-${index}`;
        contactList[letter].push(
          <ContactItem
            id={id}
            key={id}
            {...contact}
            modifyFavorite={contact => dispatch(modifyFavorite(contact))}
          />
        );
      });
    }
    return contactList;
  };

  const getListOfDividers = () => {
    const possibleDividers = {};
    validContacts.forEach(contact => {
      const firstLetterOfLastName = contact.lastName[0].toUpperCase();
      if (!possibleDividers[firstLetterOfLastName]) {
        possibleDividers[firstLetterOfLastName] = true;
      }
    });
    return Object.keys(possibleDividers);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return <div style={{ width: 400 }}>{contactListJSX()}</div>;
}
