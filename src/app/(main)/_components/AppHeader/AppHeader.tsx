import Image from 'next/image';
import styles from './AppHeader.module.css';

export function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logoRow}>
        <Image src="/logo-192.png" alt="틈틈" width={34} height={34} className={styles.logo} />
        <span className={styles.name}>틈틈</span>
      </div>
    </header>
  );
}
