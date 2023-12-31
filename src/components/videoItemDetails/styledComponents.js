import styled from 'styled-components'

export const VideosDetailsViewCon = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  overflow-y: auto;
  margin-bottom: 60px;
  margin-top: 80px;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const LoadingView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
