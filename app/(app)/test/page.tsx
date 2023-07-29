/* eslint-disable @typescript-eslint/ban-ts-comment */

'use client';

import { useEffect, useState } from 'react';

const Page = () => {
  const [d, setD] = useState('');

  useEffect(() => {
    (async () => {
      const res = await fetch('api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `{
              hello
          }
          `,
        }),
      });

      setD(await res.json());
    })();
  }, []);

  // @ts-ignore 11
  return (d && d.data.hello) ?? 1;
};

export default Page;
