import styles from '../styles/Home.module.css'
import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

const HomeBody = ({session}) => {

    return(
      <main className={styles.main}>

        {session.status === 'authenticated' ? (
            <>
                <h1 className={styles.maintitle}>
                    Welcome {session.data.user?.name}!
                </h1>

                {session.data.user?.image && (
                    <img
                    src={session.data.user.image}
                    alt={`Profile picture of ${session.data.user.name}`}
                    className={styles.userImage}
                    />
                )}

                <button
                className={styles.button}
                type="button"
                onClick={() => signOut()}
                >
                Sign out
                </button>
            </>
        ) : (
            <>

            <h1 className={styles.maintitle}>
                    Welcome to YourPlaylist!
            </h1>

            <button
            className={`${styles.button} ${styles.greenbutton}`}
            type="button"
            onClick={() => signIn('spotify')}
            disabled={session.status === 'loading'}
            >
            Sign in with Spotify
            </button>

            </>
        )}

        <h1 className={styles.title}>
        Create your perfect playlist effortlessly! Tailor your music experience with personalized playlists that match your unique taste. 
        </h1>

        <p>
        
            {session.status === 'authenticated' &&
                <Link href="/app">
                    <button className={styles.button}>
                    Start
                    </button>
              </Link>
            }
        </p>

      </main>
    )
}

export default HomeBody