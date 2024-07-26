import styled from 'styled-components'
import { Title } from '../../components/Title/styles'
import { P } from '../../components/Paragraph/styles'

export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
  text-align: center;
`

export const GithubUsername = styled(P)`
  text-align: center;
`

export const TitleProfile = styled(Title)`
  text-align: center;
`

export const ThemeButton = styled.button`
  width: 100%;
  margin: 0 auto;
  border-radius: 12px;
  padding: 8px;
  font-size: 10px;
  font-weight: bold;
  color: #aefff7;
  background-color: #141320;
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
