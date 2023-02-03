import * as React from 'react';
import * as styles from './Section.module.scss';
import classnames from 'classnames';

function Section({ children, sectionClassNames = [], contentClassNames = [] }) {
  return (
    <section className={classnames(styles.section, sectionClassNames)}>
      <div className={classnames(styles.sectionContent, contentClassNames)}>
        {children}
      </div>
    </section>
  );
}

export default Section;
