import { Banner, BannerImage, BannerLink } from '@faststore/ui'

import styles from './img-section.module.scss'

type Props = {
  infoArray: Element[]
}

type Element = {
  url: string
  href: string
  alt?: string
}

export default function ImgSection({ infoArray }: Props) {
  return (
    <Banner className={styles.fsImgSection} data-fs-img-section>
      {infoArray?.map(({ url, href, alt }, index) => (
        <BannerLink key={index} data-fs-img-section-item>
          <a href={href}>
            <BannerImage>
              <img src={url} alt={alt} />
            </BannerImage>
          </a>
        </BannerLink>
      ))}
    </Banner>
  )
}
