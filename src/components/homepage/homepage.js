import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import * as styles from './homepage.module.scss';

const Homepage = () => {
  // const dataProductImageCarousel = useStaticQuery(graphql`
  //   {
  //     allContentfulFeaturettes(sort: { order: ASC, fields: order }) {
  //       nodes {
  //         icon {
  //           file {
  //             url
  //           }
  //         }
  //         subtitle {
  //           subtitle
  //         }
  //         title
  //       }
  //     }
  //     allContentfulProductImageCarousel(sort: { order: ASC, fields: order }) {
  //       edges {
  //         node {
  //           id
  //           children {
  //             id
  //           }
  //           img {
  //             file {
  //               url
  //             }
  //           }
  //         }
  //       }
  //     }
  //     allContentfulTeamMember(sort: { order: ASC, fields: order }) {
  //       nodes {
  //         photo {
  //           file {
  //             url
  //           }
  //         }
  //         name
  //         order
  //         title
  //         bio {
  //           bio
  //         }
  //       }
  //     }
  //     allContentfulPartner(sort: { order: ASC, fields: order }) {
  //       nodes {
  //         img {
  //           file {
  //             url
  //           }
  //         }
  //         order
  //       }
  //     }
  //   }
  // `);
  // const homepageData = dataProductImageCarousel;

  // const homepageProductImageCarousel =
  //   homepageData.allContentfulProductImageCarousel.edges;
  // const homepageFeaturettes = homepageData.allContentfulFeaturettes.nodes;
  // const homepageTeamMembers = homepageData.allContentfulTeamMember.nodes;
  // const homepagePartners = homepageData.allContentfulPartner.nodes;

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
          <div className={styles.homepageSectionContent}></div>
        </section>
        <section
          className={`${styles.homepageSection} ${styles.homepageSectionGreen}`}
        >
          <div className={styles.homepageSectionContent}></div>
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
