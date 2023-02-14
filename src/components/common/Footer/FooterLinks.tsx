import { useState } from 'react'
import { List as UIList } from '@faststore/ui'
import Link from 'src/components/ui/Link'
import Accordion, { AccordionItem } from 'src/components/ui/Accordion'

import styles from './footer.module.scss'

const links = [
  {
    title: 'DECATHLON EMPRESA',
    items: [
      {
        href: '/',
        name: 'Donathlon',
      },
      {
        href: '/',
        name: 'Innovación',
      },
      {
        href: '/',
        name: 'Decathlon Sostenibilidad',
      },
      {
        href: '/',
        name: 'Fundación',
      },
      {
        href: '/',
        name: 'Decathlon Internacional',
      },
      {
        href: '/',
        name: 'Trabaja con Nosotros',
      }
    ],
  },
  {
    title: 'COMPRA',
    items: [
      {
        href: '/',
        name: 'Métodos de Entrega',
      },
      {
        href: '/',
        name: 'Términos y condiciones fin de temporada',
      },
      {
        href: '/',
        name: 'Facturación Electrónica',
      },
      {
        href: '/',
        name: 'Política de Privacidad',
      },
      {
        href: '/',
        name: 'Términos y Condiciones',
      },
      {
        href: '/',
        name: 'Recoge en Tienda',
      },
      {
        href: '/',
        name: 'Guia de Tallas',
      },
      {
        href: '/',
        name: 'Términos y condiciones de venta intermediaria',
      },
      {
        href: '/',
        name: 'Términos y condiciones de recompra',
      },
      {
        href: '/',
        name: 'Tarjeta de Regalo',
      }
    ],
  },
  {
    title: 'POST COMPRA',
    items: [
      {
        href: '/',
        name: 'Aviso de Seguridad',
      },
      {
        href: '/',
        name: 'Política de Devoluciones',
      },
      {
        href: '/',
        name: 'Derecho de Retracto',
      },
      {
        href: '/',
        name: 'SIC',
      },
    ],
  },
  {
    title: 'EXPERIENCIA DECATHLON',
    items: [
      {
        href: '/',
        name: 'Preguntas Frecuentes',
      },
      {
        href: '/',
        name: 'DECAPRO',
      },
      {
        href: '/',
        name: 'Tiendas',
      },
      {
        href: '/',
        name: 'Club Decathlon',
      },
      {
        href: '/',
        name: 'Mi cuenta',
      },
      {
        href: '/',
        name: 'Decathlon Actividades',
      }
    ],
  },
]

type LinkItem = {
  href: string
  name: string
}

interface LinksListProps {
  items: LinkItem[]
}

function LinksList({ items }: LinksListProps) {
  return (
    <UIList>
      {items.map((item) => (
        <li key={item.name}>
          <Link variant="footer" href={item.href}>
            {item.name}
          </Link>
        </li>
      ))}
    </UIList>
  )
}

function FooterLinks() {
  const [indicesExpanded, setIndicesExpanded] = useState<Set<number>>(
    new Set([])
  )

  const onChange = (index: number) => {
    if (indicesExpanded.has(index)) {
      indicesExpanded.delete(index)
      setIndicesExpanded(new Set(indicesExpanded))
    } else {
      setIndicesExpanded(new Set(indicesExpanded.add(index)))
    }
  }

  return (
    <section className={styles.fsFooter} data-fs-footer-links>
      <div className="display-mobile">
        <Accordion expandedIndices={indicesExpanded} onChange={onChange}>
          {links.map((section, index) => (
            <AccordionItem
              key={section.title}
              isExpanded={indicesExpanded.has(index)}
              buttonLabel={section.title}
            >
              <LinksList items={section.items} />
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="hidden-mobile">
        <nav data-fs-footer-links-columns>
          {links.map((section) => (
            <div key={section.title}>
              <p data-fs-footer-title>{section.title}</p>
              <LinksList items={section.items} />
            </div>
          ))}
        </nav>
      </div>
    </section>
  )
}

export default FooterLinks
