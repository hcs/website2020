import Link from 'next/link'
import React from 'react';
import Layout from '../../components/layout.js';
import styles from './faq.module.css';

export default class FAQItem extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        open: false
      }
    }

    toggle = () => {
      this.setState({
        open: !this.state.open
      })
    }

    render () {
      return (
        //<div className = {styles.body}>
          <div className = {styles.container}>
            <div className = {styles.accordion}>
                <a>{this.props.title}</a>
                  <div className = {styles.content + (this.state.open ? " " + styles.active : "")}>
                    <p>{this.props.body}</p>
                  </div>
                <button onClick={() => this.toggle()}>+</button>
            </div>
          </div>
        //</div>
      )
    }
}
