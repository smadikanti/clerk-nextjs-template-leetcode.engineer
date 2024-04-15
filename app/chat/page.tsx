'use client';

import { useChat } from 'ai/react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
// Add more language components as needed

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const highlightCode = (content: any ) => {
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    const matches = content.match(codeBlockRegex);

    if (matches) {
      const highlightedCode = matches.map((match: any) => {
        const [, language, code] = match.split('\n');
        const highlightedCodeBlock = Prism.highlight(code, Prism.languages[language], language);
        return `<pre class="language-${language}"><code>${highlightedCodeBlock}</code></pre>`;
      });

      return <div dangerouslySetInnerHTML={{ __html: highlightedCode.join('') }} />;
    }

    return <p>{content}</p>;
  };

  return (
    <main className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl mx-auto space-y-4">
          {messages.map((m, index) => (
            <div key={index} className="flex">
              <div
                className={`${
                  m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                } rounded-lg p-3`}
              >
                <span className="font-bold">{m.role === 'user' ? 'User' : 'AI'}</span>:{' '}
                {m.role === 'assistant' ? highlightCode(m.content) : <p>{m.content}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 bg-gray-100">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="flex">
            <input
              id="question"
              placeholder="Type your question here..."
              value={input}
              onChange={handleInputChange}
              className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}