export default async function fetchUsers() {
  const url = 'http://localhost:3001/admin/manage';
  try {
    const usersRequest = await fetch(url);
    const usersArray = await usersRequest.json();
    return usersArray;
  } catch (error) {
    console.log(error);
    return [];
  }
}
