import { defaultUserNameProps } from "./constant/username";
import * as types from './typs/index';
import * as modules from './modules/index';


const username = (props?: types.username_type.username_props_type): string => {
    return modules.username.usernameGenerator(props ? props : null);
}

const password = (): string => {
    return '';
}

export {
    username,
    password
}


