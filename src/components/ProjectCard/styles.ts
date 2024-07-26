import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.colorBorder};
  padding: 16px;
`

export const LinkButton = styled.a`
  color: ${(props) => props.theme.colorButtonText};
  font-size: 14px;
  background-color: ${(props) => props.theme.colorBackgroundButton};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  border-radius: 5px;
  margin-top: 24px;
`
