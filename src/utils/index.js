/**
 * This function calculates total price of a new order.
 * @param {Array} products //Products Cart
 * @returns {Number} //Total price
 */

export const totalPrice = (products) => {
    
    let total = 0;
    
    for (let product of products) {
        total += parseInt(product.price, 10);
    }

    return total;
}