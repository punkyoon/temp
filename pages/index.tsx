import styled from '@emotion/styled';
import Image from 'next/image';
import AgreementButton from '~/components/AgreementButton';
import InfiniteSpinImage from '~/components/InfiniteSpinImage';
import TryButton from '~/components/TryButton';

export default function IndexPage() {
  return (
    <Base>
      <h1>안녕하세요</h1>

      <CenterWrapper>
        <InfiniteSpinImage alt='환영하는' imageUrl='/images/2.png' height={400} width={700} />
      </CenterWrapper>

      <Image src="/images/1.png" alt="누누씨1" width="300" height="300" />
      <Image src="/images/3.png" alt="누누씨2" width="300" height="300" />
      <Image src="/images/4.png" alt="누누씨3" width="300" height="300" />
      <Image src="/images/5.png" alt="누누씨4" width="300" height="300" />
      <Image src="/images/6.png" alt="누누씨5" width="300" height="300" />
      <Image src="/images/7.png" alt="누누씨6" width="300" height="300" />
      <Image src="/images/8.png" alt="팬텀1" width="300" height="300" />
      <Image src="/images/9.png" alt="팬텀2" width="300" height="300" />
      <Image src="/images/10.png" alt="으악새1" width="150" height="150" />
      <Image src="/images/11.png" alt="으악새2" width="150" height="150" />
      <Image src="/images/12.png" alt="으악새3" width="150" height="150" />
      <Image src="/images/13.jpeg" alt="누누씨7" width="400" height="400" />
      <Image src="/images/14.jpeg" alt="누누씨8" width="500" height="500" />

      <TryButton />

      <AgreementButton />
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
