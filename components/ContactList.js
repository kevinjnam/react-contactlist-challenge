import React, { Component } from "react";

import ContactItem from "../components/ContactItem";

class ContactList extends Component {
  constructor(props) {
    super(props);

    this.contacts = [
      { firstName: "Allen", lastName: "Lane", phone: "542-987-3456" },
      { firstName: "Trey", lastName: "Smith", phone: "" },
      { firstName: "Richard", lastName: "Walker", phone: "542-737-3246" },
      { firstName: "Alejandro", lastName: "Lane", phone: "542-345-8721" },
      { firstName: "Bob", lastName: "Larson", phone: "(542) 321-3456" },
      { firstName: "Richard", lastName: "Julian", phone: "542-211-5678" },
      { firstName: "Bill", lastName: "Allen", phone: "542-654-2154" }
    ];
  }

  render() {
    // Render a list of contacts alphabetically by last name, first name.
    // The list should be broken up into sections where each section has a title of the first letter of the last names of contacts in that section.
    // Contacts without a phone number should be ignored.
    // Phone numbers should be displayed in a (xxx) xxx-xxxx format.
    // Ex.
    // J
    // –––––––
    // Richard Julian – (542) 211-5678
    //
    // L
    // –––––––
    // Alejandro Lane – (542) 345-8721
    // Allen Lane – (542) 987-3456
    // Bob Larson – (542) 321-3456
    // .....
    return (
      <div style={{ width: 400 }}>
        {this.contacts.map((contact, idx) => (
          <ContactItem key={idx} {...contact} />
        ))}
      </div>
    );
  }
}

export default ContactList;
