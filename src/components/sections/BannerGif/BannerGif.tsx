import { Banner, BannerImage, BannerLink } from '@faststore/ui'
import type { ReactNode } from 'react'
import { ButtonLink as BannerButton } from 'src/components/ui/Button'

import styles from './banner-gif.module.scss'

type Props = {
  imgDescription?: string
  url: any
  btnText: string
  href: string
  icon?: string
  classBanner?: string
  children?: ReactNode
}

function BannerGif({
  imgDescription,
  url,
  btnText,
  href,
  icon,
  classBanner,
  children,
}: Props) {
  return (
    <div>
      <Banner className={styles.fsBannerGif} data-fs-banner-gif={classBanner}>
        <div data-fs-banner-gif-img-link>
          <BannerImage data-fs-banner-gif-image>
            <img src={url.default} alt={imgDescription} />
          </BannerImage>
          <BannerLink data-fs-banner-gif-link>
            <BannerButton
              data-fs-banner-gif-link-button
              //  data-fs-banner-gif={classBanner}
              variant="primary"
              href={href}
              icon={icon}
            >
              {btnText}
            </BannerButton>
          </BannerLink>
        </div>
        {children}
      </Banner>
    </div>
  )
}

export default BannerGif
