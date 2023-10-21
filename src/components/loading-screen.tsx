import { styled } from "styled-components";

export default function LoadingScreen() {
  return (
    <Wrapper>
      <Text>...Loading</Text>
    </Wrapper>
  );
}

const Wrapper = styled.span`
  height: 100vh;
  display: flex;
  justify-content: cneter;
  justify-items: center;
`;

const Text = styled.span`
  font-size: 23px;
`;
