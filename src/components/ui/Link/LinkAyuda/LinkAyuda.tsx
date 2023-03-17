import { Link as UILink } from '@faststore/ui'

import styles from './link-ayuda.module.scss'

function LinkAyuda() {
  return (
    <UILink
      data-fs-link-ayuda
      className={`${styles.fsLink} ${'hidden-mobile'}`}
    >
      Ayuda
    </UILink>
  )
}

export default LinkAyuda
