import {
  numbres as importNumber,
  letters as importLetters,
  specialChar as importSpecialChar,
} from "../constant/username";
import * as types from "../typs/index";

function ratioFinding(maxLength: number, minLength: number, ratio: number) {
  return maxLength / ratio;
}

function filterStringBasedOnArray(
  str: string,
  requiredChar: Array<number | String>,
  NotRequiredChar: Array<number | String>
): string {
  if (NotRequiredChar.length != 0) {
    let s: string = str;
    NotRequiredChar.forEach((element: String | number) => {
      if (s.includes(String(element))) {
        s.replace(String(element), "");
      }
    });

    return s;
  } else if (requiredChar.length !== 0) {
    return requiredChar.join("");
  } else if (requiredChar.length == 0 && NotRequiredChar.length == 0) {
    return str;
  } else {
    return "";
  }
}

function randomCharCreating(alphaNumSplData: {
  specialChar: string;
  letters: string;
  numbres: string;
}): {
  numbers: number;
  specialChar: string;
  stringWithLowerCase: string;
  stringWithUpperCase: string;
  StringWithLowerAndUpperCase: string;
} {
  let random = (arr: string): string => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  return {
    numbers: Number(random(alphaNumSplData.numbres)),
    stringWithLowerCase: random(alphaNumSplData.letters).toLowerCase(),
    stringWithUpperCase: random(alphaNumSplData.letters).toUpperCase(),
    StringWithLowerAndUpperCase: random(alphaNumSplData.letters),
    specialChar: random(alphaNumSplData.specialChar),
  };
}

function makingStringWithDataType(
  dataType: types.constType.default_data_types,
  size: number,
  requiredChar: Array<String | number>,
  NotRequiredChar: Array<String | number>
): string {
  let response: string = "";

  let alphaNumSplData: {
    specialChar: string;
    letters: string;
    numbres: string;
  } = {
    letters: filterStringBasedOnArray(
      importLetters,
      requiredChar,
      NotRequiredChar
    ),
    numbres: filterStringBasedOnArray(
      importNumber,
      requiredChar,
      NotRequiredChar
    ),
    specialChar: filterStringBasedOnArray(
      importSpecialChar,
      requiredChar,
      NotRequiredChar
    ),
  };

  for (let i = 1; i <= size; i++) {
    let default_data_types: Record<
      types.constType.default_data_types,
      number | string
    > = {
      [types.constType.default_data_types.number]:
        randomCharCreating(alphaNumSplData).numbers,
      [types.constType.default_data_types.stringWithUpperCase]:
        randomCharCreating(alphaNumSplData).stringWithUpperCase,
      [types.constType.default_data_types.stringWithLowerCase]:
        randomCharCreating(alphaNumSplData).stringWithLowerCase,
      [types.constType.default_data_types.StringWithLowerAndUpperCase]:
        randomCharCreating(alphaNumSplData).StringWithLowerAndUpperCase,
      [types.constType.default_data_types.specialChar]:
        randomCharCreating(alphaNumSplData).specialChar,
    };
    response += default_data_types[dataType];
  }
  return response;
}

function randomNumberBetweenMinMax(max: number, min: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { makingStringWithDataType, ratioFinding, randomNumberBetweenMinMax };
