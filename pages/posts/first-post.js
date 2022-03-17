import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image 
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="Márton Nemeskéri"
      />
      <h1>This is some modification done on the 'dev' branch</h1>
    </Layout>
  );
};