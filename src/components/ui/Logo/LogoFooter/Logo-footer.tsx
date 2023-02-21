import styles from './logo-footer.module.scss'

function LogoFooter() {
  return (
    <span
      className={styles.fsLogoFooter}
      data-fs-logo-footer
      role="img"
      aria-label="BaseStore logo footer"
    />
  )
}

export default LogoFooter
