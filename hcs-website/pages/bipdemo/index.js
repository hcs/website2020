import React from 'react';
import Iframe from 'react-iframe'
import styles from './bipdemo.module.css'
import Layout from '../../components/layout.js';



export default class HCSVideo extends React.Component {
    constructor(props) {
      super(props);
        this.data = [
          { name: "FrigiStick", category: "Hardware", url: "https://www.youtube.com/watch?v=QUM_WRxv9Dk", pitch: "1"
          },
          { name: "Unicorner", category: "Networking", url: "https://www.unicorner.news/", pitch: "One hot startup in your mailbox every other day. 🦄 Unicorner is the newsletter that delivers a 2 minute rundown of an up-and-coming startup to your inbox every other day."
          },
        ];
    }

    render () {
      return(
    <Layout>
    <>
    <h1 className = {styles.h}>Builders Incubation Program Demo</h1>
    <div className={styles.boxes}>
        <div className = {styles.box}>
            <div className = {styles.pics}>
            <Iframe width="546.4"
            height="300" //790-40 from nav bar
            src="https://www.youtube.com/embed/QUM_WRxv9Dk"/>
            </div>
            <div>
                    <a className = {styles.title}>FrigiStick</a>
                    <a className = {styles.category}>Hardware</a>
                    <a className = {styles.pitch}>The FrigiStick is a patent pending sports medicine device that provides a convenient way for people to treat athletic injuries. In a single ergonomic and portable device, we combine cold icing relief with the ability to massage your injuries, providing an efficient method of recovery.</a>
            </div>
        </div>

        <div className = {styles.box}>
            <div className = {styles.pics}>
            <img width={550} height={300} src="/unicorner.png"></img>
            </div>
            <div>
                    <a className = {styles.title}>Unicorner</a>
                    <a className = {styles.category}>Networking</a>
                    <a className = {styles.pitch}>"One hot startup in your mailbox every other day. 🦄 Unicorner is the newsletter that delivers a 2 minute rundown of an up-and-coming startup to your inbox every other day."</a>
            </div>
        </div>

        <div className = {styles.box}>
            <div className = {styles.pics}>
            <Iframe width="546.4"
            height="300" //790-40 from nav bar
            src="https://www.youtube.com/embed/-amw16yCj6Q"/>
            </div>
            <div>
                    <a className = {styles.title}>Rem</a>
                    <a className = {styles.category}>Charity</a>
                    <a className = {styles.pitch}>Here at Rem, we’re a company that’s obsessed with helping our users make an impact on society’s most pressing issues. Our goal is to serve as an all-encompassing digital ecosystem for charitable giving (initially in the form of a mobile app), allowing users to discover new charities, learn more about causes they already care about, donate and engage with those charities, and then share those causes with their friends on our platform.</a>
            </div>
        </div>

        <div className = {styles.box}>
            <div className = {styles.pics}>
            <Iframe width="546.4"
            height="300" //790-40 from nav bar
            src="https://www.youtube.com/embed/LQ26qlpQgSo"/>
            </div>
            <div>
                    <a className = {styles.title}>Critterland</a>
                    <a className = {styles.category}>Gaming</a>
                    <a className = {styles.pitch}>Critterland is a strategy video game that draws inspiration from the natural world to create a novel and intuitive simulation of small-scale ecosystem dynamics. Players must introduce critters with different adaptations into the environment to achieve diverse goals - winning campaign levels, competing with other players, or discovering new interesting equilibriums.</a>
            </div>
        </div>

        <div className = {styles.box}>
            <div className = {styles.pics}>
            <img width={550} height={300} src="/gluten.png"></img>
            </div>
            <div>
                    <a className = {styles.title}>Gluten Free Drugs</a>
                    <a className = {styles.category}>Social Good</a>
                    <a className = {styles.pitch}>Hundreds of thousands of Americans suffer from Celiac Disease or other gluten-triggered sensitivities. However, current legislation leaves patients and doctors unable to easily determine which medications are safe for consumption. Our app will seek to increase the accessibility of this crucial information, as well as encourage organic communication between medical practitioners and patients.</a>
            </div>
        </div>

        <div className = {styles.box}>
            <div className = {styles.pics}>
            <img width={550} height={300} src="/project.jpg"></img>
            </div>
            <div>
                    <a className = {styles.title}>Needfinding Tool</a>
                    <a className = {styles.category}>Project Management Tools</a>
                    <a className = {styles.pitch}>We help organize and run needfinding projects. We do this by providing structure to the deliverable of the process (a prototype with substantiation for major design decisions) and providing tools to support the inquiries.</a>
            </div>
        </div>

        <div className = {styles.box}>
            <div className = {styles.pics}>
            <Iframe width="546.4"
            height="300" //790-40 from nav bar
            src="https://www.youtube.com/embed/LoWuvKiiLCQ"/>
            </div>
            <div>
                    <a className = {styles.title}>Clade</a>
                    <a className = {styles.category}>Community</a>
                    <a className = {styles.pitch}>Our goal with yo.yo. is to make it easier for people to ask other people for help and also lend others a helping hand. Crowd-sharing technology has shown that collaboration can be efficient, but has thus far involved treating others in terms of their usefulness. We want to encourage cooperation based upon person-person relationships, not buyer-seller.</a>
            </div>
        </div>

        <div className = {styles.box}>
            <div className = {styles.pics}>
            <img width={550} height={300} src="/congregate.png"></img>
            </div>
            <div>
                    <a className = {styles.title}>Congregate</a>
                    <a className = {styles.category}>Virtual Networking</a>
                    <a className = {styles.pitch}>Congregate is an online events platform that brings the spontaneity of in-person networking events and social gatherings online. Users can seamlessly jump between conversations, hear neighboring conversations, and get matched with attendees of similar interests.  </a>
            </div>
        </div>

        <div className = {styles.box}>
            <div className = {styles.pics}>
            <Iframe width="546.4"
            height="300" //790-40 from nav bar
            src="https://www.youtube.com/embed/F6MP7AGWbGo"/>
            </div>
            <div>
                    <a className = {styles.title}>To:gether Innovation</a>
                    <a className = {styles.category}>Community</a>
                    <a className = {styles.pitch}>We connect members of distanced communities, documenting and sharing personal experiences to bridge digital and physical spaces.</a>
            </div>
        </div>

        <div className = {styles.box}>
            <div className = {styles.pics}>
          <img width={550} height={300} src="/chat.png"></img>
            </div>
            <div>
                    <a className = {styles.title}>Remember </a>
                    <a className = {styles.category}>Personal Tools</a>
                    <a className = {styles.pitch}>All the conversations you have ever had organized by people. Searchable, with the most important information to someone’s identity identified and accessible. </a>
            </div>
        </div>

        <div className = {styles.box}>
            <div className = {styles.pics}>
            <img width={550} height={300} src="/relationship.jpg"></img>
            </div>
            <div>
                    <a className = {styles.title}>Kumo</a>
                    <a className = {styles.category}>Personal Tools</a>
                    <a className = {styles.pitch}>Kumo is on a mission to help busy people maintain and strengthen their relationships. Our premier product, Kumo Moments (mobile app), is a personal relationship manager that empowers users with recurring push notifications for frequent follow ups and interaction logging for continuity in conversation. </a>
            </div>
        </div>

        <div className = {styles.box}>
            <div className = {styles.pics}>
            <img width={550} height={300} src="/politichat.jpg"></img>
            </div>
            <div>
                    <a className = {styles.title}>Politichat</a>
                    <a className = {styles.category}>Political Tech</a>
                    <a className = {styles.pitch}>Politichat is a 1-on-1 video chatting platform designed for political campaigns to foster individual conversations between candidates and constituents.</a>
            </div>
        </div>

        <div className = {styles.box}>
            <div className = {styles.pics}>
            <img width={550} height={300} src="/library.jpg"></img>
            </div>
            <div>
                    <a className = {styles.title}>LibSpace</a>
                    <a className = {styles.category}>Community</a>
                    <a className = {styles.pitch}>We help students to quickly find a study space in libraries on campus without unnecessarily  looking around crowded halls only to realize that there are no more seats. Our goal is to use wifi access point data. (If we get such data, there are of course a bunch of other interesting use-cases to consider.)</a>
            </div>
        </div>

        <div className = {styles.box}>
            <div className = {styles.pics}>
            <Iframe width="546.4"
            height="300" //790-40 from nav bar
            src="https://www.youtube.com/embed/sUmALfhKj34"/>
            </div>
            <div>
                    <a className = {styles.title}>Toppings</a>
                    <a className = {styles.category}>Community</a>
                    <a className = {styles.pitch}>Toppings is a community-based on-the-way delivery app that combines existing social networks to offer free, accessible food/grocery delivery. Using friends, neighbors, and co-workers, Toppings allows for users to request from others who are already out shopping/eating and request items to be delivered back to them. While originally designed to provide an alternative to existing delivery apps on college campuses, due to the current crisis, the app will help coordinate COVID volunteers and communities with a built-in social networking, notification, and geo-tracking system. </a>
            </div>
        </div>

        <div className = {styles.box}>
            <div className = {styles.pics}>
            <img width={550} height={300} src="/fintech.jpg"></img>
            </div>
            <div>
                    <a className = {styles.title}>Forest Investing</a>
                    <a className = {styles.category}>FinTech</a>
                    <a className = {styles.pitch}>Forest Investing — what if money really could grow on trees? We're developing a new way of visualizing and gameifying the mobile investment experience. </a>
            </div>
        </div>

        <div className = {styles.box}>
            <div className = {styles.pics}>
            <Iframe width="546.4"
            height="300" //790-40 from nav bar
            src="https://www.youtube.com/embed/baldoRU_JA0"/>
            </div>
            <div>
                    <a className = {styles.title}>Stint</a>
                    <a className = {styles.category}>Networking, Gig Economy</a>
                    <a className = {styles.pitch}>We’re redefining the way students and companies connect through shorter, project-based stints with the aim of becoming the go-to destination for student freelancing.</a>
            </div>
        </div>

        <div className = {styles.box}>
            <div className = {styles.pics}>
          <img width={550} height={300} src="/lego.jpg"></img>
            </div>
            <div>
                    <a className = {styles.title}>Interlock</a>
                    <a className = {styles.category}>Hardware Engineering</a>
                    <a className = {styles.pitch}>Help us give birth to the unholy illegitimate child of Legos and ROKR/Ugears.</a>
            </div>
        </div>

        <div className = {styles.box}>
            <div className = {styles.pics}>
            <img width={550} height={300} src="/finary.jpg"></img>
            </div>
            <div>
                    <a className = {styles.title}>Finary</a>
                    <a className = {styles.category}>FinTech</a>
                    <a className = {styles.pitch}>Finary is an investing app where you can make trades, follow other investors, and learn about any investing topic in group forums. Our vision is a vibrant community of investors, new and old, who are constantly learning from each other and bringing their friends into the fold.</a>
            </div>
        </div>

        <div className = {styles.box}>
            <div className = {styles.pics}>
              <img width={550} height={300} src="/ed.jpg"></img>
            </div>
            <div>
                    <a className = {styles.title}>Q2</a>
                    <a className = {styles.category}>EdTech</a>
                    <a className = {styles.pitch}>A better Q Guide. A one-stop shop for course selection.</a>
            </div>
        </div>

        <div className = {styles.box}>
            <div className = {styles.pics}>
              <img width={550} height={300} src="/rocket.jpg"></img>
            </div>
            <div>
                    <a className = {styles.title}>Liquid Rocket Engine </a>
                    <a className = {styles.category}>Hardware Engineering</a>
                    <a className = {styles.pitch}>Designing a bi-propellant liquid rocket engine to take Harvard to Space!</a>
            </div>
        </div>




    </div>
    </>
</Layout>
  );
}
}
