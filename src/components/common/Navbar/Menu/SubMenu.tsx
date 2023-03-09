import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@faststore/ui'
import type { ForwardedRef } from 'react'
import { useEffect } from 'react'

import SubMenuItems from './SubMenuItems'
import { useMenu } from '../../../../sdk/menu/hooks/useMenu'

type Props = {
  categoryTree?: Category[]
  ref?: ForwardedRef<HTMLDivElement>
}

type Category = {
  name: string
  children?: Category[]
}

export default function SubMenu({ categoryTree, ref }: Props) {
  const { indices, onChange, onMouseEnter } = useMenu()

  // {console.log("CATEGORY: ", categoryTree)}

  useEffect(() => {
    return () => onChange!(0)
  }, [])

  return (
    <>
      <Accordion indices={indices} onChange={onChange!} data-fs-menu-accordion>
        {categoryTree?.map((category, index) => (
          <>
            <AccordionItem
              data-fs-accordion-index={index}
              index={index}
              key={index}
              ref={ref}
            >
              <AccordionButton data-fs-menu-accordionButton>
                {category.name}
              </AccordionButton>
              <AccordionPanel data-fs-menu-accordionPanel>
                <SubMenuItems
                  data={category.children ? category.children : []}
                />
              </AccordionPanel>
            </AccordionItem>
          </>
        ))}
      </Accordion>
    </>
  )
}
