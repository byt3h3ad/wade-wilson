import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main title>
        Hi! My name is <br/>
        Wade Wilson
      </SectionTitle>
      <SectionText>
        Ever-quipping mercenary, my healing factor—and big mouth—make me one of the most relentlessly wisecracking heroes in the universe.
      </SectionText>
      <Button onClick= {() => window.location = "https://t.me/byt3h3ad"}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;