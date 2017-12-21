// replace map, filter
// collection-iteration functions
export function projectsForCompanyCollIter(projects, company) {
  const filtered = projects.filter(project => project.company === company)
  return filtered.map(project => project.name)
}

// compose/pipe
export function projectsForCompanyComposePipe(projects, company) {
  const filtered = projects.filter(project => project.company === company)
  return filtered.map(project => project.name)
}

// complement
export function isProjectFinishedComplement(projects, projectName) {
  return projects.find(p => p.name === projectName).status === 'finished'
}

export function isProjectUnfinishedComplement(projects, projectName) {
  return projects.find(p => p.name === projectName).status !== 'finished'
}

// replace map filter
// compose/pipe
// partial application/curry
// imperative vs functional. all operator replacements
// point free programming
// lenses
