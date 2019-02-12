import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Actions } from "@/store/about";

const About = props => {
  console.log(props);
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
  fetchAboutContent: () => dispatch(Actions.request())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
