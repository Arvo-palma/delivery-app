const NAME_SIZE = 12;
const PASSWORD_SIZE = 6;
const EMAIL_REGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const validateAdminCreate = (name, email, password, role) => {
  if (name.length < NAME_SIZE) return false;
  if (!(EMAIL_REGEX.test(email))) return false;
  if (password.length < PASSWORD_SIZE) return false;
  if (!role) return false;
  return true;
};

export default validateAdminCreate;
