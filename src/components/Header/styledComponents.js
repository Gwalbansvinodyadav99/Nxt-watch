import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavContainer = styled.nav`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  background-color: ${props => props.bgColor};
  align-items: center;
`
export const NavLogo = styled.img`
  width: 120px;
  height: 35px;
  align-self: center;
  margin-left: 20px;
  margin-top: 10px;
`
export const ThemeProfileLogoutCon = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: 20px;
`
export const CustomThemeChangeBtn = styled.button`
  background-color: transparent;
  width: 30px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const LogoLink = styled(Link)`
  width: 100px;
  height: 50px;
  margin-left: 20px;
`

export const CustomProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  margin-left: 25px;
`
export const CustomLogOut = styled.button`
  width: 100px;
  height: 35px;
  background-color:  ${props => props.bgColor};
  border: 2px solid #3b82f6;
  color: ${props => props.color}
  font-weight: 600;
  border-radius: 5px;
  align-self: center;
  cursor:pointer;  
  margin-left:25px;
`
export const PopupLogoutCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 200px;
  background-color: ${props => props.bgColor};
  align-items: center;
  justify-content: space-between;
`
export const PopupDesc = styled.p`
  color: ${props => props.color}
  font-family: 'roboto';
  padding-top:20px;

`

export const CancelAndConfirmBtnCon = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  margin-bottom: 50px;
`
export const CancelButton = styled.button`
  width: 80px;
  height: 35px;
  font-weight: 600;
  font-family: 'Roboto';
  border-radius: 5px;
  border: 2px solid #ffffff;
  color: #ebebeb;
  background-color: black;
  cursor: pointer;
  outline: none;
  margin-right: 20px;
`
export const ConfirmButton = styled.button`
  width: 80px;
  height: 35px;
  border-radius: 5px;
  border: none;
  font-family: 'Roboto';
  font-weight : 600;
  background-color: #3b82f6;
  color: #ffffff
  cursor: pointer;
  margin-left:20px;
  outline: none;
`
