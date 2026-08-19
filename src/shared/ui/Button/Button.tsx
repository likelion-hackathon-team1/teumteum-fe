import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost' | 'surface' | 'kakao';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type ButtonProps = React.ComponentProps<'button'> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  full?: boolean;
};

export function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  const classNames = [styles.btn, styles[size], styles[variant], full && styles.full, className]
    .filter(Boolean)
    .join(' ');

  return <button type={type} className={classNames} {...props} />;
}
