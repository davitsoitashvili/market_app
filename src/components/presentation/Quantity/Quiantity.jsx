import React from "react";
import styled from "styled-components";

const ShowQuantity = styled.div`
  min-width: 170px;
  height: 20px;
  border: 2px solid #b71515;
  background-color: #b71515;
  border-radius: 5px;
  color: white;
  text-align: center;
  vertical-align: ce;
  margin-bottom: 25px;
`;

function Quantity({ number }) {
  if (number > 0) {
    return <ShowQuantity>Hurry only {number} items left!</ShowQuantity>;
  } else {
    return <ShowQuantity>This item is sold out</ShowQuantity>;
  }
}
export default Quantity;
