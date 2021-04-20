//Footer component
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { scrollTop } from "../Utility/utilities";

import { FooterContainer } from "./ui";

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <div>
          <h3>About</h3>
          <p>
            The News Reader is an article saving app built by Dante Davidson
            Daniele during a Diploma of Information Technology. View more{" "}
            <Link to="/more-info" target={"_blank"}>
              here.
            </Link>
          </p>
        </div>

        <div>
          <div onClick={scrollTop}>
            <div>
              <FontAwesomeIcon icon={faAngleDoubleUp} />
            </div>
            <div>
              <FontAwesomeIcon icon={faAngleDoubleUp} />
            </div>
            <div>
              <FontAwesomeIcon icon={faAngleDoubleUp} />
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};
