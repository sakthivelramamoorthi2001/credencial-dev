import { throws } from "assert";
import { defaultUserNameProps } from "../constant/username"
import * as types from '../typs/index';
import { makingStringWithDataType } from "../utils";



const usernameGenerator = (props: types.username_type.username_props_type | null): string => {

    
    
    const mergedProps: types.username_type.username_props_required_type = { ...defaultUserNameProps, ...props};

}
    console.log(mergedProps);

    let responseUserName: string = "";

    validationChencking(mergedProps);

    if (mergedProps.alpha.allowAlpha) {
        responseUserName += alphaBeticWordCreating(mergedProps);
    }

    if (mergedProps.numeric.allowNumber) {
        responseUserName += numericWordCreating(mergedProps);
    }

    if (mergedProps.speacial_char.allowSpecialChar) {
        responseUserName += specialCharWordCreating(mergedProps)
    }

    return responseUserName.substring(0, mergedProps.attributes.maxLength);
}

function validationChencking(mergedProps: types.username_type.username_props_required_type){

    let overAllNoOfCount:number =  mergedProps.alpha.noOfCount + mergedProps.numeric.noOfCount + mergedProps.speacial_char.noOfCount

    if(mergedProps.attributes.minLength > overAllNoOfCount ){
        throw new Error("attribute minimum length is not valid");
    }

    if(mergedProps.attributes.maxLength < overAllNoOfCount ){
       mergedProps.attributes.maxLength = overAllNoOfCount ;
    }

}

function alphaBeticWordCreating(mergedProps: types.username_type.username_props_required_type): string {

    if ((mergedProps.alpha.lowerCase && !mergedProps.alpha.uperCase) || (!mergedProps.alpha.lowerCase && mergedProps.alpha.uperCase)) {
        console.log("11");
        return  makingStringWithDataType(mergedProps.alpha.lowerCase ? types.constType.default_data_types.stringWithLowerCase : types.constType.default_data_types.stringWithUpperCase, mergedProps.alpha.noOfCount);
    } else {
        console.log("2");

        return makingStringWithDataType(types.constType.default_data_types.StringWithLowerAndUpperCase, mergedProps.alpha.noOfCount);
    }
}

function numericWordCreating(mergedProps: types.username_type.username_props_required_type): string {
    return makingStringWithDataType(types.constType.default_data_types.number, mergedProps.numeric.noOfCount);
    
}

function specialCharWordCreating(mergedProps: types.username_type.username_props_required_type): string {
    return makingStringWithDataType(types.constType.default_data_types.specialChar, mergedProps.speacial_char.noOfCount);
}

export {
    usernameGenerator
}

