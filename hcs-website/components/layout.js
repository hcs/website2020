import Head from 'next/head';
import Link from 'next/link';
import styles from './navbar.module.css'
//https://www.w3schools.com/howto/howto_css_subnav.asp

export default function Layout({ children }) {
  return (
    // <div class="navbar">
    //   <a href="#home">Home</a>
    //   <div class="subnav">
    //     <button class="subnavbtn">About<i class="fa fa-caret-down"></i></button>
    //     <div class="subnav-content">
    //       <a href="#company">Company</a>
    //       <a href="#team">Team</a>
    //       <a href="#careers">Careers</a>
    //     </div>
    //   </div>
    //   <div class="subnav">
    //     <button class="subnavbtn">Services <i class="fa fa-caret-down"></i></button>
    //     <div class="subnav-content">
    //       <a href="#bring">Bring</a>
    //       <a href="#deliver">Deliver</a>
    //       <a href="#package">Package</a>
    //       <a href="#express">Express</a>
    //     </div>
    //   </div>
    //   <div class="subnav">
    //     <button class="subnavbtn">Partners <i class="fa fa-caret-down"></i></button>
    //     <div class="subnav-content">
    //       <a href="#link1">Link 1</a>
    //       <a href="#link2">Link 2</a>
    //       <a href="#link3">Link 3</a>
    //       <a href="#link4">Link 4</a>
    //     </div>
    //   </div>
    //   <a href="#contact">Contact</a>
    //   {children}
    // </div>
    <div>
    <Head>
      <title>Harvard Computer Society</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className = "nav">
        <Link href="/index"><a>Home</a></Link>
        <Link href="/about"><a>About Us</a></Link>
            <div className = "subnav">
            <Link href="/about"><a>About</a></Link>
            <Link href="/faq"><a>FAQ</a></Link>
            <Link href="/sponsors"><a>Sponsors</a></Link>
            </div>
        <Link href="/news"><a>News</a></Link>
        <Link href="/involved"><a>Get Involved</a></Link>
            <div className = "subnav">
            <Link href="/bip"><a>BIP Program</a></Link>
            <Link href="/comp"><a>Comp</a></Link>
            </div>
        <Link href="/services"><a>Services</a></Link>
            <div className = "subnav">
            <Link href="/account"><a>HCS Account Login</a></Link>
            <Link href="/tutorial"><a>Tutorials</a></Link>
            <Link href="/mailinglist"><a>Mailing List</a></Link>
            </div>
        <Link href="/contact"><a>Contact</a></Link>
    </div>
    {children}
</div>
  );
}
