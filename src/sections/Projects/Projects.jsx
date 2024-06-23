import styles from './ProjectsStyles.module.css';

import imageblog from '../../assets/imageblog.png';
import ProjectCard from '../../common/ProjectCard';
import { LOGO_URL } from '../../assets/Constants';
import { Chat_app_logo } from '../../assets/Constants';
import confession_logo  from '../../assets/image.png';
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Featured Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={LOGO_URL}
          link="https://github.com/mohammadruman/BiteBazaar"
          h3="BiteBazaar"
          p="Food Application"
        />
        <ProjectCard
          src={Chat_app_logo}
          link="https://github.com/mohammadruman/Real-Time-Chat-Application-with-React-and-Socket.io"
          h3="KIIT SOCIAL"
          p="Real-Time Chat Application"
        />
        <ProjectCard
          src={confession_logo}
          link="https://github.com/mohammadruman/Confessionpage"
          h3="Confessify Web App"
          p="Confession Page"
        />
        <ProjectCard
          src={imageblog}
          link="https://github.com/mohammadruman/Blog"
          h3="JournalJunction Website"
          p="Blog App"
        />
      </div>
    </section>
  );
}

export default Projects;
