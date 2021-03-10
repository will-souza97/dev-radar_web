import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.aside`
  width: 320px;
  padding: 30px 20px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  position: fixed;

  form {
    margin-top: 30px;

    label {
      color: rgba(0, 0, 0, 0.5);
      font-size: 14px;
      font-weight: bold;
      display: block;
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      color: rgba(0, 0, 0, 0.5);
      padding: 0 15px;
      margin: 0 0 10px;
      width: 100%;
      height: 44px;
      border: 0;
      border-radius: 4px;
    }

    button {
      background: #7159c1;
      color: #fff;
      padding: 0 15px;
      margin: 0 0 10px;
      width: 100%;
      height: 44px;
      border: 0;
      border-radius: 4px;

      &:hover {
        background: ${darken(0.07, '#7159c1')};
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  display: block;
  color: #333;
`;
