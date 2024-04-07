import * as types from "../typs/index";

function ratioFinding(maxLength: number, minLength: number, ratio: number) {
  return maxLength / ratio;
}

function randomCharCreating(): {
  numbers: number;
  specialChar: string;
  stringWithLowerCase: string;
  stringWithUpperCase: string;
  StringWithLowerAndUpperCase: string;
} {
  let letters = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ";
  let numbres = "1234567890";
  let specialChar = "!@#$%^&*()-_+={}[];:'\",.<>/\\|`~?";

  let random = (arr: string): string => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  return {
    numbers: Number(random(numbres)),
    stringWithLowerCase: random(letters).toLowerCase(),
    stringWithUpperCase: random(letters).toUpperCase(),
    StringWithLowerAndUpperCase: random(letters),
    specialChar: random(specialChar),
  };
}

function makingStringWithDataType(
  dataType: types.constType.default_data_types,
  size: number
): string {
  let response: string = "";

  for (let i = 1; i <= size; i++) {
    let default_data_types: Record<
      types.constType.default_data_types,
      number | string
    > = {
      [types.constType.default_data_types.number]: randomCharCreating().numbers,
      [types.constType.default_data_types.stringWithUpperCase]:
        randomCharCreating().stringWithUpperCase,
      [types.constType.default_data_types.stringWithLowerCase]:
        randomCharCreating().stringWithLowerCase,
      [types.constType.default_data_types.StringWithLowerAndUpperCase]:
        randomCharCreating().StringWithLowerAndUpperCase,
      [types.constType.default_data_types.specialChar]:
        randomCharCreating().specialChar,
    };
    response += default_data_types[dataType];
  }
  return response;
}

// function mergeTwoObjectWithKeys = (default:Object<T>, newData:Object<T>):Object<T> => {
//     return  Object<T>;
// }

function mergeObjects<D extends object, N extends object>(
  defaultObj: D,
  newObj: N
): any {
  let defaultObjArr = Object.entries(defaultObj);
  let newObjArr = Object.entries(newObj);

  defaultObjArr.forEach((element) => {
    let containThisItemIndex = newObjArr.findIndex((i) => i[0] == element[0]);
    if (containThisItemIndex == -1) {
      let temp: any = {
        "0": element[0],
        "1": element[1],
      };
      newObjArr.push(temp);
    } else {
      let current = newObjArr[containThisItemIndex];
      let temp: any;
      Object.keys(element[1]).map((key: string) => {
        if (current[1][key] != undefined) {
          temp[key] = current[1][key];
        } else {
          temp[key] = element[1][key];
        }
      });
    }
  });

  return Object.fromEntries(newObjArr);
}

const somePublicVar = 10;
const somePrivateVar = 20;

export { makingStringWithDataType, ratioFinding, mergeObjects };
