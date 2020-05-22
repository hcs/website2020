import Link from 'next/link'
import React from 'react';
import Layout from '../../components/layout.js';
import styles from './people.module.css';
import PeopleItem from './peopleitem.js';

//https://codepen.io/Nathanmc4pg/pen/rrEPEN?editors=1010

export default class PeoplePage extends React.Component {
    constructor(props) {
      super(props);
      this.president = [
          {name: "Manasi Maheshawari",
          pic: "https://thumbs.dreamstime.com/b/cute-cartoon-sleeping-dog-shiba-inu-puppy-taking-power-nap-charging-battery-adorable-drawing-vector-illustration-160995959.jpg",
          bio: "Manasi hasn't submitted her bio"},

          {name: "Andrea Zhang",
          pic: "https://thumbs.dreamstime.com/b/cute-cartoon-sleeping-dog-shiba-inu-puppy-taking-power-nap-charging-battery-adorable-drawing-vector-illustration-160995959.jpg",
          bio: "Andrea is a sophomore in Kirkland studying Applied Math/English. She hails from the lovely land of Basking Ridge, NJ. Besides HCS, she loves planning events for her house with HoCo and singing with the Radcliffe Choral Society."}
      ];

      this.tech = [
          {name: "Vassilios Kaxiras",
          pic: "https://thumbs.dreamstime.com/b/cute-cartoon-sleeping-dog-shiba-inu-puppy-taking-power-nap-charging-battery-adorable-drawing-vector-illustration-160995959.jpg",
          bio: "Vassilios hasn't submitted his bio."},

          {name: "Teddy Lin",
          pic: "https://thumbs.dreamstime.com/b/cute-cartoon-sleeping-dog-shiba-inu-puppy-taking-power-nap-charging-battery-adorable-drawing-vector-illustration-160995959.jpg",
          bio: "Teddy is a first-year student from Taiwan studying Computer Science and Economics. He lived in Wigglesworth last year and he'll live in Eliot for the next three years (hopefully). Besides HCS, he is involved in Harvard College Film Festival (HCFF) and Harvard Student Agencies (HSA). In his free time, he loves watching documentaries about financial scandals (aka Dirty Money), playing ping pong, learning foreign languages, and hanging out with friends. His favorite foods in the square are Jefe's burrito and Santouka ramen."},

          {name: "Hanuel Shin",
          pic: "https://thumbs.dreamstime.com/b/cute-cartoon-sleeping-dog-shiba-inu-puppy-taking-power-nap-charging-battery-adorable-drawing-vector-illustration-160995959.jpg",
          bio: "Haneul is a first-year student from New Jersey studying Computer Science and Mathematics. She’s excited to be living in Winthrop for the next three years. Other than serving as a Director of Technology for HCS, Haneul is involved in HackHarvard, the Harvard-MIT Mathematics Tournament, and Harvard Gender Inclusivity in Math. When she’s not doing work, you can find her playing bridge, taking walks along the river, and playing foosball with friends!"}
      ]

      this.business = [
          {name: "Ryan Kim",
          pic: "https://thumbs.dreamstime.com/b/cute-cartoon-sleeping-dog-shiba-inu-puppy-taking-power-nap-charging-battery-adorable-drawing-vector-illustration-160995959.jpg",
          bio: "Ryan is a junior in Mather originally from Fayetteville, Arkansas studying Computer Science and Bioengineering. Besides HCS, he is the Co-President of the Harvard Tech Review and entrenched within the Harvard entrepreneurship scene. In his free time, he loves trying the latest dance trends, learning new languages, coming up with new investment theses, and staying up to date with the latest tech trends. His absolute favorite in the square is Le's!"},

          {name: "Mike Bao",
          pic: "https://thumbs.dreamstime.com/b/cute-cartoon-sleeping-dog-shiba-inu-puppy-taking-power-nap-charging-battery-adorable-drawing-vector-illustration-160995959.jpg",
          bio: "Mike hasn't submitted his bio."}

      ]

      this.education = [
          {name: "William Cooper",
          pic: "https://thumbs.dreamstime.com/b/cute-cartoon-sleeping-dog-shiba-inu-puppy-taking-power-nap-charging-battery-adorable-drawing-vector-illustration-160995959.jpg",
          bio: "Will is a first-year (or sophomore?) planning on studying applied math and computer science. He lived in Stoughton South last year and will live in Kirkland house for the next three years. He also plays ice hockey and tennis, and sings in the University Choir. In his spare time, he loves watching hockey and tennis, playing piano, and hanging out for a good time. His favorite scent is a freshly opened can of tennis balls."},

          {name: "Mark Pekala",
          pic: "https://thumbs.dreamstime.com/b/cute-cartoon-sleeping-dog-shiba-inu-puppy-taking-power-nap-charging-battery-adorable-drawing-vector-illustration-160995959.jpg",
          bio: "Mark is a first-year student from the wonderful town of Minneapolis, MN studying Computer Science and living in Eliot House. He has an irrational fear of writing about himself in the third person. Outside of HCS, Mark spends his time crafting digital pranks as Technology Chair of Satire V and promoting security as Secretary of Defense of the Harvard College Stand Up Comic Society. He used to be really into running until he messed up his knee, and now spends a lot of time watching SNL and going for long bike rides. If found, please return Mark to Minneapolis for a $200 reward."}
      ]

      this.relations = [
          {name: "Ethan Lee",
          pic: "https://thumbs.dreamstime.com/b/cute-cartoon-sleeping-dog-shiba-inu-puppy-taking-power-nap-charging-battery-adorable-drawing-vector-illustration-160995959.jpg",
          bio: "Ethan is a first-year student from Needham, MA planning to study Computer Science and Statistics. He lived in Pennypacker as a first-year and will live as a fish of Cabot for the next three years. He is also involved in the Harvard Crimson, Harvard Open Data Project, Datamatch, and Satire V. In his free time, he loves watching Tottenham games (especially the ones where Tottenham win), trying to make music, and reading scary stories. His favorite foods are Felipe's nachos and CVS Cheez-its."},

          {name: "Maegan Jong",
          pic: "https://thumbs.dreamstime.com/b/cute-cartoon-sleeping-dog-shiba-inu-puppy-taking-power-nap-charging-battery-adorable-drawing-vector-illustration-160995959.jpg",
          bio: "Maegan is a first-year student from the Chicagoland area who will be living in Kirkland! She plans to study Statistics and Computer Science. Outside of HCS, Maegan is involved in Women Engineers Code (WECode) and Harvard Undergraduate Capital Partners (HUCP). When she's not doing classwork, you can catch Maegan dancing with Asian American Dance Troupe (AADT), taking nature walks, and exploring Boston with friends."}
      ]

      this.community = [
          {name: "Anna Wang",
          pic: "https://thumbs.dreamstime.com/b/cute-cartoon-sleeping-dog-shiba-inu-puppy-taking-power-nap-charging-battery-adorable-drawing-vector-illustration-160995959.jpg",
          bio: "Anna is a sophomore in Cabot studying Computer Science. She is from Redmond, WA and loves the west coast, nature, and hiking, especially in the summertime. She is also a part of the Datamatch business team and loves spreading the love and community on campus. Anna has had past industry internships at Microsoft and Uber, and is currently exploring the world of tech start-ups as well. She has a huge weakness for snacks, teas, and boba, and has even learned how to make bubble tea from within her dorm room!"},
      ]
    }

