import Layout from '../components/layout.js';
import styles from './index.module.css';
import { Element, animateScroll, Events } from 'react-scroll';
import Link from 'next/link'

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.fullTitleText = "Harvard Computer Society";
    this.titleTypeSpeed = 100;
    this.cursorBlinkSpeed = 500;
    this.numBlinks = 7;

    this.state = {
      titleText: "",
      showCursor: true,
      nextTitleIdx: 0,
      blinkCount: 0
    }
  }

  componentDidMount() {
    this.titleInterval = setInterval(() => {
      if(this.state.nextTitleIdx < this.fullTitleText.length) {
        let ch = this.fullTitleText.charAt(this.state.nextTitleIdx);
        this.setState({
          titleText: this.state.titleText + ch,
          nextTitleIdx: this.state.nextTitleIdx + 1
        });
      } else {
        clearInterval(this.titleInterval);
        this.titleInterval = setInterval(() => {
          if(this.state.blinkCount >= this.numBlinks) {
            clearInterval(this.titleInterval);

            // Scroll to news section if user hasn't scrolled yet
            animateScroll.scrollTo("test");
          } else {
            this.setState({
              showCursor: !this.state.showCursor,
              blinkCount: this.state.blinkCount + 1
            });
          }
        }, this.cursorBlinkSpeed);
      }
    }, this.titleTypeSpeed);
  }

  render() {
    return (
      <Layout>
        <div className={"animated fadeIn " + styles.landingimage}>
          <div className={styles.heading}>
            {this.state.titleText}<span style={{ display: this.state.showCursor ? "inline" : "none" }} className={styles.cursor}>&#9647;</span>
          </div>
        </div>
        <Element name="test">
          Content<br />
          Content<br />
          Content<br />
          Content<br />
          Content<br />
          Read <Link href="/faq"><a>FAQ!</a></Link>
        </Element>
      </Layout>
    );
  }
}
