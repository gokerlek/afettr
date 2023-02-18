import { useState, useEffect } from "react";

function useReplacedText(text, searchItems, changeItems) {
  const [replacedText, setReplacedText] = useState(text);

  useEffect(() => {
    if (!text || !searchItems || !changeItems) return;

    let newReplacedText = text;
    for (let i = 0; i < searchItems.length; i++) {
      const searchItem = searchItems[i];
      const changeItem = changeItems[i];
      newReplacedText = newReplacedText.split(searchItem).join(changeItem);
    }
    setReplacedText(newReplacedText);
  }, [text, searchItems, changeItems]);

  return replacedText;
}

export default useReplacedText;
