import { aboutActions } from "@/store/about";
import React, { useEffect } from "react";
import { connect } from "react-redux";

const About = props => {
  useEffect(() => {
    props.fetchAboutContent();
  }, []);
  if (props.about.status !== "SUCCESS") {
    return <div>Loading ...</div>;
  }
  return <div>Om Oss</div>;
};

const mapStateToProps = state => ({
  about: state.about
});

const mapDispatchToProps = dispatch => ({
  fetchAboutContent: () => dispatch(aboutActions.request())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
