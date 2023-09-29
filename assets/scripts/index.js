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
        const project_item = document.createElement('div')
        project_item.className = 'project'

        const project_name = document.createElement('p')
        project_name.className = 'title'
        project_name.textContent = project.name

        const project_role = document.createElement('span')
        project_role.className = 'role'
        project_role.textContent = project.role

        const project_info = document.createElement('p')
        project_info.className = 'info'
        project_info.textContent = project.description
        
        project_item.append(project_name,project_role,project_info)
        projects_section.appendChild(project_item)

    });
}

const projects_section = document.querySelector('.projects')

show_projects()
