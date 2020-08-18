import React from 'react';
import Iframe from 'react-iframe'
import styles from './bipdemo.module.css'
import Layout from '../../components/layout.js';

export default function HCSVideo() {

  return (
    <Layout>
    <div className={styles.boxes}>
        <div className = {styles.box}>
            <div className = {styles.pics}>
            <Iframe width="447"
            height="300" //790-40 from nav bar
            src="https://www.youtube.com/embed/L3pk_TBkihU"/>
            </div>
            <div>
                    <a className = {styles.title}>Tenet (2020)</a>
                    <a className = {styles.description}>Christopher Nolan</a>
                    <a className = {styles.description}>Warner Bros. Pictures</a>
                    <a className = {styles.description}>150 minutes</a>
            </div>
        </div>

        <div className = {styles.box}>
            <div className = {styles.pics}>
            <Iframe width="447"
            height="300" //790-40 from nav bar
            src="https://www.youtube.com/embed/g4U4BQW9OEk"/>
            </div>
            <div>
            <a className = {styles.title}>Top Gun: Maverick (2021)</a>
            <a className = {styles.description}>Joseph Kosinski</a>
            <a className = {styles.description}>Paramount Pictures</a>
            <a className = {styles.description}>153 minutes</a>
            </div>
        </div>

        <div className = {styles.box}>
            <div className = {styles.pics}>
            <Iframe width="447"
            height="300" //790-40 from nav bar
            src="https://www.youtube.com/embed/wb49-oV0F78"/>
            </div>
            <div>
            <a className = {styles.title}>Mission: Impossible - Fallout</a>
            <a className = {styles.description}>From Director Christopher Nolan. Coming to theaters 8.12.20.</a>
            </div>
        </div>

        <div className = {styles.box}>
            <div className = {styles.pics}>
            <Iframe width="447"
            height="300" //790-40 from nav bar
            src="https://www.youtube.com/embed/ybji16u608U"/>
            </div>
            <div>
            <a className = {styles.title}>TENET - NEW TRAILER</a>
            <a className = {styles.description}>From Director Christopher Nolan. Coming to theaters 8.12.20.</a>
            </div>
        </div>



    </div>
</Layout>
  );
}
