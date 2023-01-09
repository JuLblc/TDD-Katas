
const isMultipleOf = (number:number) => (divider:number): Boolean => {
    return number % divider === 0
};

export const replaceNumber = (number:number): string => {
    let result = ""

    if (isMultipleOf(number)(3)){
        result += "Fizz"
    }

    if (isMultipleOf(number)(5)){
        result +=  "Buzz"
    }

    return result || `${number}`
};

const range = (n:number):number[] => Array.from({length:n}, (_, i) => i + 1)

export const fizzbuzz = (n:number): string[] => {
   return range(n).map(replaceNumber)
};
