import styles from './calendar.module.css';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.events = [
      { start: new Date(2020, 1, 4, 5), end: new Date(2020, 1, 4, 6) },
      { start: new Date(2020, 1, 5, 5), end: new Date(2020, 1, 4, 6) },
      { start: new Date(2020, 1, 6, 5), end: new Date(2020, 1, 4, 6) },
    ];
  }

  renderEvent(e) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let day = days[e.start.getDay()];

    return (
      <li className={styles.event}>
        <div className={styles.date}>
          {day}
        </div>
        <p className={styles.description}>
          OCaml Bee, brought to you by Jane Street!
        </p>
      </li>
    );
  }

  render() {
    return (
      <div className={styles.calendar}>
        <h2 className={styles.calendarTitle}>Upcoming events</h2>
        <ul className={styles.calendarList}>
          {this.events.map(this.renderEvent)}
        </ul>
      </div>
    );
  }
}
