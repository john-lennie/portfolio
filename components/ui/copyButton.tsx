import { useState } from 'react';

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
}

function CopyButton({ textToCopy, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center justify-between w-full ${className}`}
    >
      {copied ? 'Copied.' : textToCopy}
      {/* <CopyIcon className='w-[10vw] h-[10vw] md:w-[9vw] md:h-[9vw]' /> */}
    </button>
  );
}

export default CopyButton;
