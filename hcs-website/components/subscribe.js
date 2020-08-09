import styles from './subscribe.module.css';

export default class Subscribe extends React.Component {
  constructor(props) {
    super(props);

    this.lists = [
      "Announcements",
      "Discussion",
      "Jobs",
      "Questions"
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
      <div className={styles.button + " " + (this.state.selected.indexOf(list) !== -1 ? styles.selected : "") } onClick={() => this.select(list)}>
        <div className={styles.checkList} />
        <div className={styles.listText}>{list}</div>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.content}>
          <h1 className={styles.title}>Subscribe</h1>
          {this.lists.map(this.renderList)}
          <br />
          <br />
          <form>
            <input placeholder={"Your email"} className={styles.inputText} required type="email" />
            <input type="submit" className={styles.submit} value="Submit"></input>
          </form>
        </div>
      </div>
    );
  }
}
