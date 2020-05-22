import Link from 'next/link'
import React from 'react';
import Layout from '../../components/layout.js';
import styles from './faq.module.css';
import FAQItem from './faqitem.js';
import Button from 'react-bootstrap/Button';


export default class FAQPage extends React.Component {
    constructor(props) {
      super(props);
      this.general = [
          {title: "What is HCS?", body: "HCS is a student organization at Harvard University devoted to promoting CS knowledge, fostering the CS community, and offering free services to Harvard affiliates."},
          {title: "History of HCS?", body: "The history of HCS dated back to 1983, making it older than most of our current members. HCS was founded to publish the Harvard Computer Review and Computing@Harvard. Fun fact: 2020 is the 20th anniversary of our mailing list service."},
          {title: "What is HCS community like?", body: "HCS is an incredibly tight-knit community that bonds throughout various community events. This semester, we ordered lots of delicious foods, including ramdon (Parasite), Shake Shack, Otto’s pizza, etc. Stay updated about our upcoming events where you can enjoy good foods and good company."},
          {title: "What are the terms and conditions?", body: "HCS reserves the right to terminate usage to any of its services at any time for any reason."},
          {title: "How to donate money or computer hardware to support HCS?", body: "You can email HCS board! We appreciate your donation to support our various projects and our core mission. We can arrange for the donation to be tax-deductible, but please let us know in advance so we can channel it through the University."},
          {title: "What is BIP?", body: "Builders Innovation Program is a brand new initiative launched by HCS this year. If you have an idea (doesn’t need to be a full-fledged idea) and need some funding to grow it, HCS got you covered. Apply by 5/15 to get equity-free grants ranging from $100 to $5000."},
          {title: "What other things does HCS do?", body: "Beyond events, HCS is involved in advocating for right technology policy and collaborating with CS 50 and CS 51 to help them expand their technical capabilities. HCS also hosts Datamatch annually, which uses an advanced computer algorithm to pair Harvard students for Valentine's Day."}
      ];

      this.involved = [
          {title: "Who can join HCS?", body: "Everybody! You don't have to be a CS concentrator to join HCS. You can be a senior concentrating in History or a first-year student interested in Physics or Government. You can also join if you are in the School of Engineering and Applied Sciences or any other Harvard graduate school."},
          {title: "Can I still join if I don’t know much about CS?", body: "Absolutely! Most of us didn't know very much when we joined either. In fact, some of our most successful members had never programmed before joining HCS. We're happy to teach you, so don't be afraid to join without experience or to ask questions."},
          {title: "How to join HCS?", body: "HCS runs an educational bootcamp series offered in both the fall and the spring. The bootcamps cover various topics including data mining, APIs, web scraping, and web development. It is a great way to hone your skills, make new friends, and connect with our industry sponsors! Due to the current Covid-19 crisis, only 2 bootcamps are needed to become a member of HCS."},
          {title: "How to stay updated with HCS information?", body: "Join HCS Slack to get updated information about announcements, community events, internships, and job opportunities. Additionally, you can click on the link below to subscribe to HCS’ own mailing lists."}

      ];


    }

    render () {
      return(
        <Layout>
          //<Button variant="outline-warning">Warning</Button>
          <div className={styles.wrap}>
              <h1 className = {styles.faq}>Frequently Asked Questions</h1>
              <button className = {styles.expandcollapse}>Expand All</button>
              <h2 className = {styles.subtitle}>General</h2>
              {this.general.map(item => <FAQItem title={item.title} body={item.body} />)};
              <h2 className = {styles.subtitle}>Get Involved</h2>
              {this.involved.map(item => <FAQItem title={item.title} body={item.body} />)};
          </div>
        </Layout>
      );
    }
}














//This is the Javascript code from https://codepen.io/kathykato/pen/MoZJom

//
// const items = document.querySelectorAll(".accordion a");
//
// export default function toggleAccordion(){
//     return (
//     this.classList.toggle('active'),
//     this.nextElementSibling.classList.toggle('active')
//   )
// }
// items.forEach(item => item.addEventListener('click', toggleAccordion));


//HTML code, back to home link
// export default function display(){
//       return (
//         <layout>
//             <div class="container">
//               <h2>Frequently Asked Questions</h2>
//               <div class="accordion">
//                 <div class="accordion-item">
//                   <a>What is HCS?</a>
//                   <div class="content">
//                     <p>HCS is a student organization at Harvard University devoted to promoting CS knowledge, fostering the CS community, and offering free services to Harvard affiliates.</p>
//                   </div>
//                 </div>
//                 <div class="accordion-item">
//                   <a>History of HCS?</a>
//                   <div class="content">
//                     <p>The history of HCS dated back to 1983, making it older than most of our current members. HCS was founded to publish the Harvard Computer Review and Computing@Harvard. Fun fact: 2020 is the 20th anniversary of our mailing list service.</p>
//                   </div>
//                 </div>
//                 <div class="accordion-item">
//                   <a>What is HCS community like?</a>
//                   <div class="content">
//                     <p>HCS is an incredibly tight-knit community that bonds throughout various community events. This semester, we ordered lots of delicious foods, including ramdon (Parasite), Shake Shack, Otto’s pizza, etc. Stay updated about our upcoming events where you can enjoy good foods and good company.</p>
//                   </div>
//                 </div>
//                 <div class="accordion-item">
//                   <a>What are the terms and conditions?</a>
//                   <div class="content">
//                     <p>HCS reserves the right to terminate usage to any of its services at any time for any reason.</p>
//                   </div>
//                 </div>
//               </div>
            //
            // </div>

  //       </layout>
  //     )
  // };
