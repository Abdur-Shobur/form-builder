'use client';
import { useState } from 'react';

export function CopyClipboardHandler() {
  const [copied, setCopied] = useState(false);
  const [copy_data, set_copy_data] = useState('');

  const click_button_handler = (e: any) => {
    set_copy_data(e);
    navigator.clipboard.writeText(e);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return { copy_data, set_copy_data, copied, click_button_handler };
}

/* use example
--------------------

const {copy_data, set_copy_data, copied, click_button_handler}=CopyClipboardHandler()

handler
onClick={() => click_button_handler(text)}

icon
{!copied ? <MdContentCopy /> : <RiCheckboxMultipleFill />}
--------------------
*/
