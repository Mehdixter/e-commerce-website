import React from "react";
import { NavLink } from "react-router-dom";
function Team() {
  return (
    <div>
      {/* <!-- Start Team Section --> */}
      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-5 mx-auto text-center">
              <h2 className="section-title">Our Team</h2>
            </div>
          </div>

          <div className="row">
            {/* <!-- Start Column 1 --> */}
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img src="images/person_1.jpg" className="img-fluid mb-5" />
              <h3 clas>
                <NavLink to="#">
                  <span className="">Lawson</span> Arnold
                </NavLink>
              </h3>
              <span className="d-block position mb-4">CEO, Founder, Atty.</span>
              <p>
                Separated they live in. Separated they live in Bookmarksgrove
                right at the coast of the Semantics, a large language ocean.
              </p>
              <p className="mb-0">
                <NavLink to="#" className="more dark">
                  Learn More <span className="icon-arrow_forward"></span>
                </NavLink>
              </p>
            </div>
            {/* <!-- End Column 1 -->

					<!-- Start Column 2 --> */}
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img src="images/person_2.jpg" className="img-fluid mb-5" />

              <h3 clas>
                <NavLink to="#">
                  <span className="">Jeremy</span> Walker
                </NavLink>
              </h3>
              <span className="d-block position mb-4">CEO, Founder, Atty.</span>
              <p>
                Separated they live in. Separated they live in Bookmarksgrove
                right at the coast of the Semantics, a large language ocean.
              </p>
              <p className="mb-0">
                <NavLink to="#" className="more dark">
                  Learn More <span className="icon-arrow_forward"></span>
                </NavLink>
              </p>
            </div>
            {/* <!-- End Column 2 -->

					<!-- Start Column 3 --> */}
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img src="images/person_3.jpg" className="img-fluid mb-5" />
              <h3 clas>
                <NavLink to="#">
                  <span className="">Patrik</span> White
                </NavLink>
              </h3>
              <span className="d-block position mb-4">CEO, Founder, Atty.</span>
              <p>
                Separated they live in. Separated they live in Bookmarksgrove
                right at the coast of the Semantics, a large language ocean.
              </p>
              <p className="mb-0">
                <NavLink to="#" className="more dark">
                  Learn More <span className="icon-arrow_forward"></span>
                </NavLink>
              </p>
            </div>
            {/* <!-- End Column 3 -->

					<!-- Start Column 4 --> */}
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img src="images/person_4.jpg" className="img-fluid mb-5" />

              <h3 clas>
                <NavLink to="#">
                  <span className="">Kathryn</span> Ryan
                </NavLink>
              </h3>
              <span className="d-block position mb-4">CEO, Founder, Atty.</span>
              <p>
                Separated they live in. Separated they live in Bookmarksgrove
                right at the coast of the Semantics, a large language ocean.
              </p>
              <p className="mb-0">
                <NavLink to="#" className="more dark">
                  Learn More <span className="icon-arrow_forward"></span>
                </NavLink>
              </p>
            </div>
            {/* <!-- End Column 4 --> */}
          </div>
        </div>
      </div>
      {/* <!-- End Team Section --> */}
    </div>
  );
}

export default Team;
