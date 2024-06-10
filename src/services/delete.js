export default async function deleteBasket(data, id) {
  try {
    await fetch(`http://localhost:3001/basket/${id}`, {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (e) {
    console.error(e);
  }
}
