import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => console.log(
          'script loaded correctly, window.FB has been populated'
        )}
      />
      <Image 
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="Your Name"
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};