import styled from "styled-components";

function Snippet() {
  return (
    <Container>
      <h1>Snippet</h1>
    </Container>
  );  
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Snippet;