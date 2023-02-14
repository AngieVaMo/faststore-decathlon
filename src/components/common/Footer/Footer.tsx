import {
  List as UIList,
  PaymentMethods as UIPaymentMethods,
} from '@faststore/ui'
//import Logo from 'src/components/ui/Logo'
import LogoFooter from 'src/components/ui/Logo/LogoFooter'
import IncentivesFooter from 'src/components/sections/Incentives/IncentivesFooter'
import Icon from 'src/components/ui/Icon'
import Link from 'src/components/ui/Link'
import SROnly from 'src/components/ui/SROnly'
import { mark } from 'src/sdk/tests/mark'

import styles from './footer.module.scss'
import FooterLinks from './FooterLinks'

type FooterProps = {
  /**
   * Enables Incentives Section
   */
  sectionIncentives?: boolean
  /**
   * Enables Social Section
   */
  sectionSocial?: boolean
  /**
   * Enables Payment Methods Section
   */
  sectionPaymentMethods?: boolean
}

export function Footer({
  sectionIncentives = true,
  sectionSocial = true,
  sectionPaymentMethods = true,
}: FooterProps) {
  return (
    <footer
      data-fs-footer
      data-fs-footer-incentives={sectionIncentives}
      data-fs-footer-social={sectionSocial}
      data-fs-footer-payment-methods={sectionPaymentMethods}
      className={`${styles.fsFooter} layout__content-full`}
    >
      {sectionIncentives && <IncentivesFooter />}
      <div data-fs-footer-promises>
        <div>

        </div>
        
      </div>

      <div data-fs-footer-nav className="layout__content">
        <FooterLinks />
      </div>

      <div data-fs-footer-note className="layout__content">
      
        {sectionSocial && (
          <section data-fs-footer-social>
            <p data-fs-footer-title>SÍGUENOS EN</p>
            <UIList variant="unordered">
              <li>
                <Link
                  variant="footer"
                  href="https://www.facebook.com/"
                  title="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon width="30px" height="30px" name="Facebook" />
                </Link>
              </li>
              <li>
                <Link
                  variant="footer"
                  href="https://www.instagram.com/"
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon width="30px" height="30px" name="Instagram" />
                </Link>
              </li>
              <li>
                <Link
                  variant="footer"
                  href="https://www.pinterest.com/"
                  title="Pinterest"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon width="30px" height="30px" name="Pinterest" />
                </Link>
              </li>
              <li>
                <Link
                  variant="footer"
                  href="https://twitter.com/"
                  title="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon width="30px" height="30px" name="Twitter" />
                </Link>
              </li>
            </UIList>
          </section>
        )}

        {sectionPaymentMethods && (
          <UIPaymentMethods data-fs-footer-payment-methods>
            <p data-fs-footer-title>MÉTODOS DE PAGO</p>
            <UIList>
              <li>
                <Icon width="50px" height="30px" name="Visa" />
                <SROnly text="Visa" />
              </li>
              <li>
                <Icon width="50px" height="30px" name="Diners" />
                <SROnly text="Diners Club" />
              </li>
              <li>
                <Icon width="50px" height="30px" name="Mastercard" />
                <SROnly text="Mastercard" />
              </li>
              {/* <li>
                <Icon width="34px" height="24px" name="EloCard" />
                <SROnly text="Elo Card" />
              </li>
              <li>
                <Icon width="34px" height="24px" name="PayPal" />
                <SROnly text="PayPal" />
              </li>
              <li>
                <Icon width="34px" height="24px" name="Stripe" />
                <SROnly text="Stripe" />
              </li>
              <li>
                <Icon width="34px" height="24px" name="GooglePay" />
                <SROnly text="Google Pay" />
              </li>
              <li>
                <Icon width="34px" height="24px" name="ApplePay" />
                <SROnly text="Apple Pay" />
              </li> */}
            </UIList>
          </UIPaymentMethods>
        )}

        <div data-fs-footer-payment-methods>
          <p data-fs-footer-title>PASARELA DE PAGOS</p>
        </div>
      </div>
      <div data-fs-footer-copyright className="text__legend">
          <p>© 2023 Decathlon™. Todos los derechos reservados.</p>
          {/* <p>© 2023 Decathlon™ Colombia SAS.</p>
          <div>
            <p>NIT 900868271-1</p>
            <p>601 9187891</p>
            <p>ecommerce.colombia@decathlon.com</p>
            <p>Registro SIC: 900868271-1</p>
          </div>
          <p>
            Productos importados para Colombia por Decathlon Colombia S.A.S Calle 147 #58c-95 Bogotá, Colombia
          </p>
          <address>Mount St, 000, New York / NY - 00000.</address> */}
      </div>
      <div data-fs-footer-bottom>

        <div className="layout__content">
          <p data-fs-footer-slogan>¡HACEMOS ACCESIBLE EL DEPORTE DE MANERA SOSTENIBLE, AL MAYOR NUMERO DE PERSONAS!</p>
        </div>
        <LogoFooter /> 

      </div>
      
    </footer>
  )
}

Footer.displayName = 'Footer'
export default mark(Footer)
