import React from 'react'

const GoogleAnalytics = () => (
  <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-9QM3LR3WVS" />
    <script
      dangerouslySetInnerHTML={{
        __html: /* js */ `             
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-9QM3LR3WVS');
          `,
      }}
    />
  </>
)

export default GoogleAnalytics
