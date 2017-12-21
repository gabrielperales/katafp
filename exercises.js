// replace map, filter
// collection-iteration functions
// compose/pipe
//prop, propEq
export function projectsForCompany(company, projects) {
  const filtered = projects.filter(project => project.company === company)
  return filtered.map(project => project.name)
}

// complement
export function isProjectFinished(projectName, projects) {
  return projects.find(p => p.name === projectName).status === 'finished'
}

export function isProjectUnfinished(projectName, projects) {
  return projects.find(p => p.name === projectName).status !== 'finished'
}

// both
// partial application/curry
// imperative vs functional gte, subtract, when, always
// point free programming
export const everlastingProjects = (year, projects) => {
  const filtered = projects.filter(
    project => year - project.year >= 2 && project.status === 'ongoing'
  )
  return filtered.map(project => project.name)
}

// lenses
