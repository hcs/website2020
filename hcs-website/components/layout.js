import Head from 'next/head';

import styles from './layout.module.css';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        { href: "/", title: "Home" },
        { href: "/about-us", title: "About", right: true, subitems: [
          { href: "/about-us", title: "About us" },
          { href: "/faq", title: "FAQ" },
          { href: "/sponsors", title: "Sponsors" }
        ] }
      ]
    };
  }

  mouseChange = (index, val) => {
    let links = [ ...this.state.links ];
    links[index].expand = val;
    this.setState({
      links: links
    });
  }

  renderNavSubitems = (link) => {
    return (
      <ul className={styles.navSubList}>
        {link.subitems.map((item, index) =>
          <li key={"subitem" + index} className={styles.navListSubLi}>
            <Link href={item.href}>
              <a className={styles.navSubListA}>{item.title}</a>
            </Link>
          </li>
        )}
      </ul>
    );
  }

  renderNavItem = (link, index) => {
    return (
      <li
        key={"item" + index}
        onMouseEnter={() => { this.mouseChange(index, true) }}
        onMouseLeave={() => { this.mouseChange(index, false) }}
        className={styles.navListLi + (link.right ? (" " + styles.navListLiRight) : "")}
      >
        <Link href={link.href}>
          <a className={styles.navListA}>{link.title}</a>
        </Link>
        {(link.expand && link.subitems) ? this.renderNavSubitems(link) : null}
      </li>
    );
  }

  render() {
    return (
      <div className={styles.main}>
        <Head>
          <title>Harvard Computer Society</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.nav}>
          <ul className={styles.navList}>
            {this.state.links.map(this.renderNavItem)}
          </ul>
        </div>
        {this.props.children}
        <div className={styles.footer}>
          &copy; Harvard Computer Society 2020.
        </div>
      </div>
    );
  }

}
