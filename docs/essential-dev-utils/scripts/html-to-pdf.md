---
sidebar_position: 5
title: HTML to PDF
sidebar_label: HTML to PDF
---


## Generating PDF from HTML

To generate a PDF file from an HTML document, the `WeasyPrint` library can be utilized. First, ensure that the library is installed via pip:

```bash
pip install WeasyPrint
```

### Explanation

After converting the PDF to HTML, the `WeasyPrint` library can be used to generate a PDF file from an HTML document. This library provides a straightforward interface for rendering HTML to PDF, ensuring that the output maintains the original document's structure and styling.

The following Python code illustrates how to convert an HTML file to a PDF document using WeasyPrint:

```python
from weasyprint import HTML

# Path to the HTML file
input_file = 'output.html'

# Generate the PDF from the HTML file
HTML(input_file).write_pdf('output.pdf')

print("PDF generated successfully.")
```
