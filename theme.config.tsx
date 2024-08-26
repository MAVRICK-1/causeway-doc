import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { FaLinkedin } from 'react-icons/fa'

const config: DocsThemeConfig = {
  logo: <img src='/Images/favicon-gsoc.png' style={{ width: '30px',height:'30px'}}></img>,
  project: {
    link: 'https://github.com/MAVRICK-1/causeway-doc',
  },
  chat: {
    link: 'https://www.linkedin.com/in/rishi-mondal-5238b2282/',
    icon: <FaLinkedin  style={{ fontSize: '24px' }} />
  },
  docsRepositoryBase: 'https://github.com/MAVRICK-1/causeway-doc',
  footer: {
    text: 'Google Summer of Code @UC OSPO',
  },
  head: () => (
    <>
      <link rel="icon" href="/Images/favicon-gsoc.png" />
      <link rel="apple-touch-icon" href="/Images/favicon-gsoc.png" />
      <meta property="og:title" content="Rishi Gsoc" />
      <meta property="og:description" content="Documentation of Rishi Mondal GSOC Project" />
      <meta property="og:url" content="https://gsoc-causeway.vercel.app/" />
      <meta property="og:site_name" content="Rishi Gsoc" />
      <meta property="og:image" content="https://raw.githubusercontent.com/MAVRICK-1/causeway-doc/master/public/Images/intro_image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </>
  ),
}

export default config
