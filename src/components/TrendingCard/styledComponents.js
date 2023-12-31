import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
`
export const TrendingCardCon = styled.li`
  display: flex;
  list-style-type: none;
  background-color: ${props => props.bgColor};
`
export const TrendingCardImg = styled.img`
  width: 400px;
  height: 250px;
  border-radius: 5px;
  margin-bottom: 8px;
`
export const TrendingProfile = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  margin-top: 8px;
`

export const TrendingDetailsCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 15px;
`
export const TrendingCardTitle = styled.h1`
  color: ${props => props.textColor};
  font-family: 'roboto';
  font-weight: 600;
  font-size: 18px;
  padding-bottom: 5px;
`
export const TrendingCardViewCount = styled.p`
  color: ${props => props.noteColor};
  font-family: 'roboto';
  font-size: 14px;
  align-self: center;
  padding-top: 8px;
`
export const TrendingName = styled.p`
  color: ${props => props.noteColor};
  font-family: 'roboto';
  font-size: 14px;
  align-self: center;
  padding-top: 8px;
`
export const Dot = styled.p`
  color: ${props => props.noteColor};
  font-family: 'roboto';
  font-size: 14px;
  align-self: center;
  padding-top: 8px;
`
