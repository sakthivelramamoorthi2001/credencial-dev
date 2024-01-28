import { throws } from "assert";
import { defaultUserNameProps } from "../constant/username"
import * as types from '../typs/index';
import { makingStringWithDataType } from "../utils";



const usernameGenerator = (props: types.username_type.username_props_type | null): string => {
    const mergedProps: types.username_type.username_props_required_type = Object.assign({}, defaultUserNameProps, props);
    console.log(mergedProps);

    let responseUserName: string = "";

    validationChencking(mergedProps);

    if (mergedProps.alpha.allowAlpha) {
        alphaBeticWordCreating(mergedProps);
    }

    if (mergedProps.numeric.allowNumber) {
        numericWordCreating(mergedProps);
    }

    if (mergedProps.speacial_char.allowSpecialChar) {
        specialCharWordCreating(mergedProps)
    }


    return responseUserName.substring(0, mergedProps.attributes.maxLength);
}

function validationChencking(mergedProps: types.username_type.username_props_required_type){

    let overAllNoOfCount:number =  mergedProps.alpha.noOfCount + mergedProps.numeric.noOfCount + mergedProps.speacial_char.noOfCount

    if(mergedProps.attributes.minLength > overAllNoOfCount ){
        throw new Error("attribute minimum length is not valid");
    }

    if(mergedProps.attributes.maxLength < overAllNoOfCount ){
        throw new Error("attribute maximum length is not valid");
    }

}

function alphaBeticWordCreating(mergedProps: types.username_type.username_props_required_type): string {
    let responseUserName: string = ""

    if ((mergedProps.alpha.lowerCase && !mergedProps.alpha.uperCase) || (!mergedProps.alpha.lowerCase && mergedProps.alpha.uperCase)) {
        responseUserName += makingStringWithDataType(mergedProps.alpha.lowerCase ? types.constType.default_data_types.stringWithLowerCase : types.constType.default_data_types.stringWithUpperCase, mergedProps.alpha.noOfCount);
    } else {
        responseUserName += makingStringWithDataType(types.constType.default_data_types.StringWithLowerAndUpperCase, mergedProps.alpha.noOfCount);
    }

    return responseUserName;
}

function numericWordCreating(mergedProps: types.username_type.username_props_required_type): string {
    let responseUserName: string = ""
    responseUserName += makingStringWithDataType(types.constType.default_data_types.number, mergedProps.numeric.noOfCount);
    return responseUserName;
}

function specialCharWordCreating(mergedProps: types.username_type.username_props_required_type): string {
    let responseUserName: string = ""
    responseUserName += makingStringWithDataType(types.constType.default_data_types.specialChar, mergedProps.speacial_char.noOfCount);
    return responseUserName;
}

function ratioCalculation(mergedProps: types.username_type.username_props_required_type): number {
    let ratioBasedOnWhatAttributesWeNeed = [mergedProps.alpha.allowAlpha, mergedProps.numeric.allowNumber, mergedProps.speacial_char.allowSpecialChar, mergedProps.domain.allowDomain].filter(i => i == true).length;
    return mergedProps.attributes.maxLength / ratioBasedOnWhatAttributesWeNeed;
}

export {
    usernameGenerator
}

