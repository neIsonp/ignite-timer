import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  padding: 2.5rem;
  border-radius: 8px;
  margin: 5rem auto;

  background: ${(props) => props.theme["gray-800"]};

  display: flex;
  flex-direction: column;
`;
