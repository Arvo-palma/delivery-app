export default async function fetchSales() {
  const url = 'http://localhost:3001/seller/orders'; // inserir rota correta!
  try {
    const salesRequest = await fetch(url);
    const salesArray = await salesRequest.json();
    return salesArray;
  } catch (error) {
    console.log(error);
    return [];
  }
}
