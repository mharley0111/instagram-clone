import { useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  useEffect(() => {
    if (!currentUser) {
      Router.push('/auth/signin');
    }
  }, []);

  return currentUser ? (
    <>
      <h1>{currentUser.email}</h1>
      <Link href="/auth/signout">
        <button>Sign Out</button>
      </Link>
    </>
  ) : (
    <h1>...</h1>
  );
};

LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');
  return data;
};

export default LandingPage;
