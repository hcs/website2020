import Link from 'next/link'
import React from 'react';
import Layout from '../../components/layout.js';
import styles from './people.module.css';

export default class PeopleItem extends React.Component {
    constructor(props) {
      super(props);
    }

    render () {
      return (

        <div className = {styles.container}>
            <div className = {styles.employeeswrapper}>

                <div className = {styles.employeepics}>
                  <div className = {styles.picframe} style={{ background: "url(" + this.props.pic + ")" }}>
                  </div>
                </div>

                <div className = {styles.employeelist}>
                  <ul>
                    <li>
                        <a className = {styles.name}>{this.props.name}<span className = {styles.jobtitle}>{this.props.avatar}</span>
                        </a>
                        <a className = {styles.bio}>{this.props.bio}<span className = {styles.jobtitle}></span>
                        </a>
                    </li>
                  </ul>
                </div>

            </div>
          </div>

      )
    }
}
