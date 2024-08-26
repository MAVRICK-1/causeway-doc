// Example from https://beta.reactjs.org/learn
import React from 'react'
import { FaAngular, FaGithub, FaGit, FaNodeJs } from 'react-icons/fa'
import { SiFirebase, SiTypescript, SiRxdb, SiStackblitz, SiCodemirror, SiNgrx, SiSass, SiGnubash, SiGit, SiGooglecloudstorage, SiJavascript, SiMaterialdesign, SiSignal } from 'react-icons/si'
import { MdSignalCellularAlt } from 'react-icons/md'
import { BiCodeAlt } from 'react-icons/bi'
import { GrCss3, GrHtml5 } from 'react-icons/gr'
function TechIcon() {

  return (
    <>
    <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px'
    }}
  >
    <FaAngular title="Angular" size={40} />
    <SiFirebase title="Firebase" size={40} />
    <SiTypescript title="TypeScript" size={40} />
    <FaNodeJs title="Node.js" size={40} />
    <SiJavascript title="Material UI" size={40} />
    <SiNgrx title="NgRx Store" size={40} />
    <SiMaterialdesign title='Angular Material' size={40} />
    <MdSignalCellularAlt title="Signals" size={40} />
    <SiRxdb title="RxJS" size={40} />
    <GrCss3 title="CSS" size={40} />
    <GrHtml5 title="HTML5" size={40} />
    <BiCodeAlt title="Scripting" size={40} />
    <FaGithub title="GitHub" size={40} />
    <SiGit title="Git" size={40} />
    <SiStackblitz title="StackBlitz" size={40} />
    <SiCodemirror title="CodeMirror" size={40} />
    <SiSass title='Sass' size={40} />
    <SiGnubash title='bash' size={40} />
    <SiGooglecloudstorage title='Google Cloud' size={40} />


  </div>
    </>
    
  );
}

export default function MyApp() {
  return <TechIcon />
}
