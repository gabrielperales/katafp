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

const getYear = prop('year')
const getDuration = (currentYear, project) =>
  subtract(currentYear, getYear(project))

const lastsMoreThanTwo = curry((currentYear, project) =>
  gte(getDuration(currentYear, project), 2)
)

const everlastingProject = currentYear =>
  both(isOngoing, lastsMoreThanTwo(currentYear))

const everlastingProjectsSearch = currentYear =>
  compose(getAllProjectNames, filter(everlastingProject(currentYear)))

const errorWhenEmpty = when(isEmpty, always('No results found!'))

export const everlastingProjects = (currentYear, projects) =>
  compose(errorWhenEmpty, everlastingProjectsSearch(currentYear))(projects)

// point free programming
// lenses
