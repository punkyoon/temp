import styled from '@emotion/styled';
import Image from 'next/image';

import AgreementButton from '~/components/AgreementButton';
import InfiniteSpinImage from '~/components/InfiniteSpinImage';
import TryButton from '~/components/TryButton';
import { imageBasePath } from '~/utils/globalConfig';

export default function IndexPage() {
  return (
    <Base>
      <CenterWrapper>
        <InfiniteSpinImage alt='환영하는' imageUrl={`${imageBasePath}/images/2.png`} height={400} width={700} />
      </CenterWrapper>

      <NunuWrapper>
        <Image src={`${imageBasePath}/images/1.png`} alt="누누씨1" width="300" height="300" />
        <Image src={`${imageBasePath}/images/3.png`} alt="누누씨2" width="300" height="300" />
        <Image src={`${imageBasePath}/images/4.png`} alt="누누씨3" width="300" height="300" />
      </NunuWrapper>
      <PhantomWrapper>
        <Image src={`${imageBasePath}/images/8.png`} alt="팬텀1" width="300" height="300" />
        <Image src={`${imageBasePath}/images/9.png`} alt="팬텀2" width="300" height="300" />
      </PhantomWrapper>
      <Image src={`${imageBasePath}/images/5.png`} alt="누누씨4" width="300" height="300" />
      <Image src={`${imageBasePath}/images/6.png`} alt="누누씨5" width="300" height="300" />
      <Image src={`${imageBasePath}/images/7.png`} alt="누누씨6" width="300" height="300" />
      <Image src={`${imageBasePath}/images/10.png`} alt="으악새1" width="150" height="150" />
      <Image src={`${imageBasePath}/images/11.png`} alt="으악새2" width="150" height="150" />
      <Image src={`${imageBasePath}/images/12.png`} alt="으악새3" width="150" height="150" />
      <Image src={`${imageBasePath}/images/13.jpeg`} alt="누누씨7" width="400" height="400" />
      <Image src={`${imageBasePath}/images/14.jpeg`} alt="누누씨8" width="500" height="500" />

      <LeftBottomWrapper>
        <TryButton />
      </LeftBottomWrapper>

      <CenterBottomWrapper>
        <AgreementButton />
      </CenterBottomWrapper>
    </Base>
  );
}

const Base = styled.div``;
const CenterWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;
const LeftBottomWrapper = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
`;
const CenterBottomWrapper = styled.div`
  bottom: 5%;
  left: 50%;
  position: absolute;
  right: 50%;
  width: 100%;
`;

const NunuWrapper = styled.div`
  position: absolute;
  top: 10%;
  left: 20%;
`;
const PhantomWrapper = styled.div`
  position: absolute;
  left: 8%;
  top: 60%;
`;