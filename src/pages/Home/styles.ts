import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 80%;
  background: white;

  box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.4);

  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Body = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const Header = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.input`
  width: 40%;
  padding: 5px;

  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-bottom: 2px solid #c27b83;
  border-radius: 4px;

  font-size: 4em;
  font-weight: bold;
  text-align: center;

  background: transparent;

  ::placeholder {
    opacity: 0.4;
  }
  :focus {
    border-bottom: 2px solid #492e61;
  }
`;
export const Title = styled.div`
  padding: 20px;
  font-size: 4em;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
`;
