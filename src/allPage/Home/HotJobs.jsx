import { useEffect, useState } from "react";
import HotJobsCard from "./HotJobsCard";

const HotJobs = () => {

 const [hotJobs, setHotJobs] = useState([]);

 useEffect(()=>{
  fetch('http://localhost:5000/jobs')
  .then(res => res.json())
  .then(data => setHotJobs(data))
 },[])


  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          hotJobs.map(hotjob => <HotJobsCard key={hotjob._id} hotjob={hotjob} />)
        }
      </div>
    </div>
  );
};

export default HotJobs;