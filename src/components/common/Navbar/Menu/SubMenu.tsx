import { CategoryTree } from '@faststore/api/dist/platforms/vtex/clients/commerce/types/CategoryTree'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanlel,
} from '@faststore/ui'
import { ForwardedRef } from 'react'


type Props = {
    categoryTree?: AnyLevel[]
    ref?: ForwardedRef<HTMLDivElement>
}

type AnyLevel = {
    name: string
    children?: AnyLevel[]
}