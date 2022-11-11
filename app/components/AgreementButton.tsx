import styled from '@emotion/styled';

export default function AgreementButton() {
  return (
    <Base>
      <YesButton>?참여하기</YesButton>
      <NoButton>?참여하기?</NoButton>
    </Base>
  );
}

const Base = styled.div``;
const YesButton = styled.button`
  background-color: #a10325;
  cursor: pointer;
  font-size: 10px;
`;
const NoButton = styled.button`
  background-color: #00ff26;
  cursor: pointer;
  font-size: 68px;
`;
