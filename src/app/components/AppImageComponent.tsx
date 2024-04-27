import Image from "next/image";

interface Props {
  name: string;
  width: number;
  height: number;
}

export default function AppImageComponent({ name, width, height }: Props) {
  return (
    <>
      <Image src={name} alt={name} width={width} height={height} priority />
    </>
  );
}