    render () {
      return(
        //<Layout>
          <div>
              <div className = {styles.wrapper}>
                <h2 className = {styles.h2}>President | <strong>Presidents</strong></h2>
              </div>
              <div>
              {this.president.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio}/>)};
              </div>

              <div className = {styles.wrapper}>
                <h2 className = {styles.h2}>Technology | <strong>Directors of Technology</strong></h2>
              </div>
              <div>
              {this.tech.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio}/>)};
              </div>

              <div className = {styles.wrapper}>
                <h2 className = {styles.h2}>Business | <strong>Directors of Business</strong></h2>
              </div>
              <div>
              {this.business.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio}/>)};
              </div>

              <div className = {styles.wrapper}>
                <h2 className = {styles.h2}>Education | <strong>Directors of Education</strong></h2>
              </div>
              <div>
              {this.education.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio}/>)};
              </div>

              <div className = {styles.wrapper}>
                <h2 className = {styles.h2}>Relations | <strong>Directors of Relations</strong></h2>
              </div>
              <div>
              {this.relations.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio}/>)};
              </div>

              <div className = {styles.wrapper}>
                <h2 className = {styles.h2}>Community | <strong>Director of Community</strong></h2>
              </div>
              <div>
              {this.community.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio}/>)};
              </div>
          </div>
        //</Layout>
      );
    }
}
