import styled from "styled-components";

//Components
import {
  InputComponent,
  SelectComponent,
  TextAreaComponent,
  InputSelectComponent,
  FieldArrayComponent,
} from "../form";

//Mixins
import { flexContainer } from "../../Utility/mixins";

export const Input = styled(InputComponent)`
  width: 100%;
  ${flexContainer("row")}
  input {
    width: ${(props) => (props.width ? props.width : "80%")};
  }
  .info {
    margin: 0;
    font-size: 0.85rem;
    transform: translate(9.4rem, 0.3rem);
  }
  .error {
    margin: 0;
    transform: translate(9.4rem, 0.3rem);
  }
`;

export const Select = styled(SelectComponent)``;

export const TextArea = styled(TextAreaComponent)``;

export const InputSelect = styled(InputSelectComponent)``;

export const FieldArray = styled(FieldArrayComponent)``;
