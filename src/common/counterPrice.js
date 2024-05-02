export function calcAllProductCount(arr) {
    if (arr.length === 0) return 0;
    let count = 0;
    arr.forEach(item => {
        count += +item.count;
    });
    return count;
}

export function calcAllProductPrice(arr) {
    let count = 0;
    if (arr.length === 0) return 0;
    arr.forEach(item => {
        count += +item.price * item.count;
    });
    return count;
}