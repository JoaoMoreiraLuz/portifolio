import ProjectCard from '../../components/ProjectCard'
import Title from '../../components/Title'

import { List } from './styles'

const Projects = () => (
  <section>
    <Title fontSize={16}>Projetos</Title>
    <List>
      <li>
        <ProjectCard />
      </li>
      <li>
        <ProjectCard />
      </li>
      <li>
        <ProjectCard />
      </li>
      <li>
        <ProjectCard />
      </li>
      <li>
        <ProjectCard />
      </li>
      <li>
        <ProjectCard />
      </li>
      <li>
        <ProjectCard />
      </li>
      <li>
        <ProjectCard />
      </li>
    </List>
  </section>
)

export default Projects
