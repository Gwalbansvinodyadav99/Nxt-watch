import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
`
export const GamingCardCon = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  margin-top: 60px;
  list-style-type: none;
  background-color: ${props => props.bgColor};
`
export const GamingCardImg = styled.img`
  width: 200px;
  height: 250px;
  border-radius: 5px;
  margin-bottom: 8px;
`
export const GamingCardTitle = styled.h1`
  color: ${props => props.textColor};
  font-family: 'roboto';
  font-weight: 600;
  font-size: 18px;
  padding-bottom: 5px;
`
export const GamingCardViewCount = styled.p`
  color: ${props => props.noteColor};
  font-family: 'roboto';
  font-size: 14px;
  align-self: center;
  padding-top: 8px;
`
