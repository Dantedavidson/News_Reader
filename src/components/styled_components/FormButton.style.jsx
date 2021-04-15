import styled from "styled-components";
import { Button } from "../common/Button";

export const FormButton = styled(Button)`
  display: block;
  width: 300px;
  height: 48px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  color: #fff;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  font-size: 2rem;
  margin: 0 auto 3rem auto;
  cursor: pointer;
  &:hover {
    color: $yellow-highlight;
  }
`;
