import React from "react";
import Head from "next/head";

import ContactList from "../components/ContactList";

const Home = () => (
  <div>
    <Head>
      <title>Next.js App</title>
    </Head>

    <h1>Contacts</h1>
    <ContactList />
  </div>
);

export default Home;
