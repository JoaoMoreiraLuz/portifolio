import styled from 'styled-components'

export const GithubSection = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: block;
  }

  img {
    height: 157px;
    margin: 10px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
      margin: 0;
    }
  }
`
