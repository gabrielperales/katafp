/* eslint-disable fp/no-unused-expression */
/* eslint-disable fp/no-nil */

// import {
// projectsForCompany,
// isProjectFinished,
// isProjectUnfinished,
// getEverlasting
// } from './exercises'
import {
  projectsForCompany,
  isProjectFinished,
  isProjectUnfinished,
  getEverlasting
} from './solutions'

const allProjects = [
  {
    name: 'CentralLog',
    year: 2014,
    company: 'GMV',
    status: 'finished'
  },
  {
    name: 'Mdirector',
    year: 2015,
    company: 'Antevenio',
    status: 'finished'
  },
  {
    name: 'MSD Calendar',
    year: 2016,
    company: 'IMS',
    status: 'ongoing'
  },
  {
    name: 'Movistar TV',
    year: 2018,
    company: 'Movistar',
    status: 'ongoing'
  },
  {
    name: 'Oneweb',
    year: 2019,
    company: 'GMV',
    status: 'ongoing'
  }
]

const company = 'GMV'
const currentYear = 2018

describe('projects for company', () => {
  it('returns the exact list of projects for a given client company', () => {
    const projects = projectsForCompany(company, allProjects)
    expect(projects.length).toBe(2)
    expect(projects).toContain('CentralLog')
    expect(projects).toContain('Oneweb')
  })
})
describe('isProjectFinished', () => {
  it('returns true for a project with status = finished', () => {
    const finished = isProjectFinished('Oneweb', allProjects)

    expect(finished).toBe(false)
  })
})

describe('isProjectUnfinished', () => {
  it('returns true for a project with status != finished ', () => {
    const finished = isProjectUnfinished('Oneweb', allProjects)

    expect(finished).toBe(true)
  })
})

describe('everlastingProjects', () => {
  it('returns the list of not finished projects that started 2 years ago at least', () => {
    const projects = getEverlasting(currentYear, allProjects)

    expect(projects.length).toBe(1)
    expect(projects).toContain('MSD Calendar')
  })

  it('returns a message if no projects matching', () => {
    const result = getEverlasting(2013, allProjects)

    expect(result).toEqual('No results found!')
  })
})
