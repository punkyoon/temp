import styled from '@emotion/styled';
import Image from 'next/image';

import customImageLoader from '~/utils/loader';

type Props = {
  alt: string,
  imageUrl: string,
  height: number,
  width: number,
};

export default function InfiniteSpinImage({ alt, imageUrl, height, width  }: Props) {
  return (
    <Base>
      <Image loader={customImageLoader} alt={alt} src={imageUrl} height={height} width={width} />
    </Base>
  );
}

const Base = styled.div`
  animation: rotate_image 6s linear infinite;transform-origin: 50% 50%;
  @keyframes rotate_image{
    100% {
        transform: rotate(360deg);
    }
  }
`;
