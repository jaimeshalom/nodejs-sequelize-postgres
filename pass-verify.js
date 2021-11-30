const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = '123';
  const hash = '$2b$10$nVeaCmPP0yrEj/.Mwb7ziOrUNXtiGsxoKTgGd0EL4u/0auI14bVTu';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
