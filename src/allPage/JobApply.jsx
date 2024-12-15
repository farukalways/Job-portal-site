
const JobApply = () => {

const handleJobRequire = (e) => {
  e.preventDefault()
  const form = e.target
  const linkedin = form.Linkedin.value
  const github = form.Github.value
  const resume = form.Resume.value
  console.log(linkedin, github, resume);
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