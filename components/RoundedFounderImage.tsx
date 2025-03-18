import Image from 'next/image';
import founderImage from "@/assets/images/founder.jpeg"

const RoundedFounderImage = () => {
  return (
    <>
      <Image
        src={founderImage}
        alt="Dummy Image"
        className="rounded-full aspect-square object-cover"
      />
    </>
  );
};

export default RoundedFounderImage;