function LoadingSpinner({ label = "Loading..." }) {
  return (
    <div className="status-box">
      <div className="spinner" aria-hidden="true" />
      <p>{label}</p>
    </div>
  );
}

export default LoadingSpinner;
