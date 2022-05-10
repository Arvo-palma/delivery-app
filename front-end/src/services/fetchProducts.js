export default async function fetchProducts() {
  const url = 'http://localhost:3001/customer/products';
  try {
    const productsRequest = await fetch(url);
    const productsArray = await productsRequest.json();
    return productsArray;
  } catch (error) {
    console.log(error);
    return [];
  }
}
