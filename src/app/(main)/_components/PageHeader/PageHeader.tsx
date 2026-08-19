import styles from './PageHeader.module.css';

type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className={styles.pageHeader}>
      <p className={`tt-heading-md ${styles.title}`}>{title}</p>
      {description && <p className="tt-body-sm tt-text-muted">{description}</p>}
    </div>
  );
}
