import * as React from 'react';
import * as styles from './Section.module.scss';

function combineClassNames(classNames = []) {
  return classNames.join(' ');
}

function Section({ children, sectionClassNames = [], contentClassNames = [] }) {
  return (
    <section
      className={combineClassNames([styles.section, ...sectionClassNames])}
    >
      <div
        className={combineClassNames([
          styles.sectionContent,
          ...contentClassNames,
        ])}
      >
        {children}
      </div>
    </section>
  );
}

export default Section;
