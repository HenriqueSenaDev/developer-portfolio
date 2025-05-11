export type Messages = {
  navigation: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    h1: string;
    h1Completions: {
      first: string;
      second: string;
      third: string;
    };
    h2: string;
    h2Completions: {
      first: string;
      second: string;
      third: string;
    };
    paragraph: string;
    projectsCta: string;
    contactCta: string;
    developerImgAlt: string;
  };
  about: {
    aboutMe: {
      title: string;
      paragraphs: {
        first: {
          text1: string;
          strong: string;
          text2: string;
        };
        second: {
          strong1: string;
          text1: string;
          strong2: string;
          text2: string;
        };
        third: {
          text1: string;
          strong1: string;
          text2: string;
          strong2: string;
          text3: string;
        };
      };
    };
    background: {
      title: string;
      bulletPoints: {
        first: string;
        second: string;
        third: string;
        fourth: string;
      };
    };
    stacks: {
      title: string;
    };
    resumeDownload: string;
  };
};
