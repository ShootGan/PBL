import styled from "@emotion/styled";
import { SC } from "~root/types/components";

const CardImage: SC<HTMLImageElement> = styled.img`
  width: 1000px;
  max-width: 100%;
  height: 40%;
  border-radius: 18px 18px 18px 18px;
  border-radius: 18px 18px 0px 0px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;

export default CardImage;
