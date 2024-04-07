import * as app from "./app";
import * as types from "./typs/index";

let username: string = app.username({
  alpha: {
    noOfCount: 6,
    lowerCase: false,
    uperCase: false,
    allowAlpha: true,
    // requiredChar: ["s", "a", "k", "t", "h", "i"],
    NotRequiredChar: ["z", "a"],
  },
  numeric: {
    // allowNumber: true,
    noOfCount: 2,
  },
  special_char: {
    // allowSpecialChar: true,
    noOfCount: 1,
  },
  domain: {
    allowDomain: true,
    defaultDomain: types.constType.default_domain["@bing.com"],
  },
  attributes: {
    minLength: 5,
    maxLength: 10,
  },
});

console.log(username);
