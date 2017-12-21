// Sustituir filter y map por sus versiones de ramda

// 1. Functions as first order citizens
// 2. Combining functions

export default function projectsForCompany(projects, company) {
  const filtered = projects.filter(project => project.company === company)
  return filtered.map(project => project.name)
}

// replace map filter
// compose/pipe
// partial application/curry
// imperative vs functional. all operator replacements
// point free programming
// lenses
