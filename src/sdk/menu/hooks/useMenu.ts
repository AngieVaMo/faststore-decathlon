import { useContext } from 'react'

import type { MenuContextState } from '../context/MenuContext'
import MenuContext from '../context/MenuContext'

export const useMenu = () => {
  const context = useContext<MenuContextState>(MenuContext)

  if (context === undefined) {
    throw new Error('Do not use useDropdown hook outside the Dropdown context.')
  }

  return context
}