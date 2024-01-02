import type { NextPage } from 'next'
import { Header, Footer } from '../components'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/react';

const App: NextPage = () => {
    const session = useSession()
    return (
        <div className={styles.container}>
            <Header/>
            <main className={styles.main}>
                <a href='/'> Home </a>
            </main>
            <Footer/>
        </div>
    )
  }
  
  export default App