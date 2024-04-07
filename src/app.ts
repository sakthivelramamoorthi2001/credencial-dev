import { defaultUserNameProps } from "./constant/username";
import * as types from "./typs/index";
import * as modules from "./modules/index";

const username = (props?: types.username_type.username_props_type): string => {
  if (props) {
    return modules.username.usernameGenerator(props);
  } else {
    return modules.username.usernameGenerator(defaultUserNameProps);
  }
};

const password = (): string => {
  return "";
};

export { username, password };
