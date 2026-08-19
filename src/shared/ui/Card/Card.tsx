import styles from './Card.module.css';

type CardVariant = 'sm' | 'bright' | 'primary' | 'stable' | 'attention' | 'danger';

type CardProps = React.ComponentProps<'section'> & {
  variant?: CardVariant;
};

export function Card({ variant, className, ...props }: CardProps) {
  const classNames = [styles.card, variant && styles[variant], className].filter(Boolean).join(' ');

  return <section className={classNames} {...props} />;
}
