import Layout from '../components/layout.js';
import Calendar from '../components/calendar.js';
import Subscribe from '../components/subscribe.js';
import Link from 'next/link';
import styles from './index.module.css';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.fullTitleText = ["Harvard", "Computer", "Society"];
    this.titleTypeSpeed = 100;
    this.cursorBlinkSpeed = 500;
    this.numBlinks = 7;

    this.newsData = [
      { title: "Updates to the Comp",
      body: "Due to situation posed by Covid-19, HCS comp this semester will look a little different than planned. Only 2 bootcamps out of 4 will be required to become a HCS member. See more information at the Comp page.",
      href: "/comp",
      action: "Comp" },

      { title: "Hosting on Harvard's Zoom",
      body: "You can access Harvard's Enterprise Zoom features by connecting through your HarvardKey. This allows you to host meetings with unlimited time and member allowance. We've realized a lot of people have been using free Zoom accounts, which have some annoying limits.",
      href: "https://harvard.zoom.us/",
      action: "Host" },

      { title: "Join HCS Slack",
      body: "Please join HCS Slack to receive important updates about HCS' community events, mentorship programs, bootcamp information, and CS internships/recruitment information.",
      href: "https://join.slack.com/t/hcs-community/shared_invite/zt-e22nxuja-GIpRC7asDmNw8IfLWqlFjg",
      action: "Join" },

      { title: "HCS community survey",
      body: "If you are a member, please take some time to fill out the following survey on the HCS Community. This survey should only take a few minutes to complete.",
      href: "https://forms.gle/kAorrhv5fEL7whEe7",
      action: "Join"},
    ];

    this.blocksData = [
      { text: "About us", color: "#AC3B61", html: this.getAbout, backgroundUrl: "/burg.jpg" },
      { text: "Get Involved", color: "#A47A69", html: this.getInvolved, backgroundUrl: "/community.png" },
      { text: "Account", color: "#123c69", html: this.getAccount, backgroundUrl: "/hcs_login.png" },
      { text: "Resources", color: "#5171A5", html: this.getResources }
    ];

    this.minTitleHeight = 550;

    this.state = {
      showCursor: true,
      titleWordIdx: 0,
      nextTitleIdx: 0,
      calendarOpacity: 0,
      bigImageOpacity: 0,
      newsOffset: 0,
      blinkCount: 0
    }
    this.moreNews = this.moreNews.bind(this);
    this.backNews = this.backNews.bind(this);
    this.resize = this.resize.bind(this);
    this.scroll = this.scroll.bind(this);
    this.newsItemWidth = 349;
  }

  getAbout() {
    let links = [
      { title: "Our Mission", href: "/" },
      { title: "Board", href: "/people" },
    ];
    return (
      <div>
        <div className={styles.aboutText}>
          Dedicated to promoting interest in computing and information technologies among members of the Harvard community
        </div>
        <div className={styles.accountList}>
          {links.map(item => (
            <Link href={item.href}><a className={styles.accountA}>{item.title}</a></Link>
          ))}
        </div>
      </div>
    );
  }

  getAccount() {
    let links = [
      { title: "Login", href: "/" },
      { title: "Mailing Lists", href: "/" }
    ];
    return (
      <div className={styles.accountList}>
        <div className={styles.resourcesText}>
          Make an account to request our free website hosting services, or sign in to your mailing list portal with your HarvardKey to make an email list.
        </div>
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
        <div className={styles.resourcesText}>
          Having trouble with your website or mailing list? Check out our guides!
        </div>
        {links.map(item => (
          <Link href={item.href}><a className={styles.accountA}>{item.title}</a></Link>
        ))}
      </div>
    );
  }

  getInvolved() {
    let links = [
      { title: "Sign up", href: "/comp" },
    ];
    return (
      <div>
        <h3 className={styles.involvedText}>
          Comp HCS!
        </h3>
        <div className={styles.accountList}>
          {links.map(item => (
            <Link href={item.href}><a className={styles.accountA}>{item.title}</a></Link>
          ))}
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scroll);
    window.addEventListener("resize", this.resize);
    setTimeout(() => {
      this.setState({
        bigimageOpacity: 1
      });
    });
    setTimeout(() => {
      this.titleInterval = setInterval(() => {
        if(this.state.nextTitleIdx < this.fullTitleText[this.state.titleWordIdx].length) {
          this.setState({
            nextTitleIdx: this.state.nextTitleIdx + 1
          });
        } else if(this.state.titleWordIdx < this.fullTitleText.length - 1) {
          this.setState({
            titleWordIdx: this.state.titleWordIdx + 1,
            nextTitleIdx: 0
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
    }, 100);
    this.calculateMaxNewsOffset();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scroll);
    window.addEventListener("resize", this.resize);
  }

  scroll() {
  }

  resize() {
    this.scroll();
    this.calculateMaxNewsOffset();
  }

  renderNewsCard(data) {
    return (
      <div className={styles.newsCard}>
        <div className={styles.newsCardTitle}>
          <h2 className={styles.newsTitle}>{data.title}</h2>
          <p className={styles.newsBody}>{data.body}</p>
          <Link href={data.href}><a className={styles.newsMore}>{data.action}</a></Link>
        </div>
      </div>
    );
  }

  renderBlock(data) {
    let style = { backgroundColor: data.color };
    if(data.backgroundUrl) {
      style = { backgroundImage: "url(" + data.backgroundUrl + ")" };
    }
    return (
      <div className={styles.block}>
        <div className={styles.blockBody} style={style}>
          <h4 className={styles.blockBodyP} style={data.textColor ? { color: data.textColor } : {}}>{data.text}</h4>
          <div className={styles.blockHtml}>
            {data.html ? data.html() : null}
          </div>
        </div>
      </div>
    );
  }

  calculateMaxNewsOffset() {
    if(this.newsData.length) {
      this.maxNewsOffset = this.newsData.length * this.newsItemWidth - this.newsItemWidth * Math.floor((Math.min(window.innerWidth - 40, 1580)) / this.newsItemWidth);
      this.setState({
        newsOffset: Math.max(this.state.newsOffset, -this.maxNewsOffset)
      });
    } else {
      this.maxNewsOffset = 0;
    }
  }

  moreNews() {
    if(this.state.newsOffset - this.newsItemWidth >= -this.maxNewsOffset) {
      this.setState({
        newsOffset: this.state.newsOffset - this.newsItemWidth
      });
    }
  }
  
  backNews() {
    this.setState({
      newsOffset: Math.min(this.state.newsOffset + this.newsItemWidth, 0)
    });
  }

  renderPreviousTitleWord(w) {
    return [
      w,
      <br />
    ]
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
          <div className={styles.bigimage} style={{ opacity: this.state.bigimageOpacity }}>
          </div>
          <div className={styles.heading}>
            <h1 className={styles.headingText}>
              {this.fullTitleText.slice(0, this.state.titleWordIdx).map(this.renderPreviousTitleWord)}
              {this.fullTitleText[this.state.titleWordIdx].substr(0, this.state.nextTitleIdx)}
              <span style={{ display: this.state.showCursor ? "inline" : "none" }} className={styles.cursor}>&#9647;</span>
            </h1>
          </div>
          <div className={styles.calendarWrap} style={calendarStyle}>
            <Calendar />
          </div>
        </div>
        <div className={styles.contentWrap}>
          <div className={styles.topStuff}>
            <h1 className={styles.largest}>Harvard's Largest CS Organization on Campus</h1>
          </div>
          <div className={styles.content}>
            <div className={styles.blocks}>
              {this.blocksData.map(this.renderBlock)}
            </div>
            <div className={styles.newsHeader}>
              <h1>News</h1>
            </div>
            <div className={styles.news}>
              <div className={styles.newsBackBar} style={{ opacity: this.state.newsOffset < 0 ? 1 : 0, visibility: this.state.newsOffset < 0 ? "visible" : "hidden"}} onClick={this.backNews}>
                <div className={styles.newsMoreBarButton}>
                  <img width={30} height={30} src="/chevron-back-outline.svg"></img>
                </div>
              </div>
              <div className={styles.newsMove} style={{ left: this.state.newsOffset + "px" }}>
                {this.newsData.map(this.renderNewsCard)}
              </div>
              <div className={styles.newsMoreBar} style={{ opacity: this.state.newsOffset > -this.maxNewsOffset ? 1 : 0, visibility: this.state.newsOffset > -this.maxNewsOffset ? "visible" : "hidden"}} onClick={this.moreNews}>
                <div className={styles.newsMoreBarButton}>
                  <img width={30} height={30} src="/chevron-forward-outline.svg"></img>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.subscribeWrap}>
            <Subscribe />
         </div>
        </div>
      </Layout>
    );
  }
}
