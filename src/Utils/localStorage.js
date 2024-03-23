const getStoredJobApplication = () => {
  const storedJobApplication = localStorage.getItem("job-applications");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const saveJobApplication = (id) => {
  const storedJobApplication = getStoredJobApplication();
  const existJob = storedJobApplication.find((jobId) => jobId === id);
  if (!existJob) {
    storedJobApplication.push(id);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplication)
    );
  }
};
const isJobApplied = (id) => {
  const storedJobApplication = getStoredJobApplication();
  return storedJobApplication.includes(id);
};
const removeJobApplication = (id) => {
  let storedJobApplications = getStoredJobApplication();
  storedJobApplications = storedJobApplications.filter((jobId) => jobId !== id);
  localStorage.setItem(
    "job-applications",
    JSON.stringify(storedJobApplications)
  );
};

export {
  saveJobApplication,
  getStoredJobApplication,
  isJobApplied,
  removeJobApplication,
};
