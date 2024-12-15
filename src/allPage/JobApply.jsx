import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const {id} = useParams();
  const {user} = useAuth()
  const navigate = useNavigate()


const handleJobRequire = (e) => {
  e.preventDefault()
  const form = e.target
  const linkedin = form.Linkedin.value
  const github = form.Github.value
  const resume = form.Resume.value
   
  const jobApplication = {
    job_id: id,
    applicant_email: user.email,
    linkedin, 
    github, 
    resume
  }

  fetch('http://localhost:5000/job-application', {
    method: "POST",
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(jobApplication)
  })
  .then(res => res.json())
  .then(data => {
    if(data.insertedId){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/myApplications')
    }
  })
}

  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl font-semibold text-center">Jobe require</h1>
      <form className="card-body" onSubmit={handleJobRequire}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Linkedin</span>
          </label>
          <input type="url" placeholder="Linkedin" name="Linkedin" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github</span>
          </label>
          <input type="url" placeholder="Github" name="Github" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume</span>
          </label>
          <input type="url" placeholder="Resume" name="Resume" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">submit</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default JobApply;