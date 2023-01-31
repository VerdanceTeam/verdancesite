import '../styles/base.scss';
import classnames from 'classnames';
import * as React from 'react';
import {
  Main,
  Header,
  VerdanceHeader,
  Section,
  Footer,
} from '../components/layout';
import Markdown from 'marked-react';
import { useContentfuHomepagelData } from '../hooks/contentful';
import { useOpenRoles } from '../hooks/open-roles';
import * as styles from './index.module.scss';

import heroImage from '../images/verdance-hero.jpg';
import jobDivider from '../images/line-careers.svg';
import classNames from 'classnames';

const IndexPage = () => {
  const {
    introSection,
    whatWeDoSection,
    workWithUsSection,
    partnerSection,
    footerSection,
  } = useContentfuHomepagelData();

  const ref = React.useRef();

  const openRoles = useOpenRoles();

  return (
    <>
      <Header>
        <VerdanceHeader
          logo={introSection.logo.file.url}
          pixelatedLogo={introSection.pixelatedLogo.file.url}
        />
      </Header>

      <Main>
        <Section>
          <div className={styles.responsiveColumnContainer}>
            <div
              className={classnames(styles.column, styles.largeIntroSection)}
            >
              <h2
                className={classnames(
                  styles.homepageLargeText,
                  styles.bottomPaddingOne,
                )}
              >
                {introSection.largeText}
              </h2>
            </div>

            <div
              className={classnames(styles.column, styles.smallIntroSection)}
            >
              <div className={styles.contentAlignBottom}>
                <img
                  src={introSection.icon.file.url}
                  className={classnames(
                    styles.bottomPaddingOne,
                    styles.leafIcon,
                  )}
                  alt="leaf icon"
                />

                <h4
                  className={`${styles.bottomPaddingTwo} ${styles.homepageSmallText}`}
                >
                  {introSection.smallText}
                </h4>
              </div>
            </div>
          </div>

          <div className={styles.columnsContainer}>
            <a
              className={styles.introCtaLink}
              onClick={() => {
                ref.current?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See open roles
            </a>
            <img
              src={introSection.downArrow.file.url}
              alt="down arrow"
              className={`${styles.bottomPaddingOne} ${styles.downArrow}`}
            />
          </div>
        </Section>

        <Section contentClassNames={[styles.homepageSectionGreen]}>
          <img
            className={styles.heroImage}
            src={heroImage}
            alt="Verdance Pillars"
          />
        </Section>

        <Section>
          <h5>what we do</h5>

          <div
            className={classnames(
              styles.responsiveColumnContainer,
              styles.bottomPaddingOne,
            )}
          >
            <div className={styles.column}>
              <h2
                className={classnames(
                  styles.homepageLargeText,
                  styles.bottomPaddingOne,
                )}
              >
                {whatWeDoSection.largeText}
              </h2>
            </div>
            <div className={styles.column}>
              <h4
                className={classnames(
                  styles.homepageSmallText,
                  styles.contentAlignBottom,
                  styles.bottomPaddingTwo,
                )}
              >
                {whatWeDoSection.smallText}
              </h4>
            </div>
          </div>

          <div
            className={classnames(
              styles.responsiveColumnContainer,
              styles.bottomPaddingOne,
            )}
          >
            <div
              className={classnames(
                styles.whatWeDoColumn,
                styles.bottomPaddingTwo,
              )}
            >
              <img
                alt="Pixelated leaf icon"
                src={whatWeDoSection.columnOneIcon.file.url}
              />
              <h3 className={styles.columnTitle}>
                {whatWeDoSection.columnOneTitle}
              </h3>
              <div className={styles.homepageSmallText}>
                <Markdown value={whatWeDoSection.columnOneBody.columnOneBody} />
              </div>
            </div>

            <div
              className={classnames(
                styles.whatWeDoColumn,
                styles.bottomPaddingTwo,
              )}
            >
              <img
                alt="Pixelated eagle icon"
                src={whatWeDoSection.columnTwoIcon.file.url}
              />
              <h3 className={styles.columnTitle}>
                {whatWeDoSection.columnTwoTitle}
              </h3>
              <div className={styles.homepageSmallText}>
                <Markdown value={whatWeDoSection.columnTwoBody.columnTwoBody} />
              </div>
            </div>

            <div
              className={classnames(
                styles.whatWeDoColumn,
                styles.bottomPaddingTwo,
              )}
            >
              <img
                alt="Pixelated asterisk icon"
                src={whatWeDoSection.columnThreeIcon.file.url}
              />
              <h3 className={styles.columnTitle}>
                {whatWeDoSection.columnThreeTitle}
              </h3>
              <div className={styles.homepageSmallText}>
                <Markdown
                  value={whatWeDoSection.columnThreeBody.columnThreeBody}
                />
              </div>
            </div>
          </div>
        </Section>

        <Section sectionClassNames={[styles.homepageSectionYellow]}>
          <h5 ref={ref}>work with us</h5>

          <div
            className={classnames(
              styles.bottomPaddingTwo,
              styles.responsiveColumnContainer,
            )}
          >
            <div className={styles.column}>
              <div className={styles.bottomPaddingTwo}>
                <h2
                  className={classNames(
                    styles.homepageLargeText,
                    styles.bottomPaddingOne,
                  )}
                >
                  {workWithUsSection.largeText}
                </h2>

                <h3>{workWithUsSection.smallText.smallText}</h3>
              </div>
            </div>

            <div className={styles.column}>
              <img
                alt="Work station"
                className={styles.workWithUsImage}
                src={workWithUsSection.image.file.url}
              />
            </div>
          </div>

          <div className={styles.openRolesList}>
            {openRoles.map((role, index) => {
              const isLastRole = index + 1 === openRoles.length;

              return (
                <div key={role.id} className={styles.openRoleListItem}>
                  <img
                    alt="Arrow icon"
                    className={styles.openRoleArrow}
                    src={introSection.downArrow.file.url}
                  />
                  <div className={styles.openRoleContentContainer}>
                    <h3 className={styles.bottomPaddingOne}>{role.title}</h3>

                    <div className={styles.openRoleContent}>
                      <p>Full-time, {role.location}</p>

                      <a
                        className={styles.openRolelearnMoreLink}
                        href={role.jobUrl}
                      >
                        Learn more
                      </a>
                    </div>

                    {!isLastRole && (
                      <img
                        alt="Role divider"
                        className={styles.jobDivider}
                        src={jobDivider}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        <Section sectionClassNames={[styles.bottomPaddingTwo]}>
          <h5>who we work with</h5>
          <h2 className={styles.homepageLargeText}>{partnerSection.title}</h2>

          <div className={styles.partnerLogosContainer}>
            {partnerSection.partnerLogos.map((logo) => {
              return (
                <div className={styles.partnerLogo} key={logo.id}>
                  <img src={logo.file.url} alt={logo.title} />
                </div>
              );
            })}
          </div>
        </Section>
      </Main>

      <Footer>
        <div className={styles.bottomPaddingTwo}>
          <VerdanceHeader
            logo={introSection.logo.file.url}
            pixelatedLogo={introSection.pixelatedLogo.file.url}
          />
        </div>

        <h4 className={styles.bottomPaddingTwo}>
          {footerSection.smallText.smallText}
        </h4>

        <Markdown value={footerSection.cta.cta} />
      </Footer>
    </>
  );
};

export default IndexPage;

export const Head = () => {
  return (
    <>
      <title>Verdance</title>;
      <meta name="title" content="Verdance" />
      <meta
        name="description"
        content="We partner with government to build resilient and respectful digital services."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.verdance.co/" />
      <meta property="og:title" content="Verdance" />
      <meta
        property="og:description"
        content="We partner with government to build resilient and respectful digital services."
      />
      <meta property="og:image" content="NEEDS-IMAGE-URL" />
      <meta
        property="twitter:card"
        content="We partner with government to build resilient and respectful digital services."
      />
      <meta property="twitter:url" content="https://www.verdance.co/" />
      <meta property="twitter:title" content="Verdance" />
      <meta
        property="twitter:description"
        content="We partner with government to build resilient and respectful digital services."
      />
      <meta property="twitter:image" content="NEEDS-IMAGE-URL" />
      <link
        rel="apple-touch-icon"
        href="../../images/android-chrome-512x512.png"
      />
    </>
  );
};
