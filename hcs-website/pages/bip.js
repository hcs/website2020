import Link from 'next/link'
import React from 'react';
import Layout from '../components/layout.js';
import styles from './bip.module.css';


export default class FAQPage extends React.Component {
    constructor(props) {
      super(props);


    }

    render () {
      return(
        <Layout>
          <div>
            <img src="/bipphoto.jpg" className = {styles.image}></img>
              <div className = {styles.text}>
              <p>Since its inception, HCS has cultivated a community of passionate young technologists and builders, who are hungry to cultivate the next generation of tech. In light of COVID-19, we hope to encourage experimentation and tinkering during this unstructured time alongside giving back to the greater Harvard community.
              </p>
              <br />
              <p>That's why we've launched the Builders Incubation Program, a three month initiative from June to August providing a virtual community for remote collaboration on any form of project. We will provide funding through equity-free grants in the range of $100 to $5,000, mentorships from our product, engineering, design, and investor networks, workshops, socials, and more programming throughout the summer to encourage our community to keep building.
              </p>
              <br />
              <p>Regardless of the stage of your idea in the innovation process, we'll help guide you and introduce you to like-minded Harvard-affiliated builders to further fuel your zeal, so please don't hesitate to apply!
              </p>
              <br />
              <p>
              If you're looking for a team or idea to apply with, check out the HCS Summer Projects Initiative, a database of projects, ideas, and teams that are active this summer and looking for other team members. If interested, apply by 5/15 11:59 EST at https://bit.ly/hcs-bip-app. The applications will be reviewed on a rolling basis. For any questions or concerns, please contact us at ryankim@college.harvard.edu or annawang1@college.harvard.edu!
              </p>
              </div>
              <Link href = "https://bit.ly/hcs-bip-app"><a className = {styles.expandcollapse}>Apply Now</a></Link>
          </div>
        </Layout>
      );
    }
}
