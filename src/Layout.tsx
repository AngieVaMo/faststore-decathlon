import { lazy, Suspense } from 'react'
//import Alert from 'src/components/common/Alert'
//import CarouselTop from 'src/components/ui/Carousel/CarouselTop/CarouselTop'
//import CarouselProps from 'src/components/ui/Carousel/CarouselTop/CarouselTop'
import Footer from 'src/components/common/Footer'
import Navbar from 'src/components/common/Navbar'
import Toast from 'src/components/common/Toast'
//import RegionalizationBar from 'src/components/regionalization/RegionalizationBar'
import { useUI } from 'src/sdk/ui/Provider'
import type { PropsWithChildren } from 'react'

import 'src/styles/pages/layout.scss'

const CartSidebar = lazy(() => import('src/components/cart/CartSidebar'))
const RegionModal = lazy(
  () => import('src/components/regionalization/RegionalizationModal')
)

function Layout({ children }: PropsWithChildren) {
  const { cart: displayCart, modal: displayModal } = useUI()

  return (
    <>
      {/* <Alert icon="Bell" link={{ text: 'Buy now', to: '/office' }} dismissible>
        Get 10% off today:&nbsp;<span>NEW10</span>
      </Alert> */}

      {/* <CarouselTop /> */}

      <Navbar />

      <Toast />

      <main>
        {/* <RegionalizationBar classes="display-mobile" /> */}
        {children}
      </main>

      <Footer />

      {displayCart && (
        <Suspense fallback={null}>
          <CartSidebar />
        </Suspense>
      )}

      {displayModal && (
        <Suspense fallback={null}>
          <RegionModal />
        </Suspense>
      )}
    </>
  )
}

export default Layout
