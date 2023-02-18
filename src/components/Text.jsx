import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import useReplacedText from "../hooks/useReplacedText.jsx";

const Text = ({ children, noTranslate, markdown, className, onClick, searchTerms, changeTerms }) => {
  const { t } = useTranslation();

  const text = noTranslate ? children : t(children);
  const replacedText = useReplacedText(text, searchTerms, changeTerms);

  if (markdown) {
    return (
      <ReactMarkdown className={className} onClick={onClick}>
        {replacedText}
      </ReactMarkdown>
    );
  } else {
    return (
      <div className={className} onClick={onClick}>
        {replacedText}
      </div>
    );
  }
};

export default Text;
