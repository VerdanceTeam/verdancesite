import { useStaticQuery, graphql } from 'gatsby';

export function useContentfuHomepagelData() {
  const homepageData = useStaticQuery(contentfulQuery);

  const introSection = homepageData.allContentfulIntroSection.edges[0].node;
  const whatWeDoSection =
    homepageData.allContentfulWhatWeDoSection.edges[0].node;
  const workWithUsSection =
    homepageData.allContentfulWorkWithUsSection.edges[0].node;
  const partnerSection = homepageData.allContentfulPartnerSection.edges[0].node;
  const footerSection = homepageData.allContentfulFooterSection.edges[0].node;

  return {
    introSection,
    whatWeDoSection,
    workWithUsSection,
    partnerSection,
    footerSection,
  };
}

const contentfulQuery = graphql`
  query ContentfulContent {
    allContentfulIntroSection {
      edges {
        node {
          logo {
            file {
              url
            }
          }
          pixelatedLogo {
            file {
              url
            }
          }
          id
          largeText
          smallText
          icon {
            file {
              url
            }
          }
          cta {
            cta
          }
          downArrow {
            file {
              url
            }
          }
        }
      }
    }

    allContentfulWhatWeDoSection {
      edges {
        node {
          smallText
          largeText
          columnOneIcon {
            file {
              url
            }
          }
          columnOneTitle
          columnOneBody {
            columnOneBody
          }
          columnTwoIcon {
            file {
              url
            }
          }
          columnTwoTitle
          columnTwoBody {
            columnTwoBody
          }
          columnThreeIcon {
            file {
              url
            }
          }
          columnThreeTitle
          columnThreeBody {
            columnThreeBody
          }
        }
      }
    }

    allContentfulWorkWithUsSection {
      edges {
        node {
          largeText
          smallText {
            smallText
          }
          image {
            file {
              url
            }
          }
          dividerLine {
            file {
              url
            }
          }
          rightArrow {
            file {
              url
            }
          }
        }
      }
    }

    allContentfulPartnerSection {
      edges {
        node {
          title
          partnerLogos {
            id
            title
            file {
              url
            }
          }
        }
      }
    }

    allContentfulFooterSection {
      edges {
        node {
          largeText
          smallText {
            smallText
          }
          image {
            file {
              url
            }
          }
          cta {
            cta
          }
        }
      }
    }
  }
`;
