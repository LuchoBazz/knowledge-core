import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function Home(): JSX.Element {
  const history = useHistory();

  useEffect(() => {
    history.push('/essential-dev-utils/docs/intro');
  }, [history]);

  return (<></>);
}