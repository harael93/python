import React from "react";
import CodeSnippet from "./module-1-basics/CopySnip.jsx";

const MarkdownRenderer = ({ content }) => {
  if (!content) return <div>No content available</div>;

  const processMarkdown = (markdown) => {
    // Split by code blocks first
    const parts = markdown.split(/(```[\s\S]*?```)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('```')) {
        // Handle code blocks
        const lines = part.split('\n');
        const language = lines[0].replace('```', '').trim() || 'text';
        const code = lines.slice(1, -1).join('\n');
        return <CodeSnippet key={index} code={code} language={language} />;
      } else {
        // Handle regular markdown
        return (
          <div 
            key={index}
            className="markdown-content"
            dangerouslySetInnerHTML={{ 
              __html: processInlineMarkdown(part) 
            }}
          />
        );
      }
    });
  };

  const processInlineMarkdown = (text) => {
    return text
      // Headers
      .replace(/^### (.*$)/gm, '<h3 style="color: #1f2937; margin: 1.5rem 0 1rem 0; font-size: 1.25rem; font-weight: 600;">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 style="color: #1f2937; margin: 2rem 0 1rem 0; font-size: 1.5rem; font-weight: 700;">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 style="color: #1f2937; margin: 2rem 0 1.5rem 0; font-size: 2rem; font-weight: 800;">$1</h1>')
      
      // Bold and italic
      .replace(/\*\*(.*?)\*\*/g, '<strong style="font-weight: 600; color: #1f2937;">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em style="font-style: italic;">$1</em>')
      
      // Inline code
      .replace(/`([^`]+)`/g, '<code style="background: #f3f4f6; padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-family: monospace; font-size: 0.875rem; color: #dc2626;">$1</code>')
      
      // Hyperlinks: [text](url)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; font-weight: 500;">$1</a>')
      
      // Lists
      .replace(/^- (.*$)/gm, '<li style="margin: 0.5rem 0; padding-left: 0.5rem;">$1</li>')
      .replace(/(<li.*<\/li>)/gs, '<ul style="list-style-type: disc; margin: 1rem 0; padding-left: 1.5rem;">$1</ul>')
      
      // Paragraphs
      .replace(/\n\n/g, '</p><p style="margin: 1rem 0; line-height: 1.6; color: #374151;">')
      .replace(/^(?!<[h1-6]|<ul|<li|<code|<strong|<a)([^\n]+)$/gm, '<p style="margin: 1rem 0; line-height: 1.6; color: #374151;">$1</p>')
      
      // Clean up multiple tags
      .replace(/<\/ul>\s*<ul[^>]*>/g, '')
      .replace(/<\/p>\s*<p[^>]*>\s*<\/p>/g, '</p>')
      
      // Line breaks
      .replace(/\n/g, '<br />');
  };

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '1rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      lineHeight: '1.6'
    }}>
      {processMarkdown(content)}
    </div>
  );
};

export default MarkdownRenderer;