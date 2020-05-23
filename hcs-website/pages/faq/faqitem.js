import Link from 'next/link'
import React from 'react';
import styles from './faq.module.css';

//can we add expand all collapse all

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
        <div className = {styles.container}>
          <div className = {styles.accordion}>
              <a onClick={this.toggle} className={this.state.open ? styles.active : ""}>{this.props.title}</a>
                <div className = {styles.content + (this.state.open ? " " + styles.active : "")}>
                  <p>{this.props.body}</p>
                </div>
          </div>
        </div>

      )
    }
}
