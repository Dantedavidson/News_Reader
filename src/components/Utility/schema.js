import * as yup from "yup";

//regex
import { urlRegex, dateRegex } from "./regex";

//Schema for home page query form
export const searchFormSchema = yup.object().shape({
  term: yup.string().max(32).required(),
  startDate: yup.string().matches(dateRegex, {
    message: "Must be a valid date",
    excludeEmptyString: true,
  }),
  endDate: yup.string().matches(dateRegex, {
    message: "Must be a valid date",
    excludeEmptyString: true,
  }),
});

// Schema for create page card form
export const userCardSchema = yup.object().shape({
  title: yup.string().max(100).required(),
  description: yup.string().max(250),
  url: yup.string().matches(urlRegex, { excludeEmptyString: true }),
  imgUrl: yup
    .string()
    .notRequired()
    .test("valid-image-url", "Must use valid image URL", (value) =>
      testImage(value, 1000).then((status) => status === "success")
    ),
});

// Validate Img url function
const testImage = (url, timeout) =>
  new Promise((res) => {
    if (!url.trim()) res("success");
    timeout = timeout || 3000;
    let timedOut = false;
    let timer;
    const img = new Image();

    img.onerror = img.onabort = function () {
      if (!timedOut) {
        clearTimeout(timer);
        res("error");
      }
    };

    img.onload = function () {
      if (!timedOut) {
        clearTimeout(timer);
        res("success");
      }
    };

    img.src = url;

    timer = setTimeout(function () {
      timedOut = true;
      // reset .src to invalid URL so it stops previous
      // loading, but doesn't trigger new load
      img.src = "//!!!!/test.jpg";
      res("timeout");
    }, timeout);
  });
