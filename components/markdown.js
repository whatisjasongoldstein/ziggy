import { Converter } from "showdown";

const converter = new Converter();

export default function Markdown({ children }) {
  const html = converter.makeHtml(children);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
