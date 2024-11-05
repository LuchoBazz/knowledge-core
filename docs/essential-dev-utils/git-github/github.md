---
sidebar_position: 2
title: Github Utils
sidebar_label: Github Utils
---

## Documentation for GitHub Formatting Notes

![Example 1](https://github.com/user-attachments/assets/d07ebcfe-d99a-4d0c-ade9-427987983e28)
![Example 2](https://github.com/user-attachments/assets/6463d24a-dd7e-49e3-afbd-76b5ea626c59)

```text
> [!NOTE]  
> Useful information that users should know, even when skimming content.

> [!TIP]  
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]  
> Key information users need to know to achieve their goal.

> [!WARNING]  
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]  
> Advises about risks or negative outcomes of certain actions.

The background color is `#ffffff` for light mode and `#000000` for dark mode.
```

### Explanation
This section provides Markdown formatting blocks for presenting different types of notes and warnings in documentation. Each block has a specific purpose and helps guide readers to the most relevant information. Here’s a breakdown:

- `[!NOTE]`: Indicates useful information that is relevant but non-critical.
- `[!TIP]`: Offers practical advice or shortcuts for enhanced efficiency.
- `[!IMPORTANT]`: Highlights essential information to ensure user success.
- `[!WARNING]`: Emphasizes critical information to prevent user errors.
- `[!CAUTION]`: Warns users about potential negative consequences.

### Styling Guidelines
In documentation using these blocks, the background color adapts based on the mode:
- **Light Mode**: Background color is `#ffffff`.
- **Dark Mode**: Background color is `#000000`.

These blocks are particularly helpful for creating structured and user-friendly documentation, allowing readers to quickly identify key points and actionable advice.

### Reference
For additional Markdown formatting options, see the [GitHub documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).


## Using Details Tag in Markdown

```html
<details>
<summary>CLICK ME</summary>

...
</details>
```

This section can be expanded or collapsed, providing a clean way to organize content. The `details` HTML tag is beneficial for enhancing readability and user experience by allowing users to toggle the visibility of additional information.

### Explanation
The usage of the `details` tag is straightforward. Here’s how it functions:
- `<details>`: This tag creates a disclosure widget from which the user can obtain additional information or controls.
- `<summary>`: This tag specifies a summary or heading for the `details` content. It is always visible, serving as a toggle for the expandable section.
- The content within the `details` tag will be hidden by default and can be revealed by clicking on the summary.

