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
    projects.forEach(project => {
        const projectItem = document.createElement('div')
        projectItem.className = 'project'
        projectItem.textContent = project.name
        projects_section.appendChild(projectItem)
    });
}

const projects_section = document.querySelector('.projects')

show_projects()
