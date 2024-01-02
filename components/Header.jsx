import Head from 'next/head'

const Header = () => {
    return (
        <header className="bg-gray-800 p-4">
          <Head>
            <title>YourPlaylist</title>
            <meta name="description" content="Create your perfect playlist effortlessly! Tailor your music experience with personalized playlists that match your unique taste. " />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        </header>
      );
}

export default Header