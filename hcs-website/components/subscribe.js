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
  }

  renderList(list) {
    return (
      <div className={styles.button}>
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
          <input placeholder={"Your email"}className={styles.inputText} type={"text"} />
          <button className={styles.submit}>Submit</button>
        </div>
      </div>
    );
  }
}
