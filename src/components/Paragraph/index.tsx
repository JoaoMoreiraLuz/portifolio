import { P } from './styles'

export type Props = {
  children: string
  type?: 'principal' | 'secondary'
}

const Title = ({ children, type = 'principal' }: Props) => (
  <P type={type}>{children}</P>
)

export default Title
