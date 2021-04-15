import {
  formatAuthors,
  stringToArray,
  paginationDisplay,
} from "../Utility/utilities";

test("formatAuthors", () => {
  expect(formatAuthors([])).toBe("By");
  expect(formatAuthors(["Dante"])).toBe("By Dante.");
  expect(formatAuthors(["Dante", "Ella"])).toBe("By Dante and Ella.");
  expect(formatAuthors(["Dante", "Ella", "Owen"])).toBe(
    "By Dante, Ella and Owen."
  );
  expect(formatAuthors(["Dante", "Ella", "Owen", "Nuri"])).toBe(
    "By Dante, Ella, Owen and Nuri."
  );
});

test("stringToArray", () => {
  expect(stringToArray("By")).toStrictEqual([""]);
  expect(stringToArray("By Dante.")).toStrictEqual(["Dante"]);
  expect(stringToArray("By D. Davidson.")).toStrictEqual(["D. Davidson"]);
  expect(stringToArray("By D. Davidson and Ella-White.")).toStrictEqual([
    "D. Davidson",
    "Ella-White",
  ]);
  expect(
    stringToArray("By D. Davidson,Ella-White and Owen Jones.")
  ).toStrictEqual(["D. Davidson", "Ella-White", "Owen Jones"]);
});

test("paginationDisplay", () => {
  expect(paginationDisplay(1, null, [1, 2, 3, 4, 5, 6])).toBe(null);
  expect(paginationDisplay(null, 1, [1, 2, 3, 4, 5, 6])).toBe(null);
  expect(paginationDisplay(0, 1, [1, 2, 3, 4, 5, 6])).toStrictEqual([1]);
  expect(paginationDisplay(2, 6, [1, 2, 3, 4, 5, 6])).toStrictEqual([
    3,
    4,
    5,
    6,
  ]);
});
