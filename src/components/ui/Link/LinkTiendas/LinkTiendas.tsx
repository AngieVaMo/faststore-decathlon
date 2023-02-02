import { Link as UILink } from '@faststore/ui'

import styles from '../link.module.scss'

function LinkTiendas (){
    return(
        <UILink
        data-fs-link
        className={`${styles.fsLink} ${'hidden-mobile'}`}
        >
            Tiendas
        </UILink>
    )

}

export default LinkTiendas