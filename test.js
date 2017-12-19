/* eslint-disable fp/no-unused-expression */
/* eslint-disable fp/no-nil */

import projectsForCompany from './'

const allProjects = [
  {
    name: 'CentralLog',
    year: 2014,
    company: 'GMV'
  },
  {
    name: 'Mdirector',
    year: 2015,
    company: 'Antevenio'
  },
  {
    name: 'MSD Calendar',
    year: 2016,
    company: 'IMS'
  },
  {
    name: 'Movistar TV',
    year: 2018,
    company: 'Movistar'
  },
  {
    name: 'Oneweb',
    year: 2019,
    company: 'GMV'
  }
]

const company = 'GMV'

describe('projects for company', () => {
  it('returns the exact number of projects for a given client', () => {
    const projects = projectsForCompany(allProjects, company)
    expect(projects.length).toBe(2)
  })
})
