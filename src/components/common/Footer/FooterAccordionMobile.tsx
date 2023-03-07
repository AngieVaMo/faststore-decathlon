import { useState } from 'react'
import Accordion, { AccordionItem } from 'src/components/ui/Accordion'
import Icon from 'src/components/ui/Icon'
import SROnly from 'src/components/ui/SROnly'

import styles from './footer.module.scss'

const FooterAccordionMobile = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [expandedIndices, setExpandedIndices] = useState([1])

  const onChange = () => {
    if (isExpanded) {
      setIsExpanded(false)
      setExpandedIndices([1])
    } else {
      setIsExpanded(true)
      setExpandedIndices([0])
    }
  }

  return (
    <section
    className={styles.fsFooter}
    data-fs-footer-links
    >
      <div className="display-mobile">
    <Accordion
    expandedIndices={expandedIndices}
    onChange={onChange}
    >
      <AccordionItem
      isExpanded={isExpanded}
      buttonLabel="MÉTODOS DE PAGO"
      >
        <ul
        data-fs-footer-payment-list
        >
          <li>
            <Icon width="65px" height="40px" name="Visa" />
            <SROnly text="Visa" />
          </li>
          <li>
            <Icon width="65px" height="40px" name="Mastercard" />
            <SROnly text="Mastercard" />
          </li>
          <li>
            <a href="/">
              Pasarela de pagos
            </a>
          </li>
        </ul>
      </AccordionItem>
    </Accordion>
    </div>
    </section>
  )
}

export default FooterAccordionMobile
