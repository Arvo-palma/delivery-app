const jwt = require('jsonwebtoken');

require('dotenv/config');

export default async function jwtValidation() {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) return false;
    const { token } = user;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { role } = decoded.data;
    if (!role) return false;

    return role;
  } catch (error) {
    console.log(error);
    return false;
  }
}

// Exemplo de funções para aplicar na page:
// if (!jwtValidation()) return <Navigate to="/login" />;
// switch (jwtValidation()) {
//   case 'customer':
//     return <Navigate to="/customer/products" />;
//   case 'seller':
//     return <Navigate to="/seller/orders" />;
//   case 'administrator':
//     return <Navigate to="/admin/manage" />;
//   default:
//     return <Navigate to="/login" />;
// }
