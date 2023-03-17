import { Link as UILink } from '@faststore/ui'

import styles from './link-tiendas.module.scss'

function LinkTiendas() {
  return (
    <UILink
      data-fs-link-tiendas
      className={`${styles.fsLink} ${'hidden-mobile'}`}
    >
      Tiendas
    </UILink>
  )
}

export default LinkTiendas
