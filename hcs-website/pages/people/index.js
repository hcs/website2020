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
    
    this.ericli = [
      {
        name: "Eric Li",
        pic: "headshots/eric_li_2021.jpg",
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
              {this.annawang.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              {this.ryankim.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}

              <div className={styles.wrapper}>
                <h2 className={styles.h2}>Technology | <strong>Directors of Technology</strong></h2>
              </div>
              {this.vassilios.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              {this.sophiaho.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}

              <div className={styles.wrapper}>
                <h2 className={styles.h2}>Entrepreneurship | <strong>Directors of Entrepreneurship</strong></h2>
              </div>
              {this.rakesh.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              {this.cynthiachen.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}

              <div className={styles.wrapper}>
                <h2 className={styles.h2}>Education | <strong>Directors of Education</strong></h2>
              </div>
              {this.willcooper.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              {this.ericzhang.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              
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
                <h2 className={styles.h2}>Recruiting | <strong>Director of Recruiting</strong></h2>
              </div>
              {this.alexcheng.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              
              <div className={styles.wrapper}>
                <h2 className={styles.h2}>Events | <strong>Directors of Events</strong></h2>
              </div>
              {this.davidhuang.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              {this.ericshen.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              
              <div className={styles.wrapper}>
                <h2 className={styles.h2}>Sponsorships | <strong>Directors of Sponsorships</strong></h2>
              </div>
              {this.kevinmao.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              {this.laurenchen.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              
              <div className={styles.wrapper}>
                <h2 className={styles.h2}>Design | <strong>Director of Design</strong></h2>
              </div>
              {this.justinye.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              
              <div className={styles.wrapper}>
                <h2 className={styles.h2}>Community | <strong>Directors of Community</strong></h2>
              </div>
              {this.jasminehuang.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              {this.isha.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              
              <div className={styles.wrapper}>
                <h2 className={styles.h2}>Membership | <strong>Associate Director of Membership</strong></h2>
              </div>
              {this.katherine.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              
              <div className={styles.wrapper}>
                <h2 className={styles.h2}>DEI | <strong>Associate Directors of Diversity + Inclusion</strong></h2>
              </div>
              {this.haneulshin.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
              {this.ethanlee.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio} />)}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
