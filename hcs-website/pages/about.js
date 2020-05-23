import Link from 'next/link'
import React from 'react';
import Layout from '../components/layout.js';
import styles from './about.module.css';
import Item from './faq/faqitem.js';
import Button from 'react-bootstrap/Button';

export default class About extends React.Component {
    constructor(props) {
      super(props);
      this.general = [
          {title: "Systems", body: <p>HCS runs the web server <Link href="/"><a>www.hcs.harvard.edu</a></Link>, and the mailing list server <Link href="lists.hcs.harvard.edu"><a>lists.hcs.harvard.edu</a></Link>. This means that most student groups on campus use our Linux machines to host their web sites and administer their email lists. More info on Systems can be found on the <Link href="/about/systems"><a>Systems page</a></Link>. Thanks to a recent grant from FAS IT, we've just spent over $30,000 completely rebuilding our systems from the ground up, which means we're now in a position to do lots of cool projects.</p>},
          {title: "Education", body: "The history of HCS dated back to 1983, making it older than most of our current members. HCS was founded to publish the Harvard Computer Review and Computing@Harvard. Fun fact: 2020 is the 20th anniversary of our mailing list service."},
          {title: "Account Services", body: "HCS is an incredibly tight-knit community that bonds throughout various community events. This semester, we ordered lots of delicious foods, including ramdon (Parasite), Shake Shack, Otto’s pizza, etc. Stay updated about our upcoming events where you can enjoy good foods and good company."},
          {title: "Speakers", body: "HCS reserves the right to terminate usage to any of its services at any time for any reason."},
          {title: "Advocacy for Good Computing at Harvard", body: "You can email HCS board! We appreciate your donation to support our various projects and our core mission. We can arrange for the donation to be tax-deductible, but please let us know in advance so we can channel it through the University."},
          {title: "Other Projects", body: "Builders Innovation Program is a brand new initiative launched by HCS this year. If you have an idea (doesn’t need to be a full-fledged idea) and need some funding to grow it, HCS got you covered. Apply by 5/15 to get equity-free grants ranging from $100 to $5000."},
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
        <div className={styles.wrap}>

          <h1 className = {styles.about}>About</h1>

          <div className="intro">
            <h2 className = {styles.subtitle}>What We Do</h2>
            <p className = {styles.container}>The Harvard Computer Society is a student-run organization at Harvard College that has been a "driving force" in the development and deployment of computers at Harvard since well before the fall of the Soviet Union (or the very least, we've met weekly to talk about computers and technology and eat pizza since at least 1983). We do whatever we're interested in (and, by proxy, whatever you're interested in, if you join us) but we have a number of ongoing and currently active projects that tend to consume our time. They're listed below: if any of them strike your fancy, come visit us! Want to start your own project? Pitch it to us and if we like what we hear, we would be happy to fund you! To apply click {' '}
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScAbm5yZn-aBaHtRvAnov-Z5fYGNNTfr5slvuO0mUw31-fhig/viewform"><a>here</a></Link>.
            </p>
          </div>

          <div className="projects">
            <h2 className = {styles.subtitle}>Projects</h2>
            {this.general.map(item => <Item title={item.title} body={item.body} />)};

            <p className = {styles.container}>HCS runs the web server {' '}
            <a href="/">www.hcs.harvard.edu</a>
            , and the mailing list server {' '}
            <a href="lists.hcs.harvard.edu">lists.hcs.harvard.edu</a>
            . This means that most student groups on campus use our Linux machines to host their web sites and administer their email lists. More info on Systems can be found on the {' '}
            <a href="/about/systems">Systems page</a>
            . Thanks to a recent grant from FAS IT, we've just spent over $30,000 completely rebuilding our systems from the ground up, which means we're now in a position to do lots of cool projects.
            </p>

            <h3 className = {styles.subtitle}>Education</h3>
            <p className = {styles.container}> HCS runs 4 programming bootcamps every semester, designed to teach new members a variety of tools and programming languages. These bootcamps provide an opportunity for students new to CS to learn some practical, hands-on tools that they can go on to use in their own projects or apps. Successful completion of 3 out of 4 of these bootcamps makes you an HCS member!
            </p>

            <h3 className = {styles.subtitle}>Account Services</h3>
            <p className = {styles.container}> All those student groups have accounts on our servers, and the Account Services team is the group of people that makes their user experience as pleasant as possible. Like helping people? Want a fun, easy way to put off doing your homework? Account Services might very well be your cup of tea.
            </p>

            <h3 className = {styles.subtitle}>Speakers</h3>
            <p className = {styles.container}> HCS often brings big-name speakers to campus. In 1993, we had Steve Ballmer for a visit. In the more recent past, we've had Steve Wozniak, Stephen Wolfram, Paul Graham, and Cory Doctorow. Most recently, we had Larry Wall, inventor of Perl. In general, we try to contact well-known people in the computer and technology sectors and bring them on campus to interact with students.
            </p>

            <h3 className = {styles.subtitle}>Advocacy for Good Computing at Harvard</h3>
            <p className = {styles.container}> Harvard is a great place with a great computer network, but its policies need to be mindful of students' fair access to computing resources while protecting their privacy and security. We keep an ongoing dialogue with the people in power on campus and we try and talk through policy changes with them to encourage transparency and student-friendly rules and regulations. We've also had an HCS member on the faculty oversight committee for information technology for many years now.
            </p>

            <h3 className = {styles.subtitle}>Other Projects</h3>
            <p className = {styles.container}> We work closely with a lot of organizations at Harvard to promote the visible use of advanced technology. Some of our more important collaborative projects {' '}
            <a href="/about/collaborations">receive credit here</a>
            . Other ideas? Just stop by. We're always looking for new project ideas.
            </p>
          </div>

          <div className="join">
          <h2 className = {styles.subtitle}>Like What You See?</h2>
          <p className = {styles.container}> Join us! You can join our weekly {' '}
          <a href="https://lists.hcs.harvard.edu/mailman/listinfo/hcs-announce">Announce mailing list</a>
          . Really want to get the whole vibe? Join our higher-traffic {' '}
          <a href="https://lists.hcs.harvard.edu/mailman/listinfo/hcs-discuss">discussion list</a>
          .</p>

          </div>
          </div>
        </Layout>
      );
    }
}
