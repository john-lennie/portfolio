import { useState } from 'react';
import { CopyIcon } from "@radix-ui/react-icons"

interface CopyButtonProps {
  textToCopy: string;
}

function CopyButton({ textToCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });
  };

  return (
    <button className='ml-1' onClick={handleCopy}>
      {copied ? 'Copied.' : <CopyIcon  className='h-3 text-blue-700' />}
    </button>
  );
}

export default CopyButton;
