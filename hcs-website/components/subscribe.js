import styles from './subscribe.module.css';

export default class Subscribe extends React.Component {
  constructor(props) {
    super(props);

    this.lists = [
      { title: "Announcements", href: "https://lists.hcs.harvard.edu/mailman/listinfo/hcs-announce" },
      { title: "Discussion", href: "https://lists.hcs.harvard.edu/mailman/listinfo/hcs-discuss" },
      { title: "Jobs", href: "https://lists.hcs.harvard.edu/mailman/listinfo/hcs-jobs" },
      { title: "Questions", href: "https://lists.hcs.harvard.edu/mailman/listinfo/hcs-questions" },
    ];
    this.state = {
      selected: []
    };
    this.renderList = this.renderList.bind(this);
  }

  select(l) {
    const idx = this.state.selected.indexOf(l);
    if(idx === -1) {
      this.setState({
        selected: [ ...this.state.selected, l ]
      });
    } else {
      this.setState({
        selected: [ ...this.state.selected.slice(0, idx), ...this.state.selected.slice(idx + 1) ]
      });
    }
  }

  renderList(list) {
    return (
      <div className={styles.button/* + " " + (this.state.selected.indexOf(list) !== -1 ? styles.selected : "") */} onClick={/*() => this.select(list)*/null}>
        <a target="_blank" className={styles.listText} href={list.href}>{list.title}</a>
      </div>
    );
//        <div className={styles.checkList} />
  }

  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.content}>
          <h1 className={styles.title}>Subscribe</h1>
          {this.lists.map(this.renderList)}
        </div>
      </div>
    );
    /*
          <br />
          <br />
          <form>
            <input placeholder={"Your email"} className={styles.inputText} required type="email" />
            <input type="submit" className={styles.submit} value="Submit"></input>
          </form>
          */
  }
}
