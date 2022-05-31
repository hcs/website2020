import Link from 'next/link'
import React from 'react';
import Layout from '../../components/layout.js';
import styles from './people.module.css';
import PeopleItem from './peopleitem.js';

//https://codepen.io/Nathanmc4pg/pen/rrEPEN?editors=1010

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);

    this.alexcheng = [
      {
        name: "Alex Cheng",
        pic: "headshots/Alex_Cheng_2021.jpg",
        bio: "No bio."
      }
    ];
    
    this.annawang = [
      {
        name: "Anna Wang",
        pic: "headshots/Anna_Wang_2021.jpg",
        bio: "No bio."
      }
    ];
    
    this.cynthiachen = [
      {
        name: "Cynthia Chen",
        pic: "headshots/Cynthia_2021.jpg",
        bio: "No bio."
      }
    ];
    
    this.davidhuang = [
      {
        name: "David Huang",
        pic: "headshots/David_Huang_2021.jpg",
        bio: "No bio."
      }
    ];

    this.dougyang = [
      {
        name: "Doug Yang",
        pic: "headshots/Doug_Yang_2022.jpg",
        bio: "No bio."
      }
    ];
    
    this.ericli = [
      {
        name: "Eric Li",
        pic: "headshots/eric_li_2021.jpg",
        bio: "No bio."
      }
    ];

    this.erictang = [
      {
        name: "Eric Tang",
        pic: "headshots/Eric_Tang_2022.JPG",
        bio: "No bio."
      }
    ];
    
    this.ericshen = [
      {
        name: "Eric Shen",
        pic: "headshots/Eric_Shen_2021.jpg",
        bio: "No bio."
      }
    ];
    
    this.ethanlee = [
      {
        name: "Ethan Lee",
        pic: "headshots/Ethan_Lee_2021.jpg",
        bio: "No bio."
      }
    ];

    this.ethanshaotran = [
      {
        name: "Ethan Shaotran",
        pic: "headshots/Ethan_Shaotran_2022.jpg",
        bio: "No bio."
      }
    ];
    
    this.haneulshin = [
      {
        name: "Haneul Shin",
        pic: "headshots/haneul_shin_2021.jpg",
        bio: "No bio."
      }
    ];
    
    this.isha = [
      {
        name: "Isha Sangani",
        pic: "headshots/isha_2021.jpg",
        bio: "No bio."
      }
    ];
    
    this.justinye = [
      {
        name: "Justin Ye",
        pic: "headshots/justin_ye_2021.jpg",
        bio: "No bio."
      }
    ];
    
    this.katherine = [
      {
        name: "Katherine McPhie",
        pic: "headshots/Katherine_2021.jpg",
        bio: "No bio."
      }
    ];

    this.kellyding = [
      {
        name: "Kelly Ding",
        pic: "headshots/Kelly_Ding_2022.jpg",
        bio: "No bio."
      }
    ];
    
    this.kelsey = [
      {
        name: "Kelsey Wu",
        pic: "headshots/Kelsey_2021.jpg",
        bio: "No bio."
      }
    ];
    
    this.laurenchen = [
      {
        name: "Lauren Chen",
        pic: "headshots/Lauren_Chen_2021.jpg",
        bio: "No bio."
      }
    ];
    
    this.maegan = [
      {
        name: "Maegan Jong",
        pic: "headshots/Maegan_2021.jpg",
        bio: "No bio."
      }
    ];

    this.matttengtrakool = [
      {
        name: "Matt Tengtrakool",
        pic: "headshots/Matt_Tengtrakool_2022.jpg",
        bio: "No bio."
      }
    ];

    this.michaelyoung = [
      {
        name: "Michael Young",
        pic: "headshots/Michael_Young_2022.jpg",
        bio: "No bio."
      }
    ];

    this.michaelzhao = [
      {
        name: "Michael Zhao",
        pic: "headshots/Michael_Zhao_2022.jpg",
        bio: "No bio."
      }
    ];
    
    this.rakesh = [
      {
        name: "Rakesh Nori",
        pic: "headshots/Rakesh_2021.jpg",
        bio: "No bio."
      }
    ];
    
    this.willcooper = [
      {
        name: "Will Cooper",
        pic: "headshots/will_cooper_2021.jpg",
        bio: "No bio."
      }
    ];
    
    this.ryankim = [
      {
        name: "Ryan Kim",
        pic: "headshots/ryan_kim_2021.jpg",
        bio: "No bio."
      }
    ];
    
    this.ericzhang = [
      {
        name: "Eric Zhang",
        pic: "headshots/Default_2021.jpg",
        bio: "No bio."
      }
    ];

    this.shreyasiyer = [
      {
        name: "Shreyas Iyer",
        pic: "headshots/Shreyas_Iyer_2022.jpg",
        bio: "No bio."
      }
    ];
    
    this.sophiaho = [
      {
        name: "Sophia Ho",
        pic: "headshots/Default_2021.jpg",
        bio: "No bio."
      }
    ];
    
    this.kevinmao = [
      {
        name: "Kevin Mao",
        pic: "headshots/Default_2021.jpg",
        bio: "No bio."
      }
    ];
    
    this.jasminehuang = [
      {
        name: "Jasmine Huang",
        pic: "headshots/Default_2021.jpg",
        bio: "No bio."
      }
    ];
   
    this.vassilios = [
      {
        name: "Vassilios Kaxiras",
        pic: "headshots/Vassilios.png",
        bio: "No bio."
      }
    ];
  }

  render() {
    return (
      <Layout>
        <div className={styles.wrap}>
          <div className={styles.imageWrap}>
            <span className={styles.title}>HCS Board</span>
          </div>
          <div className={styles.contentWrap}>
            <div className={styles.contact}><strong>Contact Us: hcs-board (at) hcs (.harvard.edu)</strong></div>
            <div className={styles.boxes}>
              <div className={styles.wrapper}>
                <h2 className={styles.h2}>President | <strong>Co-Presidents</strong></h2>
              </div>
              {this.maegan.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              {this.willcooper.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}

              <div className={styles.wrapper}>
                <h2 className={styles.h2}>Technology | <strong>Director of Technology</strong></h2>
              </div>
              {this.ethanshaotran.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}

              <div className={styles.wrapper}>
                <h2 className={styles.h2}>Education | <strong>Directors of Education</strong></h2>
              </div>
              {this.erictang.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              {this.shreyasiyer.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              
              <div className={styles.wrapper}>
                <h2 className={styles.h2}>Social Good | <strong>Director of Tech For Social Good</strong></h2>
              </div>
              {this.ericli.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              
              <div className={styles.wrapper}>
                <h2 className={styles.h2}>Product | <strong>Director of Product Lab</strong></h2>
              </div>
              {this.kelsey.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}

              <div className={styles.wrapper}>
                <h2 className={styles.h2}>Relations | <strong>Director of Relations</strong></h2>
              </div>
              {this.maegan.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              
              <div className={styles.wrapper}>
                <h2 className={styles.h2}>Events | <strong>Directors of Events</strong></h2>
              </div>
              {this.kellyding.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              {this.michaelzhao.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              
              <div className={styles.wrapper}>
                <h2 className={styles.h2}>Sponsorships | <strong>Director of Finance</strong></h2>
              </div>
              {this.dougyang.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              
              <div className={styles.wrapper}>
                <h2 className={styles.h2}>Design | <strong>Director of Design</strong></h2>
              </div>
              {this.justinye.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              
              <div className={styles.wrapper}>
                <h2 className={styles.h2}>Community | <strong>Director of Community</strong></h2>
              </div>
              {this.michaelyoung.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}

              <div className={styles.wrapper}>
                <h2 className={styles.h2}>DEI | <strong> Directors of Mentorship</strong></h2>
              </div>
              {this.haneulshin.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              {this.matttengtrakool.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
