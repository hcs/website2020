import styles from './calendar.module.css';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }

  renderEvent(e) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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
    if(!this.props.events.length) {
      return (
        <div className={styles.calendar}>
          <div className={styles.calendarTitle}>
            <a target="_blank" href="https://calendar.google.com/calendar/embed?src=college.harvard.edu_annqsl3ki6c5pnhom50vc6uq0o%40group.calendar.google.com&ctz=America%2FNew_York">HCS Calendar</a>
          </div>
          <ul className={styles.calendarList}>
            <li className={styles.event}>
              <p className={styles.description}>
                No upcoming events
              </p>
            </li>
          </ul>
        </div>
     );
    }

    return (
      <div className={styles.calendar}>
        <div className={styles.calendarTitle}>
          <a target="_blank" href="https://calendar.google.com/calendar/embed?src=college.harvard.edu_annqsl3ki6c5pnhom50vc6uq0o%40group.calendar.google.com&ctz=America%2FNew_York">HCS Calendar</a>
        </div>
        <ul className={styles.calendarList}>
          {this.props.events.map(this.renderEvent)}
        </ul>
      </div>
    );
  }
}
