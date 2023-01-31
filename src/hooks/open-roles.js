import { useState, useEffect } from 'react';

export function useOpenRoles() {
  const [openRoles, setOpenRoles] = useState([]);

  useEffect(() => {
    fetch('https://api.ashbyhq.com/posting-api/job-board/verdance')
      .then((res) => res.json())
      .then((data) => {
        setOpenRoles(data.jobs);
      });
  }, []);

  return openRoles;
}
