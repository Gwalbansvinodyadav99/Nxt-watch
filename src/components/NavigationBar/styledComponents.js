import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavCon = styled.div`
  display: flex;
`

export const NavigationBarCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 92%;
  position: fixed;
  top: 60px;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
`
export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  flex-grow: 1;
  flex-direction: column;
`

export const NavListCon = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  list-style-type: none;
`
export const ElementsCon = styled.div`
  display: flex;
  align-items: center;
`
export const BottomHeading = styled.h1`
  font-family: 'roboto';
  font-weight: 600;
  font-size: 22px;
  color: ${props => props.color};
  padding-top: 10px;
`
export const BottomDesc = styled.p`
  font-family: 'roboto';
  font-weight: 600;
  font-size: 18px;
  color: ${props => props.color};
  padding-top: 10px;
  max-width: 100px;
`
export const NavText = styled.p`
  font-family: 'roboto';
  font-size: 18px;
  color: ${props => props.color};
  padding-left: 10px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
export const BottomCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 20px;
`
export const IconImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-right: 5px;
`
