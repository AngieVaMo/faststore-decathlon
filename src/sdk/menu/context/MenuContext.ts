import { createContext } from 'react'

export type MenuContextState = {
  indices: number[]
  onChange?: (index: number) => void
  onMouseEnter?: (e: React.MouseEvent) => void
}

const defaultState: MenuContextState = {
  indices: [0],
}

const MenuContext = createContext<MenuContextState>(defaultState)

export default MenuContext
