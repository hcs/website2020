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
      <button className={styles.button} type="button">{list}</button>
    );
  }

  render() {
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Subscribe</h1>
        {this.lists.map(this.renderList)}
        <input className={styles.inputText} type={"text"} />
      </div>
    );
  }
}
