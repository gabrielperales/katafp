// replace map, filter
// collection-iteration functions
import { filter, map, pipe, compose, complement, find, propEq } from 'ramda'

// compose/pipe
export function projectsForCompany(projects, company) {
  const isForCompany = project => project.company === company
  const getProjectName = project => project.name
  const getAllProjectNames = map(getProjectName)
  const filterCompanyProjects = filter(isForCompany)
  // return pipe(filterCompanyProjects, getAllProjectNames)(projects)
  return compose(getAllProjectNames, filterCompanyProjects)(projects)
}

// complement
const isFinished = propEq('status', 'finished')
const isUnfinished = complement(isFinished)
const findProject = projectName => find(propEq('name', projectName))
const isFoundProjectFinished = compose(isFinished, findProject)
const isFoundProjectUnfinished = compose(isUnfinished, findProject)
export function isProjectFinished(projects, projectName) {
  return isFinished(findProject(projectName)(projects))
}

export function isProjectUnfinished(projects, projectName) {
  return isUnfinished(findProject(projectName)(projects))
}

// partial application/curry
// imperative vs functional. all operator replacements
// point free programming
// lenses
