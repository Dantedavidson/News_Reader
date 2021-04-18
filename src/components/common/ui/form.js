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

//Form inputs

export const Input = styled(InputComponent)`
  width: 100%;
  ${flexContainer("row", "flex-start")}

  input {
    width: ${(props) => (props.width ? props.width : "80%")};
  }
`;

export const Select = styled(SelectComponent)``;

export const TextArea = styled(TextAreaComponent)``;

export const InputSelect = styled(InputSelectComponent)``;

export const FieldArray = styled(FieldArrayComponent)``;

//Form styles

export const ModalForm = styled.form`
  margin: 4rem auto 0 auto;
  font-size: 1.4rem;
  height: 80%;
  width: 80%;
  ${flexContainer("column", "space-between")};

  div {
    width: 100%;
  }
  > div:nth-of-type(1) {
    input {
      flex-grow: 1;
    }
  }

  label {
    font-size: 1.4rem;
    font-weight: 400;
  }

  .error {
    margin: 0;
    position: absolute;
    transform: translateX(9.2rem) translateY(1.6rem);
  }

  .error:nth-of-type(2) {
    transform: translateX(9.2rem) translateY(2.7rem);
  }

  .info {
    margin: 0;
    font-size: 0.85rem;
    position: absolute;
    transform: translateX(9.2rem) translateY(1.6rem);
  }
`;
