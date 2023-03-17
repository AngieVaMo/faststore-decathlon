import type { ButtonHTMLAttributes } from 'react'
import { useImperativeHandle, forwardRef, useRef, useState } from 'react'
import { Icon } from '@faststore/ui'
import type { IconProps } from '@faststore/ui'

import { useDropdown } from './hooks/useDropdown'

export interface DropdownItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * ID to find this component in testing tools (e.g.: cypress, testing library, and jest).
   */
  testId?: string
  /**
   * A React component that will be rendered as an icon.
   */
  icon?: IconProps['component']
}

const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(
  function Button(
    { children, icon, onClick, testId = 'fs-dropdown-item', ...otherProps },
    ref
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { dropdownItemsRef, selectedDropdownItemIndexRef } = useDropdown()

    const [dropdownItemIndex, setDropdownItemIndex] = useState(0)
    const dropdownItemRef = useRef<HTMLButtonElement>()

    const addToRefs = (el: HTMLButtonElement) => {
      if (el && !dropdownItemsRef?.current.includes(el)) {
        dropdownItemsRef?.current.push(el)
        setDropdownItemIndex(
          dropdownItemsRef?.current.findIndex((element) => element === el) ?? 0
        )
      }

      dropdownItemRef.current = el
    }

    const onFocusItem = () => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      selectedDropdownItemIndexRef!.current = dropdownItemIndex
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      dropdownItemsRef?.current[selectedDropdownItemIndexRef!.current]
      // ?.focus()
    }

    // const handleOnClickItem = (
    //   event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    // ) => {
    //   onClick?.(event)
    //   close?.()
    // }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    useImperativeHandle(ref, () => dropdownItemRef.current!, [])

    return (
      <button
        data-fs-dropdown-item
        data-testid={testId}
        ref={addToRefs}
        onFocus={onFocusItem}
        onMouseEnter={onFocusItem}
        // onClick={handleOnClickItem}
        role="menuitem"
        tabIndex={-1}
        data-index={dropdownItemIndex}
        {...otherProps}
      >
        {icon && <Icon data-fs-dropdown-item-icon component={icon} />}
        {children}
      </button>
    )
  }
)

export default DropdownItem
