import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const CustomInput = styled.input`
  width: 300px;
  height: 38px;
  color: #475569;
  padding-left: 10px;
  border: 2px solid #cccccc;
  border-radius: 5px;
`
export const CustomLabel = styled.label`
  color: #475569;
  font-size: 10px;
  padding-bottom: 3px;
  padding-left: 3px;
  padding-top: 10px;
`
export const CustomCheckBoxCon = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
`

export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  align-self: center;
  padding-left: 5px;
  cursor: pointer;
  color: #1e293b;
`

export const CustomButton = styled.button`
  max-width: 250px;
  min-height: 38px;
  border-radius: 5px;
  background-color: #3b82f6;
  border: none;
  outline: none;
  color: #ffffff;
  margin-top: 10px;
  cursor: pointer;
`
export const CustomCheckBox = styled.input`
  width: 16px;
  height: 16px;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  border-radius: 5px;
  padding: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`
export const UserNameAndPasswordCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  justify-content: flex-start;
`
export const SubmitError = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 14px;
  padding-top: 2px;
`
export const Logo = styled.img`
  width: 45%;
  margin-bottom: 20px;
  align-self: center;
`
