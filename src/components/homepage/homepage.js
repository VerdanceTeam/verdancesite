import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import * as styles from './homepage.module.scss';

import heroImage from '../../images/verdance-hero.png';

const Homepage = () => {
  const dataHomepage = useStaticQuery(graphql`
    {
      allContentfulIntroSection {
        edges {
          node {
            id
            largeText
            smallText
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
              raw
            }
            columnTwoIcon {
              file {
                url
              }
            }
            columnTwoTitle
            columnTwoBody {
              raw
            }
            columnThreeIcon {
              file {
                url
              }
            }
            columnThreeTitle
            columnThreeBody {
              raw
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
  console.log('homepageIntroSection = ', homepageIntroSection);
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
        <meta
          property='og:image'
          content='https://images.ctfassets.net/5ywyur77omkg/350kVpMKxm8FpSUgXbWtg/fdd44c522593d946ea250148bea99bf3/lunchbox-meta.jpg'
        />

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
        <meta
          property='twitter:image'
          content='https://images.ctfassets.net/5ywyur77omkg/350kVpMKxm8FpSUgXbWtg/fdd44c522593d946ea250148bea99bf3/lunchbox-meta.jpg'
        />

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
            Verdance
          </h1>
        </section>
        <section className={styles.homepageSection}>
          <div className={styles.homepageSectionContent}>
            <div className={styles.homepageIntroContainer}>
              <h4>{homepageIntroSection.smallText}</h4>
              <h2>{homepageIntroSection.largeText}</h2>
            </div>
          </div>
        </section>
        <section className={styles.homepageSection}>
          <div
            className={`${styles.homepageSectionContent} ${styles.homepageSectionGreen}`}
          >
            <img src={heroImage} />
          </div>
        </section>
        <section className={styles.homepageSection}>
          <div className={styles.homepageSectionContent}></div>
        </section>
        <section
          className={`${styles.homepageSection} ${styles.homepageSectionYellow} ${styles.homepageSectionFullWidth}`}
        >
          <div className={styles.homepageSectionContent}></div>
        </section>
        <section className={styles.homepageSection}>
          <div className={styles.homepageSectionContent}></div>
        </section>
        <section className={styles.homepageSection}>
          <div className={styles.homepageSectionContent}></div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
