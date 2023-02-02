import { Link as UILink } from '@faststore/ui'

import styles from '../link.module.scss'


function LinkAyuda (){
    return(
        <UILink
        data-fs-link
        className={`${styles.fsLink} ${'hidden-mobile'}`}
        >
            Ayuda
        </UILink>
    )

}

export default LinkAyuda