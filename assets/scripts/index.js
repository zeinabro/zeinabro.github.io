async function get_data() {
    return await fetch('assets/projects.json')
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err)
}

async function show_projects() {
    console.log('show projects')
    const projects = await get_data()
    console.log(projects)
    const projectList = document.createElement('ul')
    projectList.className = 'project-list'
    projects.forEach(project => {
        const projectItem = document.createElement('div')
        projectItem.className = 'project'
        projectItem.textContent = project.name
        projects_section.appendChild(projectItem)
        console.log(projectList)
    });
    projects_section.append(projectList)
}

const projects_section = document.querySelector('.projects')

show_projects()
