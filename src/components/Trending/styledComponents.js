import styled from 'styled-components'

export const TrendingCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 250px;
  margin-top: 60px;
  margin-bottom: 0px;
  margin-right: 60px;
  background-color: ${props => props.bgColor};
`

export const TrendingHeaderCon = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  background-color: ${props => props.bgColor};
  width: 100%;
`
export const LogoCon = styled.div`
  border-radius: 100%;
  width: 60px;
  height: 60px;
  margin: 0;
  align-self: center;
`
export const TrendingHeaderName = styled.h1`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  align-self: center;
  font-weight: 600;
  padding-left: 10px;
  font-size: 20px;
`
export const LoadingView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TrendingVideosCon = styled.ul`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin: 5px;
  margin-top: 70px;
`
