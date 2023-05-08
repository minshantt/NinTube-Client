import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgBar};
  border: 1px solid ${({ theme }) => theme.mainSoft};
  padding: 7% 0.3%;
  border-radius: 12px;
  gap: 12px;
  width: 45%;
  height: 65%;
  max-width: 520px;
  min-width: 220px;
  min-height: 350px;
  max-height: 420px;
  transition: box-shadow 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const LogoTitle = styled.img`
  width: 25%;
  margin-top: -1.5rem;
`;
const TitleSignIn = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-top: -3%;
`;
const InfoTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 4.5%;
`;
const EmailInput = styled.input`
  margin: auto;
  right: 0;
  left: 0;
  width: 46%;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 2% 20% 2% 1.5%;
  font-size: 16px;
  text-align: left;
  background: transparent;
`;
const ForgotEmail = styled.p`
  font-weight: 400;
  font-size: 16px;
  padding: 0.5% 0%;
  width: 68%;
  margin-bottom: 5%;
  cursor: pointer;
  color: ${({ theme }) => theme.signIn};
`;
const LearnMore = styled.span`
  width: 68%;
  font-size: 16px;
  span {
    color: ${({ theme }) => theme.signIn};
    font-weight: 400;
    display: block;
    margin-top: 0.25rem;
    cursor: pointer;
  }
`;
const Button = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4%;
  align-items: center;
  width: 68%;
`;
const CreateButt = styled.p`
  width: 35%;
  background: transparent;
  font-size: 16px;
  font-weight: 400;
  margin-top: 0.2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.signIn};
`;

/* แปลง Hex เป็น Rgba */
function hexToRgba(hex, opacity) {
  hex = hex.replace('#', '');
  /* เอา Hash กับ String ออกด้วย Replace */
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  /* substring => 2 เลขจากฐานสิบ hex 16 คือ decimal convert สตริงเป็นค่า 0-255 */
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

const NextButt = styled.button`
  align-items: center;
  width: 23%;
  padding: 6px 0px;
  border-radius: 3px;
  border: none;
  background-color: ${({ theme }) => theme.subscribe};
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => hexToRgba(theme.subscribe, 0.9)};
  }
`;
const OutsdeForm = styled.div`
  margin-top: 2vh;
  display: flex;
  font-size: 14px;
  font-weight: 00;
`;
const OutsdeFormLeft = styled.div`
  display: flex;
  flex: wrap;
  cursor: pointer;
`;
const OutsdeFormRight = styled.div`
  display: flex;
  gap: 25px;
  margin-left: 23vw;
  cursor: pointer;
  
  @media screen and (max-width: 500px) and (min-width: 276px) {
    display: flex;
    margin-left: 200px;
    gap: 14px;
  }
}`;
const Language = styled.select`
  position: absolute;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 16px;

  option {
    background-color: ${({ theme }) => theme.signIn};
  }
  &:focus {
    outline: none;
  }
`;

const Link = styled.span`
  display: block;
`;

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <LogoTitle src='https://res.cloudinary.com/mmin/image/upload/v1669291157/NinTube/nintubeLogo_vuwtnp.png' />
        <TitleSignIn>Sign in</TitleSignIn>
        <InfoTitle>to continue to NinTube</InfoTitle>
        <EmailInput
          placeholder='Email or phone'
          style={{ textAlign: 'left' }}
        />
        <ForgotEmail>Forgot email?</ForgotEmail>
        <LearnMore>
          Not your computer? Use Guest mode to sign in privately. <br />
          <span> Learn more </span>
        </LearnMore>
        <Button>
          <CreateButt> Create account</CreateButt>
          <NextButt>Next</NextButt>
        </Button>
      </Wrapper>
      <OutsdeForm>
        <OutsdeFormLeft>
          <Language>
            <option value='en-US'>English (United States)</option>
            <option value='zh-CN'>中文(中国)</option>
            <option value='th-TH'>ภาษาไทย</option>
          </Language>
        </OutsdeFormLeft>
        <OutsdeFormRight>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </OutsdeFormRight>
      </OutsdeForm>
    </Container>
  );
};

export default SignIn;
