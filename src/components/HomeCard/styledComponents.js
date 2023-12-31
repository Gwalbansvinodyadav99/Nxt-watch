import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
`
export const HomeCardCon = styled.li`
  display: flex;
  list-style-type: none;
  flex-direction: column;
  margin: 5px;
  max-width: 300px;
  max-height: 300px;
`
export const CardImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 5px;
`
export const CardDetailsCon = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CardProfileImg = styled.img`
  border-radius: 100%;
  width: 40px;
  height: 40px;
  margin-right: 3px;
`
export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const CardTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.textColor};
  padding-bottom: 5px;
`
export const CardName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.textColor};
  padding-bottom: 5px;
`
export const CardViewsAndAgeCon = styled.div`
  display: flex;
  justify-content: space-between;
`
