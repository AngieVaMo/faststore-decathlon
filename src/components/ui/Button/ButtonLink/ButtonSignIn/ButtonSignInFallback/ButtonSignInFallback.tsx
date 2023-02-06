import Icon from 'src/components/ui/Icon'
import ButtonLink from 'src/components/ui/Button/ButtonLink'

function ButtonSignInFallback() {
  return (
    <ButtonLink
      data-fs-button-signin-link
      href="/login"
      className="text__title-mini"
      variant="tertiary"
    >
      <Icon name="User" width={22} height={22} weight="bold" />
      <span>{'Mi perfil'}</span>
    </ButtonLink>
  )
}

export default ButtonSignInFallback
