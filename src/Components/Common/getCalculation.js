export function getCommonCount(arr){
let count =0
arr.forEach(element => {
    count = +count + +element.count
});
return count
}

export function getCommonPrice(arr){
    let count = 0
    arr.forEach(element => {
        count = count + +element.price*+element.count
    });
    return count
}

export function getModalPrice(price, number){
    let count = price*number
    return count
}