import React, { useState } from 'react';

type Experience = {
  role: string,
  dates: string,
  color: string,
  details: string[],
}

const experiences: Experience[] = [
  {
    role: 'Sr. Full Stack / Machine Learning Engineer at Avalara',
    dates: 'May 2017 - Present',
    color: 'shadow-orange-300',
    details: [
      'Avi - RAG-based LLM chatbot using Qdrant and internal docs for support automation.',
      'Built Vue-based internal workbench for debugging conversations.',
      'AI/ML tooling for tax exemption certification processing (80% workload reduction).',
      'PDF processing, OCR, NER (spaCy), signature detection, classification (SageMaker), YOLOv5.',
      'Model versioning with ClearML.',
      'Frontend/backend dev: React, Node, Redux, Segment analytics.',
      'Major products: buy.avalar.com, account.avalar.com, nexus, app-archetype, content-engineering.',
    ],
  },
  {
    role: 'Backend Software Engineer at Figo GmbH',
    dates: 'Feb 2016 - Apr 2017',
    color: 'shadow-blue-300',
    details: [
      'Built and maintained online multi-banking API.',
      'Worked on SDK (Node.js), release process, and ticket management (JIRA).',
    ],
  },
  {
    role: 'Senior Design Project at WSU',
    dates: 'Jan 2015 - Jan 2016',
    color: 'shadow-cyan-300',
    details: [
      'Mobile app to track physical activity.',
      'Worked on API, database, and machine learning integration.',
    ],
  },
  {
    role: 'IT Security at WSU Security',
    dates: 'Oct 2014 - Jan 2016',
    color: 'shadow-green-300',
    details: [
      'Puppet scripting, network/server configuration, APT analysis, Metasploit, Splunk.',
    ],
  },
  {
    role: 'Django Developer at WSU Anthropology Dept.',
    dates: 'Sep 2014 - Apr 2015',
    color: 'shadow-purple-300',
    details: [
      'Built full stack website with Django, CentOS, PostgreSQL, and nginx.',
    ],
  },
  {
    role: 'Software Developer - Intern at Minapsys',
    dates: 'Jun 2014 - Jul 2014',
    color: 'shadow-gray-300',
    details: ['Internship role as a developer.'],
  },
];

type Props = {
  experience: Experience,
  open: string,
  setOpen: React.Dispatch<React.SetStateAction<string>>
}

const ExperienceCard: React.FC<Props> = ({ experience, open, setOpen }: Props) => {
  const toggleRole = () => open === experience.role ? '' : experience.role;

  return (
    <div
      className={`transition-all duration-300 rounded-2xl border p-4 mb-4 bg-white ${experience.color} hover:bg-cyan-800 hover:text-white shadow-md`}
    >
      <div
        onClick={() => setOpen(toggleRole())}
        className="cursor-pointer flex justify-between items-center"
      >
        <h3 className="font-semibold text-lg">{experience.role}</h3>
        <span className="text-sm italic">{experience.dates}</span>
      </div>
      {open === experience.role ? (
        <ul className="mt-4 list-disc list-inside text-sm space-y-1">
          {experience.details.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default function WorkHistory() {
  const [open, setOpen] = useState('');
  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-cyan-900">Work Experience</h2>
      {experiences.map((exp, idx) => (
        <ExperienceCard key={idx} experience={exp} open={open} setOpen={setOpen} />
      ))}
    </section>
  );
}
