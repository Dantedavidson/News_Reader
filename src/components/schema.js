import * as yup from "yup";

//regex
import { urlRegex, dateRegex } from "./regex";

export const searchFormSchema = yup.object().shape({
  term: yup.string().max(32).required(),
  startDate: yup.string().matches(dateRegex, { excludeEmptyString: true }),
  endDate: yup.string().matches(dateRegex, { excludeEmptyString: true }),
});

export const userCardSchema = yup.object().shape({
  title: yup.string().max(100).required(),
  description: yup.string().max(250),
  url: yup.string().matches(urlRegex, { excludeEmptyString: true }),
});
