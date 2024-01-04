import type { NextPage } from 'next';
import { Header, Footer, TrackList } from '../components';
import styles from '../styles/Home.module.css';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const App: NextPage = () => {
  const { data: session } = useSession();
  const [topTracks, setTopTracks] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!session) {
        // session is not available yet
        return;
      }

      const url = `https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=50`;
      const req_headers = {
        'Authorization': `Bearer ${session.accessToken}`,
      };

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: req_headers,
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setTopTracks(data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [session]);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <a href='/'> Home </a>
        <TrackList topTracks={topTracks} />
      </main>
      <Footer />
    </div>
  );
};

export default App;