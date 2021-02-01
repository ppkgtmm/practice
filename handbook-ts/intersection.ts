// An intersection type combines multiple types into one

interface Data{
    data: string;

    // error: number; // error, ts cannot select final type
    // error: any; // win other types
    // error: unknown; // loose other types

    error: null;
}

interface CustomError{
    success: boolean;
    error: string | null;
}

// if there are duplicate props, prop type that occurr in majority is used
type CustomResponse = Data & CustomError;

let response: CustomResponse = { data: 'there is some data', error: null, success: true };
console.log(response);
