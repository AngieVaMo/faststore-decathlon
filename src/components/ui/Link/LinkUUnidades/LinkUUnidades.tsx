import { Link as UILink } from '@faststore/ui'

import styles from './link-uunidades.module.scss'

function LinkUUnidades() {
  return (
    <UILink
      data-fs-navlinks-link
      data-fs-link-uunidades
      className={`${styles.fsLink} ${'hidden-mobile'}`}
    >
      Últimas Unidades
    </UILink>
  )
}

export default LinkUUnidades
