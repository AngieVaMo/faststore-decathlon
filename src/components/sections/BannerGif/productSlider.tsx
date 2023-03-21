import Slider from 'react-slick'
import ProductCard from 'src/components/product/ProductCard'
import { useProductsQuery } from 'src/sdk/product/useProductsQuery'
import type { ProductsQueryQueryVariables } from '@generated/graphql'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function ProductSlider({
  first,
  term,
}: Partial<ProductsQueryQueryVariables>) {
  const products = useProductsQuery({
    first,
    term,
  })

  const productEdges = products?.edges ?? []

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    // cssEase: 'linear',
    useCSS: true,
    className: 'ProductSlider',
  }

  return (
    <div data-fs-banner-gif-slider>
      <h2>Entrena sin excusas al ritmo de nuestra playlist</h2>
      <Slider {...settings} data-fs-banner-gif-slider-container>
        {productEdges.map((product, idx) => (
          <div key={`${product.node.id}`} data-fs-banner-gif-slider-item>
            <ProductCard product={product.node} index={idx + 1} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
