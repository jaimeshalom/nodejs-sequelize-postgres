const jwt = require('jsonwebtoken');

const secret = 'myCat';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTYzODIyNTY3OH0.-7fB5WBZbQmOFWyHxw5gLHz2NZWJDB6UyCZy70NtrqE';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
