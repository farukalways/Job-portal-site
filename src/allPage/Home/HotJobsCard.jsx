import { Link } from "react-router-dom";

const HotJobsCard = ({hotjob}) => {
  const { _id,title, category,salaryRange , jobType, company_logo} = hotjob;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
  <figure>
    <img
    className="w-16 mx-auto"
      src={company_logo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{category}</p>
    <div className="card-actions justify-end">
      <p>{salaryRange.min} -- {salaryRange.max}</p>
      <Link to={`/jobs/${_id}`}>
      <button className="btn btn-primary">Apply Now</button>
      </Link>
    </div>
  </div>
</div>
  );
};

export default HotJobsCard;