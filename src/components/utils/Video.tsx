export default ({
  src,
  className = "",
  ...props
}: {
  src: string;
  className?: string;
  [x: string]: any;
}) => {
  const title = src.split(".")[0];
  // poster={`/videos/${title}.jpg`}
  return (
    <video className={className} {...props}>
      <source src={`/videos/${title}_vp9.webm`} type="video/webm; codecs=vp9" />
      <source src={`/videos/${title}_h264.mp4`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
