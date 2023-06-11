import Spinner from "react-bootstrap/Spinner";

function Loading({ loading, children }) {
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else {
    return <>{children}</>;
  }
}

export default Loading;
