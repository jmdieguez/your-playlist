import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Header, HomeBody, Footer } from '../components'
import React from 'react';
import { useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const session = useSession()
  return (
    <div className={styles.container}>
      <Header/>
      <HomeBody session={session}/>
      <Footer/>
    </div>
  )
}

export default Home
