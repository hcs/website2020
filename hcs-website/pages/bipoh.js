import Link from 'next/link'
import React from 'react';
import Layout from '../components/layout.js';
import styles from './comp.module.css';
import pstyles from './people/people.module.css';
import Item from './faq/faqitem.js';
import Button from 'react-bootstrap/Button';

export default class Bipoh extends React.Component {
    constructor(props) {
        super(props);
        this.staff = [
          { name: "Vassilios Kaxiras", pic: "headshots/Vassilios.png", url: "https://calendly.com/bipohvassilios/", bio: "Vassilios is a sophomore in Eliot and one of the HCS Directors of Tech. He has experience with building mobile applications in React Native, systems programming, and full stack web development. He also has experience with Harvard's resources for budding startups." },
          { name: "Teddy Lin", pic: "headshots/Teddy.png", url: "https://calendly.com/teddylin", bio: "Teddy is a Director of Tech at HCS. His technical experience includes web dev, React, and Next.js. He's also happy to brainstorm and discuss business strategies." }
        ];
        this.examples = [
          "I'm trying to build an app with my friends but we don't know the best framework to start with.",
          "I'm trying to build a personal website to show employers but I don't just want to use a template.",
          "I have a great idea for a startup but no idea how to start building an MVP, or where to look first for funding.",
          "I'm building a webscraper for a cool data-driven project, but I'm having trouble parsing complicated websites with clunky tools to get my data.",
        ];
    }

    renderPerson(d) {
      const url = d.url;
      return (
        <div className = {styles.imagebox} onClick={() => { window.location.href = url } }>
            <div className = {pstyles.pics}>
                <div className={styles.hover}>
                  <img src={d.pic}></img>
                </div>
            </div>
            <div className = {pstyles.personalintro}>
                    <a className = {pstyles.name}>{d.name}</a>
                    <a className = {styles.bio}>{d.bio}</a>
            </div>
         </div>
       );
    }

    render() {
        return (
            <Layout>
                <div className={styles.wrap}>

                    <h1 className={styles.comp}>BIP Tech Office Hours</h1>

                    <div className="intro">
                        <h2 className={styles.subtitle}>About</h2>
                        <p className={styles.container}>Looking to build a project? Need help with an app? Have an idea for a startup but just don't know where to start? Come to our Tech Office Hours to ask your questions! Sign up here for 30 minute conversations with the HCS tech team, shown below. Example problems we could help with:</p>
                        <ul className={styles.list}>
                          {this.examples.map(e => <li className={styles.bullet}>{e}</li>)}
                        </ul>
                    </div>
                    <div className="howto">
                        <h2 className={styles.subtitle}>Who can sign up?</h2>
                        <p className={styles.container}>BIP Tech Office Hours are open to anyone in the Harvard community, regardless of your participation in the BIP program.</p> 
                    </div>
                    <div className="howto">
                        <h2 className={styles.subtitle}>Staff</h2>
                        <p className={styles.container}>Click on someone below to sign up for a meeting!</p> 
                        {this.staff.map(this.renderPerson)}
                    </div>
                </div>
            </Layout >
        );
    }
}
