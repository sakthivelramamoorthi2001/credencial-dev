import * as app from './app';
import * as types from './typs/index';

import { makingStringWithDataType } from './utils';
let username = app.username({attributes:{maxLength:7}, alpha:{noOfCount:5}});
console.log(username, 'user name', );
