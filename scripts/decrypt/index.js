const CryptoJS = require("crypto-js");
const fs = require("fs");
const path = require("path");

try {
  const ciphertextPath = path.join(process.cwd(), "ciphertext.txt");
  const passwordPath = path.join(process.cwd(), "password.txt");

  if (!fs.existsSync(ciphertextPath) || !fs.existsSync(passwordPath)) {
    console.error("Error: Make sure to create 'ciphertext.txt' and 'password.txt' files in the same folder from where you run the script.");
    process.exit(1);
  }

  // trim() is used on password and ciphertext to avoid hidden line breaks
  const ciphertext = fs.readFileSync(ciphertextPath, "utf8").trim();
  const password = fs.readFileSync(passwordPath, "utf8").trim();

  // Attempt to decrypt
  const bytes = CryptoJS.AES.decrypt(ciphertext, password);
  const plaintext = bytes.toString(CryptoJS.enc.Utf8);

  if (!plaintext) {
    throw new Error('Incorrect password or malformed ciphertext');
  }

  console.log("Plaintext:\n\n" + plaintext);
} catch (error) {
  console.error("Error executing decryption:", error.message);
  process.exit(1);
}
