import * as app from "./app";
import * as types from "./typs/index";

let username: string = app.username({ alpha: { noOfCount: 10 } });

console.log(username);
