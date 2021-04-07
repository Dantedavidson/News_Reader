import * as yup from "yup";

//regex
import { urlRegex, dateRegex } from "./regex";

//Schema for home page query form
export const searchFormSchema = yup.object().shape({
  term: yup.string().max(32).required(),
  startDate: yup.string().matches(dateRegex, { excludeEmptyString: true }),
  endDate: yup.string().matches(dateRegex, { excludeEmptyString: true }),
});

//Schema for create page card form
export const userCardSchema = yup.object().shape({
  title: yup.string().max(100).required(),
  description: yup.string().max(250),
  url: yup.string().matches(urlRegex, { excludeEmptyString: true }),
});
