import styled from "styled-components";

//Components
import { InputComponent } from "../common/form";
import { SelectComponent } from "../common/form";
import { TextAreaComponent } from "../common/form";
import { InputSelectComponent } from "../common/form";
import { FieldArrayComponent } from "../common/form";

export const Input = styled(InputComponent)`
  input {
    border-bottom: 1px solid ${({ theme }) => theme.colors.textOne};
  }
  .info {
    margin: 0;
    font-size: 0.85rem;
    transform: translate(9.4rem, 0.3rem);
  }
  .error {
    color: red;
    margin: 0;
    font-size: 0.85rem;
    transform: translate(9.4rem, 0.3rem);
  }
`;

export const Select = styled(SelectComponent)``;

export const TextArea = styled(TextAreaComponent)``;

export const InputSelect = styled(InputSelectComponent)``;

export const FieldArray = styled(FieldArrayComponent)``;
