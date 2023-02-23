import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel
} from '@faststore/ui'
import type { ForwardedRef } from 'react'
import { useEffect } from 'react'

import SubMenuItems from './SubMenuItems'
import { useMenu } from '../../../../sdk/menu/hooks/useMenu'


type Props = {
    categoryTree?: AnyLevel[]
    ref?: ForwardedRef<HTMLDivElement>
}

type AnyLevel = {
    name: string
    children?: AnyLevel[]
}

export default function SubMenu({ categoryTree, ref }: Props) {
    const { indices, onChange, onMouseEnter } = useMenu()

    useEffect (() => {
        return () => onChange!(0)
    }, [onChange])

    return (
        <>
          <Accordion indices={indices} onChange={onChange!}>
            {categoryTree?.map((category, index) => (
                <AccordionItem key={index} ref={ref}>
                    <AccordionButton onMouseEnter={onMouseEnter}>
                        {category.name}
                    </AccordionButton>
                    <AccordionPanel>
                        <SubMenuItems
                        data={category.children ? category.children : []}
                        />
                    </AccordionPanel>
                </AccordionItem>
            ))}

          </Accordion>
        </>
    )

}