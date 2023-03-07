import { Banner, BannerImage, BannerLink } from '@faststore/ui'
import { ButtonLink as BannerButton } from 'src/components/ui/Button'

import styles from './banner-gif.module.scss'

type Props = {
    imgDescription?: string
    url : any
    btnText: string
    href: string
    icon?: string
    classBanner?: string
}

function BannerGif ({imgDescription, url, btnText, href, icon, classBanner}: Props) {
    console.log("GIF: ", url)
    return (
        <Banner
          className={styles.fsBannerGif1}
        >
            <BannerImage data-fs-banner-gif-image>
                <img src={url.default} alt={imgDescription} />
            </BannerImage>
            <BannerLink data-fs-banner-gif-link>
                <BannerButton
                 data-fs-banner-gif-link-button
                //  data-fs-banner-gif={classBanner}
                 variant='primary'
                 href={href}
                 icon={icon}
                >
                    {btnText}
                </BannerButton>
            </BannerLink>
        </Banner>
    )
}

export default BannerGif
