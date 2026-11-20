import React from 'react';
import '../styles/Skills.css';

const skillGroups = [
  {
    number: '01',
    title: 'Lenguajes',
    skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C', 'C++', 'C#', 'SQL'],
  },
  {
    number: '02',
    title: 'Frontend & mobile',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Flutter'],
  },
  {
    number: '03',
    title: 'Backend & datos',
    skills: ['Node.js', 'Prisma', 'Supabase', 'PostgreSQL', 'MongoDB'],
  },
  {
    number: '04',
    title: 'Herramientas & conceptos',
    skills: ['Git', 'GitHub', 'Figma', 'Scikit-learn', 'OpenMP'],
  },
  {
    number: '05',
    title: 'Otros intereses técnicos',
    skills: ['Linux', 'Docker', 'Unity', 'Blender'],
  },
];

function Skills() {
  return (
    <section className="content-section section-wrap" id="skills">
      <div className="section-heading">
        <p className="eyebrow"><span className="eyebrow-mark" /> 03 — CAJA DE HERRAMIENTAS</p>
        <span className="section-index">03</span>
      </div>

      <div className="skills-intro">
        <h2 className="display-heading">Tecnología al servicio<span>de una buena idea.</span></h2>
        <p>Un stack diverso para elegir la herramienta correcta según el problema.</p>
      </div>

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.number}>
            <span className="skill-number">{group.number}</span>
            <h3>{group.title}</h3>
            <ul className="tag-list">
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
