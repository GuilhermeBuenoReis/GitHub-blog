import { HeaderContainer } from './styles'
import Logo from '../../assets/Logo-github-blog.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="" />
      </div>
    </HeaderContainer>
  )
}
