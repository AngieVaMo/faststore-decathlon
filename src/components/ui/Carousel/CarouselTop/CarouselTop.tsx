// import type { PropsWithChildren } from 'react'
// import type { SwipeableProps } from 'react-swipeable'
// import { Carousel as UICarousel } from '@faststore/ui'
// //import type { CarouselProps } from '@faststore/ui'


// export interface CarouselProps extends SwipeableProps {
//     /**
//      * ID of the current instance of the component.
//      */
//     id?: string
//     /**
//      * ID to find this component in testing tools (e.g.: cypress, testing library, and jest).
//      */
//     testId?: string
//     /**
//      * Returns the value of element's class content attribute.
//      */
//     className?: string
//     /**
//      * Whether or not the Carousel is infinite slide/scroll. Only for the `slide` variant.
//      * @default true
//      */
//     infiniteMode?: boolean
//     /**
//      * Specifies which navigation elements should be visible.
//      * @default complete
//      */
//     controls?: 'complete' | 'navigationArrows' | 'paginationBullets'
//     /**
//      * Specifies the slide transition. Only for the `slide` variant
//      */
//     transition?: {
//       duration: number
//       property: string
//       delay?: number
//       timing?: string
//     }
//     /**
//      * Specifies the number of items per page.
//      * @default 1
//      */
//     itemsPerPage?: number
//     /**
//      * Specifies the Carousel track variant.
//      * @default slide
//      */
//     variant?: 'slide' | 'scroll'
//     /**
//      * Specifies the navigation icons.
//      */
//     // navigationIcons?: {
//     //   left?: ReactNode
//     //   right?: ReactNode
//     // }
// }


// function CarouselTop (
//     {
//         infiniteMode = true,
//         //controls = 'complete',
//         //testId = 'store-carousel',
//         transition = {
//           duration: 400,
//           property: 'transform',
//         },
//         children,
//         className,
//         id = 'store-carousel',
//         variant = 'slide',
//         itemsPerPage = 1,
//         //navigationIcons = undefined,
//         ...swipeableConfigOverrides
//       }: PropsWithChildren<CarouselProps>
// ) {
//     return (
//         <UICarousel
//         data-fs-carousel
//         >
//             <span>¡Haz seguimiento de tu pedido aquí!</span>
//             <span>¡Revisa nuestra guía de tallas aquí!</span>
//         </UICarousel>
//     )

// }


// export default CarouselTop