import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <> {/* React returns only a single component, so we use an empty tag (fragment) that surround code */}

    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
      {/* Navbar from components/Layout */}
      
      <h1 className={styles.title}>Homepage</h1>
      
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error labore minus aut earum ab iusto corporis repellendus aliquid distinctio? Quae, at necessitatibus? Eligendi maiores ducimus minima natus inventore eos repellendus.</p>

      <Link href="/ninjas"> 
        <a className={styles.btn}>See Ninja Listing</a> 
      </Link>

      {/* Footer from components/Layout */}
    </div>
    
    </>
  )
}

export default Home;
