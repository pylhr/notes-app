import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const markdownContent = `
# Title

## Subtitle

### Section

#### Subsection

**Bold text**

*Italic text*

***Bold and Italic text***

- Bullet point
- Another bullet point

1. Numbered list item
2. Another numbered list item

[Link text](http://example.com)

![Image alt text](http://example.com/image.jpg)

> Blockquote

\`Inline code\`

\`\`\`python
# Code block
print("Hello, World!")
\`\`\`

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Row 1    | Data 1   | Data 2   |
| Row 2    | Data 3   | Data 4   |

Horizontal rule:

---

Inline HTML:

<div style="color: red;">This is red text.</div>
`;

const MarkdownNotes = () => {
  return (
    <div className="prose prose-invert prose-lg p-6 max-w-3xl mx-auto bg-gray-900 text-white rounded-lg shadow-md">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default MarkdownNotes;
