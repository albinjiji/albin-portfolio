import { siteDetails } from '../lib/site';
import Section from './Section';
import CardItem from './CardItem';

export default function Projects() {
    return (
      <Section id="projects" title="Projects">
        <div className="relative">
          <ol className="space-y-5 pl-2">
            {siteDetails.projects.map((project, idx) => (
              <CardItem
                key={idx}
                links={project.links}
                points={project.description}
                isProject={true}
                title={project.name}
              />
            ))}
          </ol>
        </div>
      </Section>
    );
}
