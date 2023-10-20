// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import React, { useEffect, useRef, useState } from 'react';

// Internal Components
import { BRBMainComponent } from '@site/src/components/BRB/BRBMainComponent';

// Import Assets

// Internal Configs
import { PageMeta } from "@site/src/config/pageMeta";

function BRB() {

  return (
    <Layout title={PageMeta.BRB.pageTitle} description={PageMeta.BRB.pageDescription}>
      {/* <Head>
        <meta property="og:image" content="image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://example.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Meta Open Source',
            url: 'https://opensource.fb.com/',
            logo: 'https://opensource.fb.com/img/logos/Meta-Open-Source.svg',
          })}
        </script>
      </Head> */}
      <BRBMainComponent />
    </Layout>
  );
}

export default BRB;
