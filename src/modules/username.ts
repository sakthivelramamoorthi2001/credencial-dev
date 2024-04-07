import { throws } from "assert";
import {
  defaultUserNameProps,
  mergedDefaultUserNameProps,
} from "../constant/username";
import * as types from "../typs/index";
import { makingStringWithDataType, randomNumberBetweenMinMax } from "../utils";

const usernameGenerator = (props: types.username_type.username_props_type) => {
  const mergedProps: types.username_type.username_props_required_type =
    mergedDefaultUserNameProps(defaultUserNameProps, props);

  let responce: string = "";

  validationChencking(mergedProps);

  if (mergedProps.alpha.allowAlpha) {
    responce += alphaBeticWordCreating(mergedProps);
  }

  if (mergedProps.numeric.allowNumber) {
    responce += numericWordCreating(mergedProps);
  }

  if (mergedProps.special_char.allowSpecialChar) {
    responce += specialCharWordCreating(mergedProps);
  }

  responce = responce.substring(
    0,
    randomNumberBetweenMinMax(
      mergedProps.attributes.maxLength,
      mergedProps.attributes.minLength
    )
  );

  if (mergedProps.domain.allowDomain) {
    responce += domainCreating(mergedProps);
  }

  return responce;
};

function validationChencking(
  mergedProps: types.username_type.username_props_required_type
) {
  let overAllNoOfCount: number = 0;

  if (mergedProps.alpha.allowAlpha) {
    overAllNoOfCount += mergedProps.alpha.noOfCount;
  }
  if (mergedProps.numeric.allowNumber) {
    overAllNoOfCount += mergedProps.numeric.noOfCount;
  }
  if (mergedProps.special_char.allowSpecialChar) {
    overAllNoOfCount += mergedProps.special_char.noOfCount;
  }

  // if (mergedProps.attributes.maxLength < overAllNoOfCount) {
  // mergedProps.attributes.maxLength = overAllNoOfCount;
  // }

  if (mergedProps.attributes.minLength > overAllNoOfCount) {
    throw new Error("each attribute minimum total is attribute minmum length");
  }

  if (mergedProps.attributes.minLength > mergedProps.attributes.maxLength) {
    throw new Error("check the attributes minimum length ");
  }
}

function alphaBeticWordCreating(
  mergedProps: types.username_type.username_props_required_type
): string {
  if (
    (mergedProps.alpha.lowerCase && !mergedProps.alpha.uperCase) ||
    (!mergedProps.alpha.lowerCase && mergedProps.alpha.uperCase)
  ) {
    return makingStringWithDataType(
      mergedProps.alpha.lowerCase
        ? types.constType.default_data_types.stringWithLowerCase
        : types.constType.default_data_types.stringWithUpperCase,
      mergedProps.alpha.noOfCount || mergedProps.attributes.maxLength,
      mergedProps.alpha.requiredChar,
      mergedProps.alpha.NotRequiredChar
    );
  } else {
    return makingStringWithDataType(
      types.constType.default_data_types.StringWithLowerAndUpperCase,
      mergedProps.alpha.noOfCount || mergedProps.attributes.maxLength,
      mergedProps.alpha.requiredChar,
      mergedProps.alpha.NotRequiredChar
    );
  }
}

function numericWordCreating(
  mergedProps: types.username_type.username_props_required_type
): string {
  return makingStringWithDataType(
    types.constType.default_data_types.number,
    mergedProps.numeric.noOfCount || mergedProps.attributes.maxLength,
    mergedProps.numeric.requiredNumber,
    mergedProps.numeric.NotRequiredNumber
  );
}

function specialCharWordCreating(
  mergedProps: types.username_type.username_props_required_type
): string {
  return makingStringWithDataType(
    types.constType.default_data_types.specialChar,
    mergedProps.special_char.noOfCount || mergedProps.attributes.maxLength,
    mergedProps.special_char.requiredChar,
    mergedProps.special_char.NotRequiredChar
  );
}

function domainCreating(
  mergedProps: types.username_type.username_props_required_type
) {
  if (mergedProps.domain.yourDomain) {
    return mergedProps.domain.defaultDomain;
  }
  if (mergedProps.domain.defaultDomain != null) {
    return types.constType.default_domain[mergedProps.domain.defaultDomain];
  }
}

export { usernameGenerator };
