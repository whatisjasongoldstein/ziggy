import Image from "next/image";

function loader({ src, width, quality }) {
  return src;
}

export default function UnprocessedImage(props) {
  return <Image unoptimized={true} loader={loader} {...props} />;
}
