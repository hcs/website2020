import styles from './calendar.module.css';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.events = [
      { start: new Date(2020, 1, 4, 5), end: new Date(2020, 1, 4, 6), name: "OCaml Bee: Presented by Jane Street" },
      { start: new Date(2020, 1, 5, 5), end: new Date(2020, 1, 4, 6), name: "Community Workshops" },
      { start: new Date(2020, 1, 6, 5), end: new Date(2020, 1, 4, 6), name: "Bootcamp #3" },
    ];
  }

  renderEvent(e) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let day = days[e.start.getDay()];

    return (
      <li className={styles.event}>
        <p className={styles.description}>
          {e.name}
        </p>
        <div className={styles.date}>
          {day}
        </div>
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
