import { motion } from "framer-motion";
import Image from "../Image";

export default function ScrollingImage(
  props: React.ComponentProps<typeof Image>
) {
  return (
    <Image
      {...props}
      as={motion.img}
      whileHover={{
        y: "calc(100% - 16rem)",
        transition: { type: "tween", ease: "linear", duration: 15 },
      }}
      whileTap={{
        y: "calc(100% - 16rem)",
        transition: { type: "tween", ease: "linear", duration: 15 },
      }}
    />
  );
}
