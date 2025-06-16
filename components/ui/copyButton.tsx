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
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <button className='text-blue-700 text-base flex items-center justify-between w-full' onClick={handleCopy}>
      {copied ? 'Copied.' : textToCopy }
      {/* <CopyIcon className='w-[10vw] h-[10vw] md:w-[9vw] md:h-[9vw]' /> */}
    </button>
  );
}

export default CopyButton;
