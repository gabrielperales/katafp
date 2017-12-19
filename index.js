// Sustituir filter y map por sus versiones de ramda

export default function projectsForCompany(projects, company) {
  const filtered = projects.filter(project => project.company === company);
  return filtered.map(project => project.name);
}
