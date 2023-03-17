import { List as UIList } from '@faststore/ui'
import type { AnchorHTMLAttributes } from 'react'
import Link from 'src/components/ui/Link'
import { mark } from 'src/sdk/tests/mark'
import LinkUUnidades from 'src/components/ui/Link/LinkUUnidades/LinkUUnidades'

import styles from './navlinks.module.scss'

interface NavLinksProps {
  onClickLink?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick']
  classes?: string
}

const collections = [
  {
    name: 'Deportes',
    href: '/office',
  },
  {
    name: 'Mujer',
    href: '/kitchen---home-appliances',
  },
  {
    name: 'Hombre',
    href: '/computer---software',
  },
  {
    name: 'Niños y bebes',
    href: '/technology',
  },
  {
    name: 'Accesorios',
    href: '/technology',
  },
  {
    name: 'Colecciones',
    href: '/technology',
  },
]

function NavLinks({ onClickLink, classes = '' }: NavLinksProps) {
  return (
    <nav className={`${styles.fsNavlinks} ${classes}`}>
      <div className="layout__content">
        {/* <RegionalizationButton /> */}
        <UIList data-fs-navlinks-list>
          {collections.map(({ href, name }) => (
            <li key={name} data-fs-navlinks-list-item>
              <Link
                data-fs-navlinks-link
                variant="display"
                href={href}
                onClick={onClickLink}
              >
                {name}
              </Link>
            </li>
          ))}
        </UIList>
        <LinkUUnidades />
      </div>
    </nav>
  )
}

export default mark(NavLinks)
