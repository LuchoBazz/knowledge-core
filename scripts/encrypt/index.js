const CryptoJS = require("crypto-js");
const fs = require("fs");
const path = require("path");

try {
  const textPath = path.join(process.cwd(), "text.txt");
  const passwordPath = path.join(process.cwd(), "password.txt");

  if (!fs.existsSync(textPath) || !fs.existsSync(passwordPath)) {
    console.error("Error: Asegúrate de crear los archivos 'text.txt' y 'password.txt' en la raíz del proyecto.");
    process.exit(1);
  }

  // Se usa trim() en el password para evitar saltos de línea ocultos
  const plaintext = fs.readFileSync(textPath, "utf8");
  const password = fs.readFileSync(passwordPath, "utf8").trim();

  const ciphertext = CryptoJS.AES.encrypt(plaintext, password).toString();

  console.log("Ciphertext:\n" + ciphertext);
} catch (error) {
  console.error("Error ejecutando la encriptación:", error.message);
  process.exit(1);
}
