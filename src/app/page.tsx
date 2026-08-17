import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>틈틈</h1>
        </div>
      </main>
    </div>
  );
}
