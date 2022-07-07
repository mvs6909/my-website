import React from 'react';
import experienceData from './experienceData';
import ExperienceCard from './ExperienceCard';
import "./Experience.css";

function createExperience(experience){
    return <ExperienceCard key={experience.id} icon={experience.icon} title={experience.title} description={experience.description} />
}

export default function Experience() {
  return (
    <div className="experience" id="experience">
        <h1>My Experience</h1>
                <dl className="exps">
                    {experienceData.map(createExperience)}
                </dl>
    </div>
  )
}
