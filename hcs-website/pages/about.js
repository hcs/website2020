import Link from 'next/link'
import React from 'react';
import Layout from '../components/layout.js';
import styles from './about.module.css';
import Item from './faq/faqitem.js';
import Button from 'react-bootstrap/Button';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.projects = [
      { title: "Systems", body: <p>HCS runs the web server <Link href="/"><a>www.hcs.harvard.edu</a></Link>, and the mailing list server <Link href="http://lists.hcs.harvard.edu"><a>lists.hcs.harvard.edu</a></Link>. This means that most student groups on campus use our Linux machines to host their web sites and administer their email lists. Thanks to a recent grant from FAS IT, we've just spent over $30,000 completely rebuilding our systems from the ground up, which means we're now in a position to do lots of cool projects.</p> },
      { title: "Education", body: "HCS runs 4 programming bootcamps every semester, designed to teach new members a variety of tools and programming languages. These bootcamps provide an opportunity for students new to CS to learn some practical, hands-on tools that they can go on to use in their own projects or apps. Successful completion of 3 out of 4 of these bootcamps makes you an HCS member!" },
      { title: "Account Services", body: "All those student groups have accounts on our servers, and the Account Services team is the group of people that makes their user experience as pleasant as possible. Like helping people? Want a fun, easy way to put off doing your homework? Account Services might very well be your cup of tea." },
      { title: "Speakers", body: "HCS often brings big-name speakers to campus. In 1993, we had Steve Ballmer for a visit. In the more recent past, we've had Steve Wozniak, Stephen Wolfram, Paul Graham, and Cory Doctorow. Most recently, we had Larry Wall, inventor of Perl. In general, we try to contact well-known people in the computer and technology sectors and bring them on campus to interact with students." },
      {
        title: "Other Projects", body: <p>We work closely with a lot of organizations at Harvard to promote the visible use of advanced technology. Some of our more important collaborative projects {' '} <a href="/about/collaborations">receive credit here</a>. Other ideas? Just stop by. We're always looking for new project ideas.</p>
      },
      {
        title: "Advocacy for Good Computing at Harvard", body: <p>Harvard is a great place with a great computer network, but its policies need to be mindful of students' fair access to computing resources while protecting their privacy and security. We keep an ongoing dialogue with the people in power on campus and we try and talk through policy changes with them to encourage transparency and student-friendly rules and regulations. We've also had an HCS member on the faculty oversight committee for information technology for many years now. This summer, HCS launched the Builders Incubation Program, a three month initiative from June to August providing a virtual community for remote collaboration on any form of project. See <Link href="/bip"><a>here</a></Link> for more info.</p>
      },
    ];

  }

  render() {
    return (
      <Layout>
        <div className={styles.wrap}>

          <h1 className={styles.about}>About</h1>

          <div className="intro">
            <h2 className={styles.subtitle}>What We Do</h2>
            <p className={styles.container}>The Harvard Computer Society is a student-run organization at Harvard College that has been a driving force in the development and deployment of computers at Harvard since well before the fall of the Soviet Union (or at the very least, we've met weekly to talk about computers and technology and eat pizza since at least 1983). We do whatever we're interested in (and, by proxy, whatever you're interested in, if you join us) but we have a number of ongoing and currently active projects that tend to consume our time. They're listed below: if any of them strike your fancy, come visit us! Want to start your own project? Pitch it to us and if we like what we hear, we would be happy to fund you! To apply click {' '}
              <Link href="docs.google.com/forms/d/e/1FAIpQLScAbm5yZn-aBaHtRvAnov-Z5fYGNNTfr5slvuO0mUw31-fhig/viewform"><a>here</a></Link>.
            </p>
          </div>

          <div className="projects">
            <h2 className={styles.subtitle}>Projects</h2>
            {this.projects.map(item => <Item title={item.title} body={item.body} />)};
          </div>

          <div className="join">
            <h2 className={styles.subtitle}>Like What You See?</h2>
            <p className={styles.container}> Join us! You can join our weekly {' '}
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
