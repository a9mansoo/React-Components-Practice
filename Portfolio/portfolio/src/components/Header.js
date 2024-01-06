import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const boxTransform = useRef(null);
  const [currTrans, setTrans] = useState(0);

  useEffect( () => {
    const handleScroll = (e) => {
      let pos = e.target.scrollingElement.scrollTop >= currTrans ? `translateY(${-200}px)` : `translateY(${0}px)`;
      setTrans(e.target.scrollingElement.scrollTop <= 0? 0: e.target.scrollingElement.scrollTop)
      boxTransform.current.style.transform =  pos;
    }

    window.addEventListener('scroll', handleScroll);

    return (() => {
      window.removeEventListener('scroll', handleScroll)
    })

  }, [currTrans])


  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      ref={boxTransform}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map( (social, index) => <a key={index} href={social.url} target="_blank"><FontAwesomeIcon icon={social.icon} size="2x"></FontAwesomeIcon></a>)}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a onClick={handleClick("projects")} href="/#projects">Projects</a>
              <a onClick={handleClick("contactme")} href="/#contact-me">Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
