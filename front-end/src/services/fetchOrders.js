export default async function fetchOrders() {
  const url = 'http://localhost:3001/orders';
  try {
    const ordersRequest = await fetch(url);
    const ordersArray = await ordersRequest.json();
    return ordersArray;
  } catch (error) {
    console.log(error);
    return [];
  }
}
