import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import Markdown from 'marked-react';
import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import * as styles from './homepage.module.scss';

import heroImage from '../../images/verdance-hero.png';

const Homepage = () => {
  const dataHomepage = useStaticQuery(graphql`
    {
      allContentfulIntroSection {
        edges {
          node {
            logo {
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
          }
        }
      }
      allContentfulPartnerSection {
        edges {
          node {
            title
            partnerLogos {
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
  `);

  const homepageIntroSection =
    dataHomepage.allContentfulIntroSection.edges[0].node;
  const homepageWhatWeDoSection =
    dataHomepage.allContentfulWhatWeDoSection.edges[0].node;
  const homepageWorkWithUsSection =
    dataHomepage.allContentfulWorkWithUsSection.edges[0].node;
  const homepagePartnerSection =
    dataHomepage.allContentfulPartnerSection.edges[0].node;
  const homepageFooterSection =
    dataHomepage.allContentfulFooterSection.edges[0].node;
  return (
    <div>
      <Helmet>
        <title>Verdance</title>
        <meta name='title' content='Verdance' />
        <meta
          name='description'
          content='We partner with government to build resilient and respectful digital services.'
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.verdance.co/' />
        <meta property='og:title' content='Verdance' />
        <meta
          property='og:description'
          content='We partner with government to build resilient and respectful digital services.'
        />
        <meta property='og:image' content='NEEDS-IMAGE-URL' />

        <meta
          property='twitter:card'
          content='We partner with government to build resilient and respectful digital services.'
        />
        <meta property='twitter:url' content='https://www.verdance.co/' />
        <meta property='twitter:title' content='Verdance' />
        <meta
          property='twitter:description'
          content='We partner with government to build resilient and respectful digital services.'
        />
        <meta property='twitter:image' content='NEEDS-IMAGE-URL' />

        <link
          rel='apple-touch-icon'
          href='../../images/android-chrome-512x512.png'
        />
      </Helmet>
      <main className={styles.homepageContent}>
        <section className={styles.homepageSection}>
          <h1
            className={`${styles.homepageSectionContent} ${styles.homepageTitle}`}
          >
          <img
            className={styles.mainLogo}
            src={homepageIntroSection.logo.file.url}
          />
          </h1>
        </section>
        <section className={styles.homepageSection}>
          <div className={styles.homepageSectionContent}>
            <div className={styles.twoColumn}>
              <div className={styles.contentAlignBottom}>
                <img
                  className={styles.bottomPaddingOne}
                  src={homepageIntroSection.icon.file.url}
                />
                <h4 className={styles.bottomPaddingTwo}>
                  {homepageIntroSection.smallText}
                </h4>
                <Markdown value={homepageIntroSection.cta.cta} />
              </div>

              <h2 className={`${styles.homepageLargeText} ${styles.introLargeText} ${styles.bottomPaddingOne}`}>{homepageIntroSection.largeText}</h2>
            </div>
            <img
                className={`${styles.bottomPaddingOne} ${styles.downArrow}`}
                src={homepageIntroSection.downArrow.file.url}
              />
          </div>
        </section>
        <section className={styles.homepageSection}>
          <div
            className={`${styles.homepageSectionContent} ${styles.homepageSectionGreen}`}
          >
            <img className={styles.heroImage} src={heroImage} />
          </div>
        </section>
        <section className={styles.homepageSection}>
          <div className={styles.homepageSectionContent}>
            <h5>what we do</h5>
            <div className={styles.twoColumn}>
              <h2 className={`${styles.homepageLargeText} ${styles.bottomPaddingOne}`} >{homepageWhatWeDoSection.largeText}</h2>
              <h4 className={styles.contentAlignBottom}> {homepageWhatWeDoSection.smallText}</h4>
            </div>
            <div className={styles.threeColumn}>
              <div className={styles.bottomPaddingTwo}>
                <img src={homepageWhatWeDoSection.columnOneIcon.file.url} />
                <h3 className={styles.columnTitle}>
                  {homepageWhatWeDoSection.columnOneTitle}
                </h3>
                <p>
                  <Markdown
                    value={homepageWhatWeDoSection.columnOneBody.columnOneBody}
                  />
                </p>
              </div>
              <div className={styles.bottomPaddingTwo}>
                <img src={homepageWhatWeDoSection.columnTwoIcon.file.url} />
                <h3 className={styles.columnTitle}>
                  {homepageWhatWeDoSection.columnTwoTitle}
                </h3>
                <p>
                  <Markdown
                    value={homepageWhatWeDoSection.columnTwoBody.columnTwoBody}
                  />
                </p>
              </div>
              <div className={styles.bottomPaddingTwo}>
                <img src={homepageWhatWeDoSection.columnThreeIcon.file.url} />
                <h3 className={styles.columnTitle}>
                  {homepageWhatWeDoSection.columnThreeTitle}
                </h3>
                <p>
                  <Markdown
                    value={
                      homepageWhatWeDoSection.columnThreeBody.columnThreeBody
                    }
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`${styles.homepageSection} ${styles.homepageSectionYellow} ${styles.homepageSectionFullWidth}`}
        >
          <div className={styles.homepageSectionContent}>
            <h5>work with us</h5>
            <div className={styles.twoColumn}>
              <div className="workWithUsColumn">
                <h2 className={`${styles.homepageLargeText} ${styles.bottomPaddingOne}`}>{homepageWorkWithUsSection.largeText}</h2>
                <h3>
                  {homepageWorkWithUsSection.smallText.smallText}
                </h3>
              </div>
              <img className={styles.mainLogo} src={homepageWorkWithUsSection.image.file.url} />
            </div>
          </div>
        </section>
        <section className={`${styles.homepageSection} ${styles.bottomPaddingFour}`}>
          <div className={styles.homepageSectionContent}>
            <h5>who we work with</h5>
            <h2 className={styles.homepageLargeText}>{homepagePartnerSection.title}</h2>
            <div className={styles.partnerLogosContainer}>
              {homepagePartnerSection.partnerLogos.map((item, index) => (
                <div className={styles.partnerLogo}>
                  <img key={index} src={item.file.url} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className={`${styles.homepageSection} ${styles.homepageSectionDarkGrey} ${styles.homepageSectionFullWidth}`}
        >
          <div className={styles.homepageSectionContent}>
            <div className={styles.twoColumn}>
              <div>
                <div className={styles.bottomPaddingTwo}>
                <img
                  className={styles.mainLogo}
                  src={homepageIntroSection.logo.file.url}
                />
                </div>
                  <h4 className={styles.bottomPaddingTwo}>{homepageFooterSection.smallText.smallText}</h4>
                  <Markdown value={homepageFooterSection.cta.cta} />
              </div>
              <img className={styles.mainLogo} src={homepageFooterSection.image.file.url} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
