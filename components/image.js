import Image from "next/image";

function loader({ src, width, quality }) {
  return src;
}

export default function UnprocessedImage(props) {
  return <Image loader={loader} {...props} />;
}
