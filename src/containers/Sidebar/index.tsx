import Avatar from '../../components/Avatar'

import {
  Description,
  TitleProfile,
  GithubUsername,
  ThemeButton,
  SidebarContainer,
} from './styles'

type Props = {
  themeChanger: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <TitleProfile fontSize={20}>João Gustavo</TitleProfile>
      <GithubUsername type="secondary" fontSize={16}>
        JoaoMoreiraLuz
      </GithubUsername>
      <Description type="principal" fontSize={12}>
        Web developer
      </Description>
      <ThemeButton onClick={props.themeChanger}>Trocar tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
