import { useState } from 'react';

const PlusMinusIcon = ({ expanded }) => (
  <svg
    style={{ width: 12, height: 12, pointerEvents: 'none' }}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeWidth="2"
      d={expanded ? 'M4 12h16' : 'M12 4v16M4 12h16'}
    />
  </svg>
);

function ProfileCard({ name, role, bio }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="profile-card hover-hatch"
      onClick={() => setExpanded((v) => !v)}
      role="button"
      aria-expanded={expanded}
    >
      <h4 className="profile-name hatch-bg-text">{name}</h4>
      <p
        className="profile-role hatch-bg-text"
        dangerouslySetInnerHTML={{ __html: role }}
        onClick={(e) => e.target.tagName === 'A' && e.stopPropagation()}
      />

      <button
        className="profile-toggle"
        onClick={(e) => {
          e.stopPropagation();
          setExpanded((v) => !v);
        }}
        aria-label={expanded ? 'Collapse' : 'Expand'}
      >
        <PlusMinusIcon expanded={expanded} />
      </button>

      <div className={`profile-description${expanded ? ' expanded' : ''}`} aria-hidden={!expanded}>
        <div
          className="profile-description-inner"
          dangerouslySetInnerHTML={{ __html: bio }}
          onClick={(e) => e.target.tagName === 'A' && e.stopPropagation()}
        />
      </div>
    </div>
  );
}

const TEAM = [
  {
    name: 'Teja Malladi',
    role: 'Lead - Urban Observatory and Spatial Data Centre, <a href="https://hydlab.in/" target="_blank" rel="noopener noreferrer">Hyderabad Urban Lab</a>',
    bio: `<p>At HUL, Teja is leading the development of the Urban Observatory and Spatial Data Centre (SDC), which produces datasets, analyses, platforms, and tools, and also organizes trainings to support researchers, civil society, and government actors in Hyderabad. He is the Associate Director at Hyderabad Urban Lab.</p>
<p>Teja specializes in applying spatial data science techniques to monitor changes in the urban environment, measure spatial inequalities, and reduce disaster risks. Teja is also the co-founder and CEO of MapSolve AI Private Limited.</p>`,
  },
  {
    name: 'Amruth Kiran',
    role: 'Volunteer - Spatial Data Infrastructure',
    bio: `<p>Amruth's expertise lies in spatial data/knowledge infrastructures, building large-scale Earth Observation (EO) dissemination platforms and interdisciplinary data collection mechanisms. Amruth leads the development of Spatial Data Infrastructure (SDI) at the Hyderabad Urban Observatory.</p>
<p>Amruth is also part of the faculty at IIHS, where he teaches geospatial skills to learners from diverse backgrounds. He is also the co-founder of Lets Talk Spatial, a geospatial meetup group in Bengaluru.</p>`,
  },
];

const ADVISORS = [
  {
    name: 'Dr. Anant Maringanti',
    role: 'Director, <a href="https://hydlab.in/" target="_blank" rel="noopener noreferrer">Hyderabad Urban Lab</a> and ICGC Director, University of Minnesota',
    bio: `<p>Dr. Anant is currently Director, <a href="https://icgc.umn.edu/anant-maringanti" target="_blank" rel="noopener noreferrer">Interdisciplinary Center for the Study of Global Change (ICGC)</a>, Director of Graduate Studies and Senior Lecturer, Development Studies and Social Change Graduate Minor Program, MDP Program Co-Chair at the University of Minnesota.</p>
<p>As the Founder and Director of <a href="https://hydlab.in/" target="_blank" rel="noopener noreferrer">Hyderabad Urban Lab (HUL)</a>, he led an interdisciplinary team dedicated to tackling complex urban challenges in the Global South. His work merges theoretical research with practical action, empowering marginalized communities and influencing urban policy.</p>
<p>Through HUL and now ICGC, he strives to create pathways for more equitable and sustainable urban futures.</p>`,
  },
  {
    name: 'Bhaswati Sengupta',
    role: 'Executive Director, <a href="https://hydlab.in/" target="_blank" rel="noopener noreferrer">Hyderabad Urban Lab</a>',
    bio: `<p>Bhashwati would rather sit in a well lit cave and write poetry but instead finds herself grinding her teeth at the Google news page, multiple times a day. At other times she plans and organises things at HUL. She believes that the dangers of a single story cannot be overstated. She hopes we all always stay mindful of the multiple stories afloat all around us and learn all we can about coexistence as long as we exist.</p>`,
  },
];

export default function About() {
  return (
    <main className="content-main">
      <div className="content-block">
        <h2 className="content-heading">About</h2>

        <div className="content-prose" style={{ marginBottom: '48px' }}>
          <p>
            The Urban Observatory at{' '}
            <a href="https://hydlab.in/" target="_blank" rel="noopener noreferrer">
              Hyderabad Urban Lab
            </a>{' '}
            is envisaged as a set of projects around:
          </p>
          <ul className="content-list" style={{ margin: '16px 0' }}>
            <li>data repositories, archives and libraries;</li>
            <li>research and advocacy;</li>
            <li>physical and social interventions around communities and places.</li>
          </ul>
          <p>
            Each of these projects is to feed and support the other projects. For example, data
            repositories inform research and advocacy and enable designed interventions. Likewise,
            interventions will lead to new research and new data.
          </p>
          <p>
            We look at the city as a place that is constantly in a flux, where agendas, plans and
            interventions align and realign. To remain in engagement with such a place we taught
            ourselves to create opportunities for research and advocacy, interventions and to keep
            archiving all the data that is generated from our work.
          </p>
          <p>
            Currently, we are in the process of bringing together all the work done at{' '}
            <a href="https://hydlab.in/" target="_blank" rel="noopener noreferrer">
              Hyderabad Urban Lab
            </a>
            , along with other relevant efforts from across Hyderabad, into a single, unified
            platform. This will serve as a foundation for future research, creative projects,
            teaching, and capacity building.
          </p>
          <div className="content-contact">
            <span className="content-contact-label">Contact</span>
            For collaborations, data contributions, enquiries, or feedback, email us at{' '}
            <a href="mailto:hulf.observatory@gmail.com">hulf.observatory@gmail.com</a>.
          </div>
        </div>

        <h2 className="content-heading section-gap-top">People</h2>

        <div className="content-prose" style={{ marginBottom: '32px' }}>
          <p>
            There are many who have contributed to the datasets, articles and the initiative from{' '}
            <a href="https://hydlab.in/" target="_blank" rel="noopener noreferrer">
              Hyderabad Urban Lab
            </a>{' '}
            and friends of Hyderabad. Each of their contributions are attributed wherever possible.
            The key people steering and coordinating this initiative are:
          </p>
        </div>

        <p className="content-subheading">Team</p>
        <div className="profiles-grid-2">
          {TEAM.map((person) => (
            <ProfileCard key={person.name} {...person} />
          ))}
        </div>

        <p className="content-subheading section-gap-top-sm">Advisors</p>
        <div className="profiles-grid-3">
          {ADVISORS.map((person) => (
            <ProfileCard key={person.name} {...person} />
          ))}
        </div>
      </div>
    </main>
  );
}
