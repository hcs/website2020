import Link from 'next/link'
import Layout from '../components/layout.js';
import styles from './faq.module.css';
//for some reason, when I import the above code, I got error
//error: ./components/layout.js
//Module not found: Can't resolve './faq.module.css' in '/Users/teddylin/Desktop/website2020/hcs-website/components'

//This is the Javascript code from https://codepen.io/kathykato/pen/MoZJom
/*
const items = document.querySelectorAll(".accordion a");

export default function toggleAccordion(){
    return (
    this.classList.toggle('active'),
    this.nextElementSibling.classList.toggle('active')
  )
}
items.forEach(item => item.addEventListener('click', toggleAccordion));
*/

//HTML code, back to home link
export default function display(){
      return (
        <layout>
            <div class="container">
              <h2>Frequently Asked Questions</h2>
              <div class="accordion">
                <div class="accordion-item">
                  <a>What is HCS?</a>
                  <div class="content">
                    <p>HCS is a student organization at Harvard University devoted to promoting CS knowledge, fostering the CS community, and offering free services to Harvard affiliates.</p>
                  </div>
                </div>
                <div class="accordion-item">
                  <a>History of HCS?</a>
                  <div class="content">
                    <p>The history of HCS dated back to 1983, making it older than most of our current members. HCS was founded to publish the Harvard Computer Review and Computing@Harvard. Fun fact: 2020 is the 20th anniversary of our mailing list service.</p>
                  </div>
                </div>
                <div class="accordion-item">
                  <a>What is HCS community like?</a>
                  <div class="content">
                    <p>HCS is an incredibly tight-knit community that bonds throughout various community events. This semester, we ordered lots of delicious foods, including ramdon (Parasite), Shake Shack, Otto’s pizza, etc. Stay updated about our upcoming events where you can enjoy good foods and good company.</p>
                  </div>
                </div>
                <div class="accordion-item">
                  <a>What are the terms and conditions?</a>
                  <div class="content">
                    <p>HCS reserves the right to terminate usage to any of its services at any time for any reason.</p>
                  </div>
                </div>
              </div>

            </div>
            <h2>
              <Link href="/">
                <a>Back to home</a>
              </Link>
            </h2>
        </layout>
      )
  };
