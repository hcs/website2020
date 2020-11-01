import Link from 'next/link'
import React from 'react';
import Layout from '../components/layout.js';
import styles from './comp.module.css';
import Item from './faq/faqitem.js';
import Button from 'react-bootstrap/Button';

export default class Comp extends React.Component {
    constructor(props) {
        super(props);
        this.benefits = [
            "1 - 2 HCS events every week",
            "Big O and Little O mentorships",
            "Recruiting help through HCS events and resources",
            "Funding for personal projects, hackathon funding, conferences funding",
            "Outings to local tech offices"
        ]

    }

    render() {
        return (
            <Layout>
                <div className={styles.wrap}>

                    <h1 className={styles.comp}>Comp</h1>

                    <div className="intro">
                        <h2 className={styles.subtitle}>Why comp HCS?</h2>
                        <p className={styles.container}>Through our hands-on bootcamps and exciting socials, compers not only gain experience with a broad range of technical skills, but also get to immerse themselves in the thriving CS community at Harvard.
                        Upon completing the comp, there are many benefits to being an HCS member including:</p>
                        {this.benefits.map((item) => <li classname={styles.bullet}>{item}</li>)}
                    </div>

                    <div className="how-to">
                        <h2 className={styles.subtitle}>How to Comp</h2>
                        <p className={styles.container}> To complete the comp process, compers must complete at least 3 of our 4 bootcamps and attend one social. In the past, bootcamps have covered topics such as Facebook data mining, building mobile apps with React Native, and web scraping. The next comp schedule, as well as the content for the bootcamps, will become available in the fall! </p>

                    </div>
                </div>
            </Layout >
        );
    }
}
