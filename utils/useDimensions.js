import React from "react";

export default function useDimensions() {
  const ref = React.useRef(null);
  const [dimensions, setDimensions] = React.useState({});

  React.useEffect(() => {
    if (ref.current) {
      setDimensions(ref.current.getBoundingClientRect().toJSON());
    }
  }, [ref.current]);

  return [ref, dimensions];
}
