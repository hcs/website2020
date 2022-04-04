import Link from 'next/link'
import React from 'react';
import Layout from '../components/layout.js';
import styles from './comp.module.css';
import Item from './faq/faqitem.js';
import Button from 'react-bootstrap/Button';

export default class Comp extends React.Component {
    render() {
        return (
            <Layout>
                <div className={styles.wrap}>

                    <h1 className={styles.comp}>Join HCS</h1>

                    <div className="intro">
                        <h2 className={styles.subtitle}>Why Should You Be a Member?</h2>
                        <p className={styles.container}>Join the many CS students who comp HCS each semester!
                        You get access to the thriving community of Harvard CS, can attend bootcamps and exciting socials,
                        and learn a range of technical skills. <br></br><br></br>

                        <figure>
                            <img src='eventpics/social2.jpg' width="500px"/> <img src='eventpics/social1.jpg' width="500px"/>
                            <figcaption>CS51 Study Break (March 3, 2022) and an HCS Taco Social (March 31, 2022) </figcaption>
                        </figure>

                        <br></br><br></br>

                        Benefits to being a member include <b>weekly HCS events</b>, 
                        Big/Little-O <b>mentorships</b>, <b>recruiting</b> help through HCS events and resources, <b>funding</b> for projects and conferences,
                        technical and pre-professional <b>workshops</b>, and <b>outings</b> to local tech offices.</p>

                        <br></br><br></br>

                        
                    </div>

                    <div className="how-to">
                        <h2 className={styles.subtitle}>How to Comp</h2>
                        <p className={styles.container}> To complete the comp process, compers must complete at least 3 of our 4 bootcamps and attend one social. In the past, bootcamps have covered topics such as Facebook data mining, building mobile apps with React Native, and web scraping. The next Comp schedule for Fall 2022, as well as the content for the bootcamps, will become available this Fall! We hope to see you there! </p>

                    </div>
                </div>
            </Layout >
        );
    }
}
