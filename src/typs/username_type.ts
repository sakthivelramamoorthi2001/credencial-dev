import * as types from "./index";

type alpha = {
  allowAlpha?: boolean;
  uperCase?: boolean;
  lowerCase?: boolean;
  requiredChar?: Array<String>;
  NotRequiredChar?: Array<String>;
  noOfCount?: number;
};

type numeric = {
  allowNumber?: boolean;
  min?: number;
  max?: number;
  requiredNumber?: Array<number>;
  NotRequiredNumber?: Array<String>;
  noOfCount?: number;
};

type speacial_char = {
  allowSpecialChar?: boolean;
  requiredChar?: Array<String>;
  NotRequiredChar?: Array<String>;
  noOfCount?: number;
};

type domain = {
  allowDomain?: boolean;
  defaultDomain?: types.constType.default_domain | null;
  yourDomain?: string;
};

type attributes_of_username = {
  maxLength?: number;
  minLength?: number;
};

type username_props_type = {
  alpha?: alpha;
  numeric?: numeric;
  speacial_char?: speacial_char;
  domain?: domain;
  attributes?: attributes_of_username;
};

type MakeRequired<T> = {
  [K in keyof T]-?: T[K];
};

type username_props_required_type = {
  alpha: MakeRequired<alpha>;
  numeric: MakeRequired<numeric>;
  speacial_char: MakeRequired<speacial_char>;
  domain: MakeRequired<domain>;
  attributes: MakeRequired<attributes_of_username>;
};

export { username_props_type, username_props_required_type };
