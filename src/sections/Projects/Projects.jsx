import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/asadbe0304/DrawBoard"
          h3="DrawBoard"
          p="Visual Board App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://sacmanage.netlify.app/"
          h3="Kitchen app"
          p="Reastaurant Pos App"
        />
        <ProjectCard
          src={"https://img.freepik.com/psd-premium/redaccion-renderizado-3d-presentacion-web-activos-graficos-u-otros_551318-425.jpg"}
          link="https://devcl.vercel.app"
          h3="Blog"
          p="Blog App"
        />
        <ProjectCard
          src={"https://en.pimg.jp/066/044/999/1/66044999.jpg"}
          link="https://imperiaon.netlify.app/"
          h3="Shoop "
          p="Shooping App"
        />
      </div>
    </section>
  );
}

export default Projects;
