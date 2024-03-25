import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjects from "./components/NoProjects.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

import { useState } from "react";

function App() {
  const [projectsSelected, setProjectsSelected] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  function handleAddTask(text) {
    setProjectsSelected(prevState => {
      const newTask = {
        text: text,
        id: Math.random(),
        projectId: prevState.selectedProjectId,
      }
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }

  function handleDeleteTask(id) {
    setProjectsSelected(prevState => {
      return {
        ...prevState,
        // selectedProjectId: undefined,
        tasks: prevState.tasks.filter(task => task.id !== id)
      }
    })
  }

  const selectedProject = projectsSelected.projects.find((project) => project.id === projectsSelected.selectedProjectId)
  const selectedTasks = projectsSelected.tasks.filter(task => task.projectId === projectsSelected.selectedProjectId);
  function handleStartAddProject() {
    setProjectsSelected(prevProjectsSelected => {
      return {
        ...prevProjectsSelected,
        selectedProjectId: null,
      }
    })
  }
  function handleNewProject(projectData) {
    setProjectsSelected(prevState => {
      const newProject = { ...projectData, id: Math.random() }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      }
    })
  }

  function handleCancelClick() {
    setProjectsSelected(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  function handleSelectProject(id) {
    setProjectsSelected(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }
  function handleProjectDeletion() {
    setProjectsSelected(prevState => {
      const newProjectsArr = prevState.projects.filter((project) => project !== selectedProject)
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: newProjectsArr
      }
    })
  }

  let content;
  if (projectsSelected.selectedProjectId === null) {
    content = <NewProject onAdd={handleNewProject} onCancel={handleCancelClick} />
  }
  else if (projectsSelected.selectedProjectId === undefined) {
    content = <NoProjects onStartAddProject={handleStartAddProject} />
  } else {
    content = <SelectedProject
      project={selectedProject}
      onProjectDeletion={handleProjectDeletion}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={selectedTasks}
    />
  }


  // projects: [...prevProjectsSelected.projects, projectData]

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject} projects={projectsSelected.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsSelected.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
