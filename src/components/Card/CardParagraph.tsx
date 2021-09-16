import styled from "@emotion/styled";
import { SC } from "~root/types/components";

const CardParagraph: SC<HTMLParagraphElement> = styled.p`
  display: block;
  margin: 5px 5px 5px 5px;
  font-family: "Roboto";
  font-weight: 300;
  padding: 10px;
  font-size: 2.5vh;
  text-justify: inter-character;
  text-align: left;
`;

export default CardParagraph;
