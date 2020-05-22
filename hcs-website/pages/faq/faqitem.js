import Link from 'next/link'
import React from 'react';
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
        <div>
          <button onClick={() => this.toggle()}>Expand</button>
          <div>{this.props.title}</div>
          <div>{this.props.body}</div>
        </div>
      )
    }
}
