import Button from "./Button.jsx"

export default function ProjectSidebar({ projects, onStartAddProject, onSelectProject, selectedProjectId }) {
    console.log(projects);
    return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">My Projects</h2>
        <div>
            <Button onClick={onStartAddProject}>+Add Project</Button>
        </div>
        <ul className="mt-8">
            {projects.map(project => {
                let classes = "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800"
                if (project.id === selectedProjectId) {
                    classes += " text-stone-200 bg-stone-800"
                } else {
                    classes += "  text-stone-400"
                }
                return <li key={project.id}>
                    <button className={classes} onClick={() => {
                        onSelectProject(project.id)
                    }}>{project.title}</button>
                </li>
            })}
        </ul>
    </aside>
}