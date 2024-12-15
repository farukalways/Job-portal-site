import { useLoaderData } from "react-router-dom";

const JobDetails = () => {

const {title, category, company, company_logo}= useLoaderData();



  return (
    <div className="card card-compact bg-base-100 w-4/6 mx-auto shadow-xl">
  <figure>
    <img
    className="w-48 mx-auto"
      src={company_logo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h1 className="text-4xl">{title}</h1>
    <h2 className="card-title">company: {company}</h2>
    <p className="text-3xl">{category}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Apply Now</button>
    </div>
  </div>
</div>
  );
};

export default JobDetails;