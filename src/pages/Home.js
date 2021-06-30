import React from 'react';
import styled from 'styled-components';
import Button from '../components/Buttons/Button';
import Hero from '../components/Heros/Hero';
import Divider from '../components/Dividers/Divider';
import Headline from '../components/Headlines/Headline';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../components/Logos/Logo';
import Container from '../components/Containers/Container';
import Accordion from '../components/Accordions/Accordion';

const StyledHome = styled.div`
  background: ${({
    theme: {
      colors: { secondaryColor, secondaryHex },
    },
  }) => `radial-gradient( ${secondaryHex}00, ${secondaryColor})`};

  color: ${(props) => props.theme.colors.primaryColor};
  font-family: ${(props) => props.theme.fonts.primaryFont.font};
  font-weight: ${(props) => props.theme.fonts.primaryFont.fontWeight};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* height: 100vh; */
  & .HomeLogo {
    position: absolute;
    top: 16px;
    left: 48px;
  }
  & .icon {
    margin-left: 16px;
    margin: auto auto auto 12px;
  }
  & .info {
    ${({
      theme: {
        colors: { primaryColor, secondaryColor },
      },
    }) => {
      return `background: ${primaryColor}; color: ${secondaryColor}`;
    }};
    /* display: flex;
    justify-content: center;
    height: 90vh; */
  }
`;

const infoItems = [
  {
    question: 'What is the purpose of this website?',
    answer:
      'This is a home website to test and display the current state of the Sakura Seeds Library.',
  },
  {
    question: 'Why does it look different every time I reload the page?',
    answer:
      'Normally changing how your website looks on every reload is frowned apon. However, because this website exists strictly to test and showcase the library, I have provided a list of preset styles that will randomly be selected every time the user reloads the page. Additionally, the user can manually override the primary and secondary fonts and colors using the menu in the top left.',
  },
  {
    question: 'What is the Sakura Seeds Library?',
    answer:
      'Sakura Seeds is a collection of components developed by Silas Cundiff of Silvanus Designs. They provide their base styles, can be provided a theme, and some styles can be overriden by the user.',
  },
  {
    question: 'How can I use Sakura Seeds?',
    answer:
      'Sakura Seeds is currently under active development. I am hard at work developing the base version that can be released to the public. Until then, you can track its development on ',
    linkLabel: 'gibhub',
    linkURL: 'https://github.com/SilasCundiff/sakura-blossoms',
  },
  {
    question: 'Why are you making a component library?',
    answer:
      "I love making components that have a lot of cool micro interactions and that are very robust and don't break layouts. However, a lot of times when I work on a project, I only have a limited amount of time to work on it, and it means I have to spend most of the time developing components I have already written several times, and less time making fun animations and interactions. I decided that making a component library would be the best solution. Sakura Seeds lets me have a library of resuable components, and when I'm not actively building a project with them, I can improve their micro interactions, or add additional components.",
  },
];

function Home() {
  return (
    <StyledHome>
      <Hero>
        <Logo className='HomeLogo' height='32px' />

        <Headline>
          <Headline.Maintext>Grow Your Dreams.</Headline.Maintext>
          <Headline.Subtext>
            We build beautiful components you can use in your next website.
          </Headline.Subtext>
          <Headline.CTA>
            <Button inverted size='medium'>
              <a href='#info'>
                Learn More
                <FontAwesomeIcon
                  className='icon'
                  icon={faLongArrowAltRight}
                  size='lg'
                />
              </a>
            </Button>
          </Headline.CTA>
        </Headline>
      </Hero>
      <Divider direction='left' />
      <Container id='info' className='info'>
        <Container size='sm' id='accordionWrapper' className='accordionWrapper'>
          <Accordion items={infoItems} />
        </Container>
      </Container>
    </StyledHome>
  );
}

export default Home;
