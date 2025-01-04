'use client';
import { Fragment, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Highlight, themes } from 'prism-react-renderer';
import './prism.css';

export  default function Code({ code }) {
  const [displayedCode, setDisplayedCode] = useState('');
  const typingSpeed = 9;

  useEffect(() => {
    setDisplayedCode('');
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < code.length) {
        setDisplayedCode((prev) => prev + code[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [code]);

  return (
    <div className="relative rounded-2xl bg-zinc-900 pl-4 pt-4 ring-1 ring-white/10 backdrop-blur">
      <div className="mt-6 flex items-start px-1 text-sm">
        <Highlight
          code={displayedCode}
          language="javascript"
          theme={{ plain: {}, styles: [] }}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={clsx(className, 'flex pb-6')}
              style={{
                ...style,
                overflowX: 'auto',
                scrollbarWidth: 'none',
              }}
            >
              <code>
                {tokens.map((line, lineIndex) => (
                  <div key={lineIndex} {...getLineProps({ line })}>
                    {line.map((token, tokenIndex) => (
                      <span key={tokenIndex} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </code>
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}
