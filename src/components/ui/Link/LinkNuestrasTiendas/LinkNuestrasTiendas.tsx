import { Link as UILink } from '@faststore/ui'

import styles from './link-nuestras-tiendas.module.scss'

function LinkNuestrasTiendas (){
    return(
        <UILink
        data-fs-link-nuestras-tiendas
        className={`${styles.fsLink} ${'hidden-mobile'}`}
        >
            Nuestras Tiendas
        </UILink>
    )

}

export default LinkNuestrasTiendas