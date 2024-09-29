---
sidebar_position: 1
title: PDF Processing
sidebar_label: PDF Processing
---

## Remove PDF Password Protection

```python
import PyPDF2

def remove_pdf_password(input_pdf_path, output_pdf_path, password):
    with open(input_pdf_path, "rb") as pdf_file:
        reader = PyPDF2.PdfReader(pdf_file)
        if reader.is_encrypted:
            reader.decrypt(password)
            writer = PyPDF2.PdfWriter()
            for page_num in range(len(reader.pages)):
                writer.add_page(reader.pages[page_num])
            with open(output_pdf_path, "wb") as output_pdf_file:
                writer.write(output_pdf_file)
            print(f"Password-free PDF saved at: {output_pdf_path}")
        else:
            print("The PDF file is not password protected.")

input_pdf = "input.docs.pdf"
output_pdf = "output.docs.pdf"
password = "secret_password"

remove_pdf_password(input_pdf, output_pdf, password)
```

### Explanation

This Python script removes the password protection from a PDF file and saves the unprotected version. Below is a detailed breakdown of the functionality:
- PyPDF2: The library used to manipulate PDF files in Python.
- `remove_pdf_password(input_pdf_path, output_pdf_path, password)`: This function takes three parameters:
 - `input_pdf_path`: The file path of the password-protected PDF.
 - `output_pdf_path`: The file path where the unprotected PDF will be saved.
 - `password`: The password required to unlock the PDF.
- `reader.is_encrypted`: Checks whether the PDF file is password protected.
- `reader.decrypt(password)`: Decrypts the PDF using the provided password.
- `writer.add_page(reader.pages[page_num])`: Adds each page of the original PDF to a new PDF document.
- `writer.write(output_pdf_file)`: Writes the unprotected PDF to the specified output file.
