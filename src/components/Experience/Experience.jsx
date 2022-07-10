import React from 'react';
import experienceData from './experienceData';
import ExperienceCard from './ExperienceCard';
import "./Experience.css";
import Zoom from 'react-reveal/Zoom';

function createExperience(experience){
    return <Zoom>

    <ExperienceCard key={experience.id} icon={experience.icon} title={experience.title} description={experience.description} url={experience.url} skills={experience.skills} color={experience.color}/>
    </Zoom>
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
