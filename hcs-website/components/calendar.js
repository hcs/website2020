import styles from './calendar.module.css';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }

  renderEvent(e) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let day = days[(new Date(e.start.dateTime)).getDay()];

    return (
      <li className={styles.event}>
        <p className={styles.description}>
          {e.summary}
        </p>
        <div className={styles.date}>
          {day}
        </div>
      </li>
    );
  }

  render() {
    if(!this.props.events.length) return null;

    return (
      <div className={styles.calendar}>
        <h2 className={styles.calendarTitle}>Upcoming events</h2>
        <ul className={styles.calendarList}>
          {this.props.events.map(this.renderEvent)}
        </ul>
      </div>
    );
  }
}
