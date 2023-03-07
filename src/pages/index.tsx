import 'src/styles/pages/homepage.scss'

import { graphql } from 'gatsby'
import { GatsbySeo, JsonLd } from 'gatsby-plugin-next-seo'
import { mark } from 'src/sdk/tests/mark'
import type { PageProps } from 'gatsby'
import type { HomePageQueryQuery } from '@generated/graphql'
import RenderPageSections from 'src/components/cms/RenderPageSections'
import { getCMSPageDataByContentType } from 'src/cms/client'
import type { ContentData } from '@vtex/client-cms'
import { useSession } from 'src/sdk/session'
import Newsletter from 'src/components/sections/Newsletter'
import BannerGif from 'src/components/sections/BannerGif/BannerGif'
import LinksSection from 'src/components/sections/LinksSection/LinksSection'
import LinksSectionJson from 'src/components/sections/LinksSection/LinksSectionJson.json'
import ImgSection from 'src/components/sections/ImgSection/ImgSection'
import imgSectionJson from 'src/components/sections/ImgSection/imgSectionJson.json'
//import homeBanner from 'src/images/homeBanner.gif'

export type Props = PageProps<
  HomePageQueryQuery,
  unknown,
  unknown,
  { cmsHome: ContentData }
>

function Page(props: Props) {
  const {
    data: { site },
    serverData: { cmsHome },
  } = props

  const { locale } = useSession()

  const title = site?.siteMetadata?.title ?? ''
  const siteUrl = `${site?.siteMetadata?.siteUrl}`

  {console.log('index', cmsHome)}
  return (
    <>
      {/* SEO */}
      <GatsbySeo
        title={title}
        description={site?.siteMetadata?.description ?? ''}
        titleTemplate={site?.siteMetadata?.titleTemplate ?? ''}
        language={locale}
        canonical={siteUrl}
        openGraph={{
          type: 'website',
          url: siteUrl,
          title: title ?? '',
          description: site?.siteMetadata?.description ?? '',
        }}
      />
      <JsonLd
        json={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: siteUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}/s/?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        }}
      />

      {/*
        WARNING: Do not import or render components from any
        other folder than '../components/sections' in here.

        This is necessary to keep the integration with the CMS
        easy and consistent, enabling the change and reorder
        of elements on this page.

        If needed, wrap your component in a <Section /> component
        (not the HTML tag) before rendering it here.
      */}

      <RenderPageSections sections={cmsHome?.sections} />
      <BannerGif
      url= {require('../../static/homeBanner.gif')}
      btnText='Descubre más'
      href='/'
      classBanner='1'
      />
      <BannerGif
      url= {require('../../static/spotify.gif')}
      btnText='¡Dale play!'
      href='/'
      classBanner='2'
      />
      <BannerGif
      url= {require('../../static/ows.gif')}
      btnText='Compra aquí'
      href='/'
      classBanner='3'
      />
      <LinksSection
      textArray={LinksSectionJson}
      />
      <ImgSection
      infoArray={imgSectionJson}
      />
      <Newsletter
        title="Get News and Special Offers!"
        description="Receive our news and promotions in advance. Enjoy and get 10% off your first purchase. For more information click here."
      />
    </>
  )
}

export const querySSG = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
        titleTemplate
        siteUrl
      }
    }
  }
`

export async function getServerData() {
  const ONE_YEAR_CACHE = `s-maxage=31536000, stale-while-revalidate`

  const cmsHome = await getCMSPageDataByContentType('home')

  return {
    status: 200,
    props: { cmsHome },
    headers: {
      'cache-control': ONE_YEAR_CACHE,
      'content-type': 'text/html',
    },
  }
}

Page.displayName = 'Page'
export default mark(Page)
