import * as types from '../typs/index';


function ratioFinding(maxLength: number, minLength: number, ratio: number) {
    return maxLength / ratio
}

function randomCharCreating(): { numbers: number, specialChar: string, stringWithLowerCase: string, stringWithUpperCase: string, StringWithLowerAndUpperCase: string } {
    let letters = ("abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ");
    let numbres = "1234567890";
    let specialChar = "!@#$%^&*()-_+={}[];:'\",.<>/\\|`~?"

    let random = (arr: string): string => {
        return arr[Math.floor(Math.random() * arr.length)]
    }

    return {
        numbers: Number(random(numbres)),
        stringWithLowerCase: random(letters).toLowerCase(),
        stringWithUpperCase: random(letters).toUpperCase(),
        StringWithLowerAndUpperCase: random(letters),
        specialChar: random(specialChar),
    }
}


function makingStringWithDataType(dataType: types.constType.default_data_types, size: number): string {
    let response: string = "";

    for (let i = 1; i <= size; i++) {
        let default_data_types:Record<types.constType.default_data_types, number | string > = {
            [types.constType.default_data_types.number]:randomCharCreating().numbers,
            [types.constType.default_data_types.stringWithUpperCase]:randomCharCreating().stringWithUpperCase,
            [types.constType.default_data_types.stringWithLowerCase]:randomCharCreating().stringWithLowerCase,
            [types.constType.default_data_types.StringWithLowerAndUpperCase]:randomCharCreating().StringWithLowerAndUpperCase,
            [types.constType.default_data_types.specialChar]:randomCharCreating().specialChar
        }
        response += default_data_types[dataType]
    }

    return response;

}

export {
    makingStringWithDataType,
    ratioFinding
}