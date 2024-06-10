export async function getProducts() {
  const resp = await fetch("http://localhost:3001/products");
  const products = await resp.json();
  return products;
}

export async function getBasket() {
  const resp = await fetch("http://localhost:3001/basket");
  const basket = await resp.json();
  return basket;
}
