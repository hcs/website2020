import Link from 'next/link'
import React from 'react';
import Layout from '../../components/layout.js';
import styles from './people.module.css';
import PeopleItem from './peopleitem.js';

export default class PeoplePage extends React.Component {
    constructor(props) {
      super(props);
      this.data = [
          {name: "Teddy Lin", pic: "https://thumbs.dreamstime.com/b/cute-cartoon-sleeping-dog-shiba-inu-puppy-taking-power-nap-charging-battery-adorable-drawing-vector-illustration-160995959.jpg", bio: "This is Teddy"},
          {name: "Vassilios Kaxiras", pic: "https://thumbs.dreamstime.com/b/cute-cartoon-sleeping-dog-shiba-inu-puppy-taking-power-nap-charging-battery-adorable-drawing-vector-illustration-160995959.jpg", bio: "This is Vassilios"},
          {name: "Hanuel Shin", pic: "https://thumbs.dreamstime.com/b/cute-cartoon-sleeping-dog-shiba-inu-puppy-taking-power-nap-charging-battery-adorable-drawing-vector-illustration-160995959.jpg", bio: "This is Hanuel"}
      ];
    }

    render () {
      return(
        //<Layout>
          <div>
              <div className = {styles.wrapper}>
                <h2>Technology | <strong>Directors of Technology</strong></h2>
              </div>
              <div>
              {this.data.map(item => <PeopleItem name={item.name} pic={item.pic} bio={item.bio}/>)};
              </div>
          </div>
        //</Layout>
      );
    }
}
