import Link from 'src/components/ui/Link'

import styles from './links-section.module.scss'

type Props = {
  textArray: Element[]
}

type Element = {
  name: string
  href: string
}

// const textList = [
//   {
//     name: "MÉTODOS DE ENTREGA",
//     href: "/"
//   },
//   {
//     name: "ACTIVIDADES",
//     href: "/"
//   },
//   {
//     name: "VENTAS CORPORATIVAS",
//     href: "/"
//   },
//   {
//     name: "TRABAJA CON NOSOTROS",
//     href: "/"
//   },
//   {
//     name: "INSTAGRAM",
//     href: "/"
//   }
// ]

function LinksSection ({ textArray }: Props) {
  return (
    <div
    className={`${styles.fsLinksSection} ${'hidden-mobile'}`}
    >
      <div
       data-fs-links-section-container
      >
      {textArray.map(({name, href}) => (
      <>
        <Link
          href={href}
          data-fs-links-section-items
        >
          {name}
        </Link>
      </>

      ))}

    </div>
    </div>
  )
}
export default LinksSection
