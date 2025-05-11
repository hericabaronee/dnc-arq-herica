import { useContext, useState, useEffect } from 'react'
import './ProjectsList.css'

// ASSETS
import LikeFilled from '../../assets/like-filled.svg'
import LikeOutline from '../../assets/like.svg'
import LoadingSpinner from '../../assets/loading-spinner.gif'

// COMPONENTS 
import Button from '../../components/Button/Button'

// UTILS 
import { getApiData } from '../../services/apiServices'

// CONTEXT
import { AppContext } from '../../contexts/AppContext'

const ProjectsList = () => {
    const appContext = useContext(AppContext)
    const [projects, setProject] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projects = await getApiData("projects")
                setProject(projects)
            } catch (err) {
                setProject([])
            }
        }

        fetchData()
    }, [])

    const [favProjects, setFavProject] = useState([])

    useEffect(() => {
        const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
        if (savedFavProjects) {
            setFavProject(savedFavProjects)
        }
    }, [])

    const handleFavProjects = (id) => {
        setFavProject((prevFavProjects) => {
            if (prevFavProjects.includes(id)) {
                const updated = prevFavProjects.filter((projectId) => projectId !== id)
                sessionStorage.setItem('favProjects', JSON.stringify(updated))
                return updated
            } else {
                const updated = [...prevFavProjects, id]
                sessionStorage.setItem('favProjects', JSON.stringify(updated))
                return updated
            }
        })
    }

    return (
        <div className="projects-section">
            <div className="projects-hero">
                <h2>{appContext.languages[appContext.language].projects.title}</h2>
                <p>{appContext.languages[appContext.language].projects.subtitle}</p>
            </div>
            {projects.length > 0 ? (
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div
                            className="project-card d-flex jc-center al-center fd-column"
                            key={project.id}
                        >
                            <div
                                className="thumb tertiary-background"
                                style={{ backgroundImage: `url(${project.thumb})` }}
                            ></div>
                            <h3>{project.title}</h3>
                            <p>{project.subtitle}</p>
                            <Button
                                buttonStyle="unstyled" 
                                onClick={() => handleFavProjects(project.id)}
                                  className="like-button"

                            >
                                <img
                                    src={favProjects.includes(project.id) ? LikeFilled : LikeOutline}
                                    alt="Like"
                                    height="20px"
                                />
                            </Button>
                        </div>
                    ))}
                </div>
            ) : (
                <img src={LoadingSpinner} alt="Loading" height="40px" />
            )}
        </div>
    )
}

export default ProjectsList
























