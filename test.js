import projectsForYear from "./";

const projects = [
  {
    name: "CentralLog",
    year: 2014,
  },
  {
    name: "Mdirector",
    year: 2015,
  },
  {
    name: "MSD Calendar",
    year: 2016,
  },
  {
    name: "Movistar TV",
    year: 2018,
  },
  {
    name: "Oneweb",
    year: 2019,
  },
];

const year = 2015;

describe("projects for year", () => {
  it("returns the exact number of projects finished one a given year", () => {
    const projectsOnYear = projectsForYear(projects, year);
    expect(projectsOnYear.length).toBe(1);
    expect(projectsOnYear[0]).toMatch(/Mdirector/);
  });
});
