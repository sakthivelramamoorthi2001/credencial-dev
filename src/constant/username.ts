import * as types from "../typs/index";

const defaultUserNameProps: types.username_type.username_props_required_type = {
  alpha: {
    lowerCase: true,
    uperCase: true,
    allowAlpha: true,
    NotRequiredChar: [],
    requiredChar: [],
    noOfCount: 8,
  },
  numeric: {
    allowNumber: false,
    min: Number.MIN_VALUE,
    max: Number.MAX_VALUE,
    NotRequiredNumber: [],
    requiredNumber: [],
    noOfCount: 8,
  },
  special_char: {
    allowSpecialChar: false,
    NotRequiredChar: [],
    requiredChar: [],
    noOfCount: 8,
  },
  attributes: {
    maxLength: 8,
    minLength: 0,
  },
  domain: {
    allowDomain: false,
    defaultDomain: null,
    yourDomain: "",
  },
};

type MergedProps = {
  [Key in keyof types.username_type.username_props_required_type]: types.username_type.username_props_required_type[Key] &
    types.username_type.username_props_type[Key];
};

const mergedDefaultUserNameProps = (
  defaultData: types.username_type.username_props_required_type,
  props: any
): MergedProps => {
  return Object.entries(defaultData).reduce(
    (merged: any, [key, value]: [string, any]) => {
      merged[key] = { ...value, ...props[key] };
      return merged;
    },
    {} as MergedProps
  );
};

const letters = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ";
const numbres = "1234567890";
const specialChar = "!@#$%^&*()-_+={}[];:'\",.<>/\\|`~?";

export {
  defaultUserNameProps,
  mergedDefaultUserNameProps,
  letters,
  numbres,
  specialChar,
};
