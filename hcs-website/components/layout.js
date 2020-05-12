import Head from 'next/head';
//import styles from './faq.module.css'
//for some reason, when I import the above code, I got error
//error: ./components/layout.js
//Module not found: Can't resolve './faq.module.css' in '/Users/teddylin/Desktop/website2020/hcs-website/components'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Harvard Computer Society</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
}
