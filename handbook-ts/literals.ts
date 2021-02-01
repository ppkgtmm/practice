// narrowing possible var value
let easing: 'ease-in' | 'ease-out' | 'ease-in-out';

// easing = 'easy' // error

easing = 'ease-out';

function ease(easeType: 'ease-in'): void;
function ease(easeType: 'ease-out'): void;
function ease(easeType: 'ease-in-out'): void;
function ease(easeType: string): void{
    switch (easeType) {
        case 'ease-in':
            console.log(`this is going to ${easeType}`)
            break;
        case 'ease-out':
            console.log(`this will ${easeType}`)
            break
        case 'ease-in-out':
            console.log(`this probably ${easeType}`)
            break
        default:
            console.log(`unknown ease type`)
            break;
    }
}

ease('ease-out');
ease('ease-in');
ease('ease-in-out');

// ease('easy'); // error

interface ValidationSuccess {
    isValid: true;
    reason: null;
}
  
interface ValidationFailure {
    isValid: false;
    reason: string;
}
  
type ValidationResult = ValidationSuccess | ValidationFailure;
// if isValid = true reason has to be null
// const result: ValidationResult = { isValid: true, reason: 'no errors'}; // error
