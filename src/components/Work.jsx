import React, { useEffect, useState } from 'react'
import './Work.css'
import { Works } from './Works'
import { projectsData } from './WorkData';
export const Work = () => {
  return (
    <section className="work section" id='portfolio'>
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Past Works</span>
      <Works />
    </section>
  )
}
