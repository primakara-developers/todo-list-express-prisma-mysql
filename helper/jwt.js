import jwt from "jsonwebtoken";

const secret = "abcde";

function generateToken(payload) {
  return jwt.sign(payload, secret);
}

function decodeToken(token) {
  return jwt.verify(token, secret);
}

export { decodeToken, generateToken };
