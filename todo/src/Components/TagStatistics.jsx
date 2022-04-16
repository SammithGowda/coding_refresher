import styled from "styled-components";
const Container1 = styled.div`
  border: 2px solid green;
`;
export const TagStatsistics = ({ todos }) => {
  return (
    <Container1>
      <div>All-{0}</div>
      <div>Personal -{todos.filter((items) => items.tags.Other).length}</div>
      <div>Others -{3}</div>
      <div>Office -{4}</div>
    </Container1>
  );
};
