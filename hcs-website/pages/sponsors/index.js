import Layout from '../../components/layout.js';
import Link from 'next/link';
import styles from './sponsors.module.css';

export default class Sponsors extends React.Component {
  constructor(props) {
    super(props);
    this.sponsors = [
      { name: "Gold", sponsors: [
        { name: "Jane Street", url: "/jane_street.png" },
      ] },
      { name: "Silver", sponsors: [
        { name: "Microsoft", url: "/microsoft_0.png" }, 
        { name: "Huawei", url: "/huawei.png" }
      ] },
      { name: "Bronze", sponsors: [
        { name: "Bloomberg", url: "/Bloomberg.png" },
        { name: "Uber", url: "/uber.png" },
        { name: "Kensho", url: "/kensho.png" },
        { name: "Facebook", url: "/facebook.png" },
        { name: "Capital One", url: "/capital_one.png" },
        { name: "Google", url: "/google.png" }
      ] }
    ];
    this.renderSponsor = this.renderSponsor.bind(this);
    this.renderSponsorGroup = this.renderSponsorGroup.bind(this);
  }

  renderSponsor(sponsor) {
    return (
      <div className={styles.sponsor}>
        <img className={styles.image} src={sponsor.url} />
      </div>
    );
  }

  renderSponsorGroup(group) {
    return (
      <div className={styles.group + " " + styles[group.name.toLowerCase()]}>
        <h3 className={styles.groupTitle}>{group.name}</h3>
        <div className={styles.sponsorsList}>
          {group.sponsors.map(this.renderSponsor)}
        </div>
      </div>
    );
  }

  render() {
    return (
      <Layout>
        <h2 className={styles.title}>2020-21 Sponsors</h2>
        <div className={styles.wrap}>
          {this.sponsors.map(this.renderSponsorGroup)}
        </div>
      </Layout>
    );
  }
}
