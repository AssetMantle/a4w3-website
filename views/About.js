import React from "react";
import { Col, Row } from "react-bootstrap";
import Section from "../components/Section";

export default function About() {
  return (
    <Section>
      <Row gap={4}>
        <Col sm={7} className="d-flex flex-column justify-content-center px-4">
          <div className="position-relative w-100 rounded-4">
            <img
              className="rounded-4"
              src="https://images.unsplash.com/photo-1530975080071-4d6704a9a993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="dummy image"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Col>
        <Col sm={5} className="d-flex flex-column justify-content-center px-4">
          <h1 className="text-capitalize h1 pb-2 pb-sm-4 pt-3 pt-sm-0">
            About Us
          </h1>
          <p className="body1 pb-3">
            Art is something we do, a verb. Art is an expression of our
            thoughts, emotions, intuitions, and desires, but it is even more
            personal than that: it is about sharing the way we experience the
            world, which for many is an extension of the personality.
          </p>
          <p className="body1">
            Artist4Web3 is an ambitious attempt to create an intercity coterie
            of artists and creators. Although young, it is mushrooming
            organically with a vision to manifest the competence of art and
            adroitness. We are connecting with individuals and giving them a
            common platform to fabricate a community and help them onboard Web3.
          </p>
        </Col>
      </Row>
    </Section>
  );
}
