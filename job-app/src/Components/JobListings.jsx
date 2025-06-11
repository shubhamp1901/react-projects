import React, { useEffect, useState } from "react";
import JobList from "./JobList";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

//   read proxying react suspense and react query useHook

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome
        ? "/api/jobs?_limit=3"
        : "/api/jobs";

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log(error, "error");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // const JobListings = isHome ? jobs.slice(0,3) : jobs

  return (
    <>
      <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
          <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobList
                  key={job.id}
                  type={job.type}
                  title={job.title}
                  description={job.description}
                  location={job.location}
                  salary={job.salary}
                  id={job.id}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default JobListings;
