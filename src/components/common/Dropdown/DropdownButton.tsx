import React, { forwardRef, useImperativeHandle } from 'react'
import { Button } from '@faststore/ui'
import type { ButtonProps } from '@faststore/ui'

import { useDropdown } from './hooks/useDropdown'

export interface DropdownButtonProps
  extends Omit<ButtonProps, 'variant' | 'inverse'> {
  /**
   * ID to find this component in testing tools (e.g.: cypress, testing library, and jest).
   */
  testId?: string
}

const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>(
  function DropdownButton(
    { children, testId = 'fs-dropdown-button', ...otherProps },
    ref
  ) {
    const { toggle, dropdownButtonRef, isOpen, id } = useDropdown()

    useImperativeHandle(ref, () => dropdownButtonRef!.current!, [
      dropdownButtonRef,
    ])

    return (
      <Button
        data-fs-dropdown-button
        onMouseEnter={toggle}
        onMouseOut={toggle}
        data-testid={testId}
        ref={dropdownButtonRef}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls={id}
        {...otherProps}
      >
        {children}
      </Button>
    )
  }
)

export default DropdownButton
