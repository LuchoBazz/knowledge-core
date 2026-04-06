const CryptoJS = require("crypto-js");
const fs = require("fs");
const path = require("path");

try {
  const textPath = path.join(process.cwd(), "text.txt");
  const passwordPath = path.join(process.cwd(), "password.txt");

  if (!fs.existsSync(textPath) || !fs.existsSync(passwordPath)) {
    console.error("Error: Make sure to create 'text.txt' and 'password.txt' files in the project root.");
    process.exit(1);
  }

  // trim() is used on the password to avoid hidden line breaks
  const plaintext = fs.readFileSync(textPath, "utf8");
  const password = fs.readFileSync(passwordPath, "utf8").trim();

  const ciphertext = CryptoJS.AES.encrypt(plaintext, password).toString();

  console.log("Ciphertext:\n" + ciphertext);
} catch (error) {
  console.error("Error executing encryption:", error.message);
  process.exit(1);
}
