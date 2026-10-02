import styled from 'styled-components';
import { useScreen } from '../../context/context';

type IntroContainerProps = {
  inlineMargin: string
}
const IntroContainer = styled.section<IntroContainerProps>`
  margin-top: 20px;
  padding: 15px;
  font-family: 'Noto Sans, Helvetica, Arial, sans-serif';
  line-height: 1.5;
  font-size: 1.1rem;
  margin-inline: ${(introContainerProps) => introContainerProps.inlineMargin};
  font-weight: 400;
  color: rgb(51, 51, 51);

  .page-title {
    font-size: 2rem; /* Adjust the font size as needed */
    font-weight: bold;
  }

  header {
    border-bottom: 1px solid rgba(163, 163, 163, 0.3);
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .hr {
    border-block-end: 1px solid rgba(163, 163, 163, 0.3);
  }

  strong {
    font-weight: bold;
  }
`;

const QuoteContainer = styled.div`
  border-left-width: 0.4rem;
  border-left-color: rgb(235, 235, 235);
  border-left: 0.4rem solid rgb(235, 235, 235);
  position: relative;
  left: -1rem;

  p {
    font-size: 1.2rem;
    color: rgb(119, 119, 119);
    padding: 10px;
  }
`;

const Introduction = () => {
  const screenType = useScreen();
  const inlineMargin = screenType === "desktop" ? "1.2rem" : "0";
  return (
    <IntroContainer id='home' inlineMargin={inlineMargin} className='page-content'>
      <header>
        <h1 className="page-title">Hi, I’m Ashish Kumar</h1>
        <div className="hr pb0" />
      </header>
      <p>
        I’m an IT professional based in Bengaluru, India, with an interest in
        software engineering, web and mobile development, and emerging
        technologies. This portfolio shares my skills, services, and background.
        If you’d like to connect or collaborate, please get in touch.
      </p>
      <QuoteContainer>
        <p style={{margin: 0}}>“If someone is in need, lend them a helping hand. Do not wait for a thank you.”</p>
      </QuoteContainer>
    </IntroContainer>
  );
};

export default Introduction;
