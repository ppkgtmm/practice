// An intersection type combines multiple types into one

interface Data{
    data: string;
}

interface CustomError{
    success: boolean;
    error: string | null;
}

type CustomResponse = Data & CustomError;

let response: CustomResponse = { data: 'there is some data', error: null, success: true };
console.log(response);
