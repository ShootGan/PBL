import styled from "@emotion/styled";
import { SC } from "~root/types/components";

const CardWrapper: SC<HTMLDivElement> = styled.div`
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 9);
  transition: 0.3s;
  width: 90%;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 18px;
  background-color: lightgray;
  justify-content: center;
  margin: 0 auto 15px auto;
  font-family: "Roboto", sans-serif;
`;

export default CardWrapper;
