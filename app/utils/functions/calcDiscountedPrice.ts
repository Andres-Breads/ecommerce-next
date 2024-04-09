export function calcDiscountedPrice(price: number, discount: number | null) {
    if (!discount) return price;

    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;

    return finalPrice;
}