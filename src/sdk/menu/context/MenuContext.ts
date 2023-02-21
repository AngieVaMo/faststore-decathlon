import { createContext } from 'react'

export type MenuContextState = {
    indexList: number[]
    onChange?: (index: number) => void
    onMouseEnter?: (e: React.MouseEvent) => void
}

const defaultState: MenuContextState = {
    indexList: [0],
}

const MenuContext = createContext<MenuContextState>(defaultState)

export default MenuContext