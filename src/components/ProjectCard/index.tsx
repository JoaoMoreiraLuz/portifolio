import Paragraph from '../Paragraph'
import Title from '../Title'

import { Card, LinkButton } from './styles'

const ProjectCard = () => (
  <Card>
    <Title>Projeto Lista de Tarefas</Title>
    <Paragraph type="secondary">Lista de tarefas feita com VueJS</Paragraph>
    <LinkButton>Visualizar</LinkButton>
  </Card>
)

export default ProjectCard
