import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";

const Text = ({ children, noTranslate, markdown, className, onClick }) => {
  const { t } = useTranslation();

  const text = noTranslate ? children : t(children);

  if (markdown) {
    return (
      <ReactMarkdown className={className} onClick={onClick}>
        {text}
      </ReactMarkdown>
    );
  } else {
    return (
      <div className={className} onClick={onClick}>
        {text}
      </div>
    );
  }
};

export default Text;
