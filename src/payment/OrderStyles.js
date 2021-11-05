import styled from "styled-components";

export const OrderStyles = styled.div`
  padding: 40px;
  margin: 20px 0;
  border: 1px solid lightgray;
  background-color: white;
  position: relative;

  .order-id {
    position: absolute;
    top: 40px;
    right: 20px;
  }
  .order-total {
    font-weight: 500;
    text-align: right;
  }
`;