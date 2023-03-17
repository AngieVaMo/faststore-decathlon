import { Banner, BannerImage, BannerContent, BannerLink } from '@faststore/ui'

import styles from './banner-img-text.module.scss'

type Props = {
  bannerInfo: Item[]
}

type Item = {
  imgDescription?: string
  url: string
  href: string
  content: string
}

function BannerImgText({ bannerInfo }: Props) {
  return (
    <Banner className={styles.fsBannerImgText}>
      {bannerInfo?.map(({ imgDescription, url, href, content }, index) => (
        <div key={index}>
          <BannerLink data-fs-banner-img-text-link>
            <a href={href}>
              <BannerImage data-fs-banner-img-text-i>
                <img src={url} alt={imgDescription} />
              </BannerImage>
            </a>
          </BannerLink>
          <BannerContent data-fs-banner-img-text-t>
            <span>{content}</span>
          </BannerContent>
        </div>
      ))}
    </Banner>
  )
}

export default BannerImgText
