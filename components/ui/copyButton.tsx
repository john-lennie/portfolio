import { useState } from 'react';
import { CopyIcon } from "@radix-ui/react-icons";

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
}

function CopyButton({ textToCopy, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });
  };

  return (
    <span className='inline-flex items-center space-x-1'>
      <a target="_blank" className="link-primary" href={`mailto:${textToCopy}`}>{textToCopy}</a>
      <button
        aria-label="Copy"
        onClick={handleCopy}
      >
        {copied ? 'Copied.' : <CopyIcon className='w-[1em] h-[1em]' />}
      </button>
    </span>
  );
}

export default CopyButton;
