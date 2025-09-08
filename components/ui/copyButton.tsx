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
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className='inline-flex items-center space-x-1 link-primary'>
      <a target="_blank" className="link-primary" href={`mailto:${textToCopy}`}>{textToCopy}</a>
      <button
        onClick={handleCopy}
        className={`${className}`}
      >
        {copied ? 'Copied.' : <CopyIcon />}
        {/* <CopyIcon className='w-[10vw] h-[10vw] md:w-[9vw] md:h-[9vw]' /> */}
      </button>
    </div>
  );
}

export default CopyButton;
