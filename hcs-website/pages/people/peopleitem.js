import Link from 'next/link'
import React from 'react';
import Layout from '../../components/layout.js';
import styles from './people.module.css';

export default class PeopleItem extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
                <div className = {styles.box}>
                    <div className = {styles.pics}>
                        <img src={this.props.pic}></img>
                    </div>
                    <div className = {styles.personalintro}>
                            <a className = {styles.name}>{this.props.name}</a>
                            <a className = {styles.bio}>{this.props.bio}</a>
                    </div>
                 </div>
      )
    }
}
