import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim:</Title>
    <Paragraph type="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia deserunt,
      officiis, qui consequuntur atque obcaecati nostrum odio quibusdam aliquam
      possimus quaerat soluta quod excepturi ea! Atque a autem optio quod?
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=JoaoMoreiraLuz&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=JoaoMoreiraLuz&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default About
