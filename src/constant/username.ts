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
    noOfCount: 0,
  },
  speacial_char: {
    allowSpecialChar: false,
    NotRequiredChar: [],
    requiredChar: [],
    noOfCount: 0,
  },
  attributes: {
    maxLength: 8,
    minLength: 0,
  },
  domain: {
    allowDomain: false,
    defaultDomain: null,
    yourDomain: "234@gmail.com",
  },
};

export { defaultUserNameProps };
