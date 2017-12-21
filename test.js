/* eslint-disable fp/no-unused-expression */
/* eslint-disable fp/no-nil */

// import { projectsForCompanyCollIter } from './exercises'
import {
  projectsForCompany,
  isProjectFinished,
  isProjectUnfinished
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

describe('projects for company', () => {
  it('returns the exact list of projects for a given client company', () => {
    const projects = projectsForCompany(allProjects, company)
    expect(projects.length).toBe(2)
    expect(projects).toContain('CentralLog')
    expect(projects).toContain('Oneweb')
  })
})
describe('isProjectFinished', () => {
  it('returns true for a project with status = finished', () => {
    const finished = isProjectFinished(allProjects, 'Oneweb')

    expect(finished).toBe(false)
  })
})

describe('isProjectUnfinished', () => {
  it('returns true for a project with status != finished ', () => {
    const finished = isProjectUnfinished(allProjects, 'Oneweb')

    expect(finished).toBe(true)
  })
})
