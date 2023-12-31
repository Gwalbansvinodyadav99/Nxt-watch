import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-top: 0px;
  }
`

export const BannerCon = styled.div`
  display: ${props => props.display};
  width: 100%;
  height: 300px;
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
`
export const LeftBannerCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-left: 10px;
  justify-content: flex-start;
`
export const LogoImage = styled.img`
  width: 150px;
  height: 40px;
  margin-bottom: 20px;
  margin-top: 10px;
`
export const RemoveBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 5px;
`
export const BannerHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 600;
  color: #383838;
  font-size: 22px;
`
export const GetKnowBtn = styled.button`
  background-color: transparent;
  border: 1px solid #000000;
  width: 100px;
  height: 40px;
  color: #00306e;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 20px;
`
export const SearchBarCon = styled.div`
  display: flex;
`
export const SearchBar = styled.input`
  width: 400px;
  height: 30px;
  margin-top: 30px;
  margin-left: 44px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`
export const SearchIconBtn = styled.button`
  background-color: #606060;
  width: 35px;
  margin-top: 30px;
  height: 30px;
  cursor: pointer;
  border: none;
  outline: none;
`
export const LoadingView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CloseCon = styled.div`
  display: flex;
  margin: 0px;
`
