//import { Suspense } from 'react'
import Button, {
  ButtonSignIn,
  ButtonSignInFallback,
} from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'
import Link from 'src/components/ui/Link'
import LinkUUnidades from 'src/components/ui/Link/LinkUUnidades/LinkUUnidades'
import LinkNuestrasTiendas from 'src/components/ui/Link/LinkNuestrasTiendas'
//import Logo from 'src/components/ui/Logo'
import SlideOver from 'src/components/ui/SlideOver'
import { mark } from 'src/sdk/tests/mark'
import { useUI } from 'src/sdk/ui/Provider'
import { useFadeEffect } from 'src/sdk/ui/useFadeEffect'

import styles from './navbar-slider.module.scss'
import NavLinks from './NavLinks'

function NavbarSlider() {
  const { closeNavbar } = useUI()
  const { fade, fadeOut } = useFadeEffect()

  return (
    <SlideOver
      isOpen
      fade={fade}
      onDismiss={fadeOut}
      size="full"
      direction="leftSide"
      className={styles.fsNavbarSlider}
      onTransitionEnd={() => fade === 'out' && closeNavbar()}
    >
      <div data-fs-navbar-slider-left>
        <header data-fs-navbar-slider-header>
          <Link
            href="/"
            onClick={fadeOut}
            aria-label="Go to FastStore home"
            title="Go to FastStore home"
            data-fs-navbar-slider-logo
          >
            {/* <Logo /> */}
            <Icon name="User" width={22} height={22} weight="bold" />
            <p>Inicia sesión para unirte</p>
          </Link>
        </header>
        <div data-fs-navbar-slider-content>
          <NavLinks onClickLink={fadeOut} />
        </div>
        <footer data-fs-navbar-slider-footer>
          {/* <Suspense fallback={<ButtonSignInFallback />}>
          <ButtonSignIn />
        </Suspense> */}
          <LinkNuestrasTiendas />
        </footer>
      </div>
      <Button
        data-fs-navbar-slider-button
        aria-label="Close Menu"
        icon={<Icon name="X" width={25} height={25} />}
        onClick={fadeOut}
      />
    </SlideOver>
  )
}

export default mark(NavbarSlider)
