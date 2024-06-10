export default async function putBasket(data, id) {
  try {
    await fetch(`http://localhost:3001/basket/${id}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (e) {
    console.error(e);
  }
}
