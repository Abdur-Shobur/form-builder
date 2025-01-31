import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FieldType, TailwindFieldType } from '../types';
import { generateFormHandlerCode2 } from '../lib/generate-ant-design-code';
import { generateTailwindCodeGenerate } from '../lib/generate-tailwind-design-code';

export default function CodeView({ fields }: { fields: FieldType[] }) {
  return (
    <SyntaxHighlighter language="jsx" style={vscDarkPlus} showLineNumbers>
      {generateFormHandlerCode2(fields).trim()}
    </SyntaxHighlighter>
  );
}
export function CodeViewTailwind({ fields }: { fields: TailwindFieldType[] }) {
  return (
    <SyntaxHighlighter language="jsx" style={vscDarkPlus} showLineNumbers>
      {generateTailwindCodeGenerate(fields).trim()}
    </SyntaxHighlighter>
  );
}
