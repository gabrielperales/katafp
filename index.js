export default function projectsForYear(projects, year) {
  const filtered = projects.filter(project => project.year === year);
  return filtered.map(project => project.name);
}
