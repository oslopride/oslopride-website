import SanityBlockContent from "@/components/SanityBlockContent";
import Sheet from "@/components/Sheet";
import { contactActions } from "@/store/contact";
import React, { useEffect } from "react";
import { connect } from "react-redux";

const Contact = props => {
  const { contact } = props;
  useEffect(() => {
    props.fetchContactContent();
  }, []);
  if (contact.status !== "SUCCESS"){
    // TODO: Make a better UX while loading
    return <div>Laster ...</div>;
  }

  // eslint-disable-next-line react/no-danger
  return (
    <Sheet>
      <h1>Kontakt oss</h1>
      <SanityBlockContent blocks={contact.data.body} />
    </Sheet>
  );
  };

  const mapStateToProps = state => ({
  contact: state.contact
  });

  const mapDispatchToProps = dispatch => ({
  fetchContactContent: () => dispatch(contactActions.request())
  });

  export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
