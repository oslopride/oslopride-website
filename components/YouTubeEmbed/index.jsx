import React from "react";
import getYouTubeID from "get-youtube-id";

export default ({ node }) => {
  if (!node || !node.url) {
    return <></>;
  }

  const id = getYouTubeID(node.url);
  const embedUrl = `https://www.youtube.com/embed/${id}`;
  if (!id) {
    return <></>;
  }

  return (
    <iframe
      title="YouTube"
      width="560"
      height="315"
      src={embedUrl}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    />
  );
};