import {
  filter,
  map,
  pipe,
  compose,
  complement,
  find,
  propEq,
  prop,
  gte,
  lt,
  subtract,
  curry,
  both,
  when,
  isEmpty,
  always
} from 'ramda'

const getProjectName = prop('name')
const isForCompany = propEq('company')
const getAllProjectNames = map(getProjectName)

// replace map, filter
// collection-iteration functions
export const projectsForCompany = (company, projects) => {
  const filterCompanyProjects = filter(isForCompany(company))
  //   return pipe(filterCompanyProjects, getAllProjectNames)(projects)
  return compose(getAllProjectNames, filterCompanyProjects)(projects)
}

// complement
const isFinished = propEq('status', 'finished')
const hasSameName = propEq('name')
const findProject = projectName => find(hasSameName(projectName))

export const isProjectFinished = (projectName, projects) =>
  compose(isFinished, findProject(projectName))(projects)

export const isProjectUnfinished = complement(isProjectFinished)

// either/both
// partial application/curry
// imperative vs functional. all operator replacements
const isOngoing = complement(isFinished)
const errorWhenEmpty = when(isEmpty, always('No results found!'))

const everlasting = currentYear =>
  both(isOngoing, pipe(prop('year'), gte(currentYear - 2)))

export const getEverlasting = (currentYear, list) => {
  return compose(
    errorWhenEmpty,
    map(prop('name')),
    filter(everlasting(currentYear))
  )(list)
}

// point free programming
// lenses
