export default async function postBasket(data) {
  try {
    await fetch("http://localhost:3001/basket", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (e) {
    console.error(e);
  }
}
