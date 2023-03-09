import type { ReactNode } from 'react'
import { useMemo, useState } from 'react'

import MenuContext from 'src/sdk/menu/context/MenuContext'

export type MenuProps = {
  children: ReactNode
  indices?: number[]
}

export default function Menu({
  children,
  indices: indicesDefault = [0],
}: MenuProps) {
  const [indices, setIndices] = useState<number[]>(indicesDefault)

  const onChange = (index: number): void => {
    // const indice: HTMLElement[] = Array.from(
    //     document.querySelectorAll('button [data-accordion-button]')
    // )
    setIndices([index >= 0 ? index : indices[0]])
    console.log('INDICE: ', index)
  }

  // const onMouseEnter = (e: React.MouseEvent): void => {

  //    // console.log("INDICE", indice)

  //     onChange(indice.indexOf(e.target as HTMLElement))
  // }

  const value = useMemo(() => {
    return {
      indices,
      onChange,
      //onMouseEnter,
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indices])

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}
