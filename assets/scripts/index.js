async function get_data() {
    return await fetch('assets/projects.json')
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err)
}

async function show_projects() {
    const projects = await get_data()
    console.log(projects)

    projects.forEach(project => {
        const project_item = document.createElement('div')
        project_item.className = 'project'

        const project_icon = document.createElement('span')
        project_icon.className = 'icon'
        project_icon.innerHTML = project.icon

        const project_name = document.createElement('p')
        project_name.className = 'title'
        project_name.textContent = project.name

        const project_role = document.createElement('span')
        project_role.className = 'role'
        project_role.textContent = project.role

        const project_info = document.createElement('p')
        project_info.className = 'info'
        project_info.textContent = project.description

        const links = document.createElement('div')
        links.className = 'links'

        const github_link = document.createElement('a')
        github_link.title = 'Repository'
        github_link.href = project.repo 
        const github_link_icon = document.createElement('img')
        github_link_icon.src = 'assets/icons/github-mark.png'
        github_link_icon.className = 'link-icon'
        github_link.appendChild(github_link_icon)

        const app_link = document.createElement('a')
        app_link.title='Rendered app'
        app_link.href = project.link
        const app_link_icon = document.createElement('span')
        app_link_icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>`
        app_link.className = 'link-icon'
        app_link.appendChild(app_link_icon)

        const server_link = document.createElement('a')
        server_link.href = project.api 
        const server_link_icon = document.createElement('span')
        server_link_icon.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>'
        server_link.className = 'link-icon'
        server_link.appendChild(server_link_icon)
        server_link.title = 'Rendered API'

        links.append(github_link, app_link, server_link)
        
        project_item.append(project_icon,project_name,project_role,project_info, links)
        projects_section.appendChild(project_item)

    });
}

const projects_section = document.querySelector('.projects')

show_projects()
