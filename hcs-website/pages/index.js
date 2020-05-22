import Layout from '../components/layout.js';
import Calendar from '../components/calendar.js';
import Subscribe from '../components/subscribe.js';
import Link from 'next/link';
import styles from './index.module.css';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.fullTitleText = "Harvard Computer Society";
    this.titleTypeSpeed = 100;
    this.cursorBlinkSpeed = 500;
    this.numBlinks = 7;

    this.newsData = [
      { title: "Updates to the Comp", body: "Due to situation posed by Covid-19, HCS comp this semester will look a little different than planned. The changes are outlined below:", href: "/comp" },
      { title: "Hosting through Harvard's Zoom", body: "You can access Harvard's Enterprise Zoom features by connecting through your HarvardKey. This allows you to host meetings with unlimited time and member allowance. We've realized a lot of people have been using free Zoom accounts, which have some annoying limits.", href: "https://harvard.zoom.us/" }
    ];

    this.blocksData = [
      { text: "Account", color: "#bbf", html: this.getAccount },
      { text: "About us", color: "#eee", html: this.getAbout },
      { text: "Resources", color: "#ccc", html: this.getResources },
      { text: "BIP Program", color: "#fbb" }
    ];

    this.minTitleHeight = 550;

    this.state = {
      showCursor: true,
      nextTitleIdx: 0,
      calendarOpacity: 0,
      blinkCount: 0
    }
  }

  getAbout() {
    let links = [
      { title: "Our Mission", href: "/" },
      { title: "Board", href: "/" },
    ];
    return (
      <div className={styles.accountList}>
        {links.map(item => (
          <Link href={item.href}><a className={styles.accountA}>{item.title}</a></Link>
        ))}
      </div>
    );
  }

  getAccount() {
    let links = [
      { title: "Register", href: "/" },
      { title: "Login", href: "/" },
      { title: "Mailing Lists", href: "/" }
    ];
    return (
      <div className={styles.accountList}>
        {links.map(item => (
          <Link href={item.href}><a className={styles.accountA}>{item.title}</a></Link>
        ))}
      </div>
    );
  }

  getResources() {
    let links = [
      { title: "Tutorials", href: "/" },
      { title: "FAQ", href: "/" },
    ];
    return (
      <div className={styles.accountList}>
        <p className={styles.resourcesText}>Having trouble setting up or accessing your website or mailing list?</p>
        {links.map(item => (
          <Link href={item.href}><a className={styles.accountA}>{item.title}</a></Link>
        ))}
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scroll);
    window.addEventListener("resize", this.scroll);
    this.titleInterval = setInterval(() => {
      if(this.state.nextTitleIdx < this.fullTitleText.length) {
        this.setState({
          nextTitleIdx: this.state.nextTitleIdx + 1
        });
      } else {
        this.setState({
          calendarOpacity: 1
        });
        clearInterval(this.titleInterval);
        this.titleInterval = setInterval(() => {
          if(this.state.blinkCount >= this.numBlinks) {
            clearInterval(this.titleInterval);
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

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scroll);
    window.addEventListener("resize", this.scroll);
  }

  scroll = () => {
    if(window.scrollY < this.minTitleHeight) {
      this.setState({
        titleHeight: Math.max(window.innerHeight - window.scrollY, this.minTitleHeight),
      });
    }
  }

  renderNewsCard(data) {
    return (
      <div className={styles.newsCard}>
        <div className={styles.newsCardTitle}>
          <h2 className={styles.newsTitle}>{data.title}</h2>
          <p className={styles.newsBody}>{data.body}</p>
          <Link href={data.href}><a className={styles.newsMore}>Learn more</a></Link>
        </div>
      </div>
    );
  }

  renderBlock(data) {
    return (
      <div className={styles.block}>
        <div className={styles.blockBody} style={{ backgroundColor: data.color }}>
          <p className={styles.blockBodyP}>{data.text}</p>
          {data.html ? data.html() : null}
        </div>
      </div>
    );
  }

  render() {
    let calendarStyle = {
      opacity: this.state.calendarOpacity
    };
    if(this.state.calendarOpacity) {
      calendarStyle.transform = "translateY(0px)";
    }
    return (
      <Layout>
        <div className={styles.landingimage} style={{ height: this.state.titleHeight }}>
          <div className={styles.heading}>
            <div className={styles.headingText}>
              {this.fullTitleText.substr(0, this.state.nextTitleIdx)}
              <span style={{ display: this.state.showCursor ? "inline" : "none" }} className={styles.cursor}>&#9647;</span>
              <span style={{ opacity: 0 }}>{this.fullTitleText.substr(this.state.nextTitleIdx)}</span>
            </div>
          </div>
          <div className={styles.calendarWrap} style={calendarStyle}>
            <Calendar />
          </div>
        </div>
        <div className={styles.content}>
          <h1 className={styles.largest}>{"Harvard's Largest CS Organization on Campus"}</h1>
          <div className={styles.logoWrap}>
            <img className={styles.logo} width="200" height="auto" src="/logo.min.svg"></img>
          </div>
          <div className={styles.blocks}>
            {this.blocksData.map(this.renderBlock)}
          </div>
          <div className={styles.newsHeader}>
            <h1>News</h1>
          </div>
          <div className={styles.news}>
            {this.newsData.slice(0, 3).map(this.renderNewsCard)}
          </div>
          <div className={styles.subscribeWrap}>
            <Subscribe />
         </div>
        </div>
      </Layout>
    );
  }
}
