import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
`;
export const FormWrap = styled.div`
  margin-top: 25px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;
export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
export const Form = styled.form`
  border: ${(props) => `1px solid #fff`};
  background: none;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 40px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;
export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  background-color: #203647;
  border: #eefbfb;
  color: #eefbfb;
`;
export const FormButton = styled.button`
  background: none;
  padding: 16px 0;
  margin: 0.5rem;
  border: 1px solid #eefbfb;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    #4da8da
  }
  :active {
    background: #4da8da;
  }
`;
export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

const Auth = () => {
  return (
    <div>
      <FormWrap>
        <FormContent>
          <Form>
            <FormH1>Log In:</FormH1>
            <FormLabel htmlFor="for">Email:</FormLabel>
            <FormInput type="email" name="email" required />
            <FormLabel htmlFor="for">Password:</FormLabel>
            <FormInput type="password" name="password" required />
            <FormLabel htmlFor="for">Confirm Password:</FormLabel>
            <FormInput type="password" name="confirm" required />
            {/* <FormButton type='submit'>Continue</FormButton> */}
            <FormButton>Submit</FormButton>
            {/* {status === "ERROR" && <p>Ooops! There was an error.</p>} */}
            <FormButton>Google</FormButton>
            {/* <Text>Forgot password</Text> */}
          </Form>
        </FormContent>
      </FormWrap>
    </div>
  );
};

export default Auth;
