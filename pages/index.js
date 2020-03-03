import React from 'react';
import Head from 'next/head';

import ContactList from '../components/ContactList';
import FavoriteList from '../components/FavoritesList';

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Head>
        <title>Next.js App</title>
      </Head>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Contacts</h1>
        <ContactList />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Favorites</h1>
        <FavoriteList />
      </div>
    </div>
  );
}
