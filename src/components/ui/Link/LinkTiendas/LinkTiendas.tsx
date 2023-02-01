import { Link as UILink } from '@faststore/ui'

import styles from '../link.module.scss'

function LinkTiendas (){
    return(
        <UILink
        data-fs-link
        className={styles.fsLink}
        >
            Tiendas
        </UILink>
    )

}

export default LinkTiendas