import React from "react";

const clubandorganization = () => {
  const clubStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: "1",
    fontFamily: "'Merriweather', serif"
  };
  return (
    <div style={clubStyles}>
      <div className="container LibreBaskerville">
        <div className="row">
          <div className="col-sm-12 text-center mb-3">
            <span className="display-4">
              &#8249;Clubs&#47;&#8250;
            </span>
          </div>
        </div>

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb shadow">
            <li className="breadcrumb-item">
              <a href="#homepage">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Clubs and Organizations
            </li>
          </ol>
        </nav>

        <div className="card mb-3 shadow">
          <div className="card-body">
            <h5 className="card-title">Phi Beta Sigma Fraternity Inc.</h5>
            <p className="card-text">
              Phi Beta Sigma Fraternity was founded at Howard University in
              Washington, D.C., January 9, 1914, by three young African-American
              male students. The Founders deeply wished to create an
              organization that viewed itself as “a part of” the general
              community rather than “apart from” the general community. They
              believed that each potential member should be judged by his own
              merits, rather than his family background or affluence…without
              regard to race, nationality, skin tone or texture of hair. From
              its inception, the Founders also conceived Phi Beta Sigma as a
              mechanism to deliver services to the general community.
            </p>
          </div>
        </div>

        <div className="card mb-3 shadow">
          <div className="card-body">
            <h5 className="card-title">Student Support Services</h5>
            <p className="card-text">
              Through a grant competition, funds are awarded to institutions of
              higher education to provide opportunities for academic
              development, assist students with basic college requirements, and
              to motivate students toward the successful completion of their
              postsecondary education.
            </p>
          </div>
        </div>

        <div className="card mb-3 shadow">
          <div className="card-body">
            <h5 className="card-title">National Pan-Hellenic Council</h5>
            <p className="card-text">
              The National Pan-Hellenic Council, Incorporated (NPHC) is
              currently composed of nine (9) International Greek letter
              Sororities and Fraternities: Alpha Kappa Alpha Sorority, Inc.
              Alpha Phi Alpha Fraternity, Inc., Delta Sigma Theta Sorority,
              Inc., Zeta Phi Beta Sorority, Inc., Iota Phi Theta Fraternity,
              Inc., Kappa Alpha Psi Fraternity, Inc., Sigma Gamma Rho Sorority,
              Inc. Phi Beta Sigma Fraternity, Inc. and Omega Psi Phi Fraternity,
              Inc. NPHC promotes interaction through forums, meetings and other
              mediums for the exchange of information and engages in cooperative
              programming and initiatives through various activities and
              functions.
            </p>
          </div>
        </div>

        <div className="card mb-3 shadow">
          <div className="card-body">
            <h5 className="card-title">
              The Mathematics and Computer Science Club
            </h5>
            <p className="card-text">
              The Tougaloo College Computer Science and Mathematics Club is an
              organization dedicated to providing Tougaloo students with
              student-to-student academic tutorial sessions, annual events and a
              social network of individuals interested in technology and
              mathematics.
            </p>
          </div>
        </div>

        <div className="card mb-3 shadow">
          <div className="card-body">
            <h5 className="card-title">The Foreign Language Club</h5>
            <p className="card-text">
              The foreign language club promotes the active use of foreign
              languages within a campus setting and beyond and also provides one
              on one tutorial sessions for students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default clubandorganization;
