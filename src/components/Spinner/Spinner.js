import './Spinner.css'
// Spinner
const Spinner = () => {
  return (
    <>
      <div className="spinnerContainer">
        <img src={ require (`../../assets/loader.gif`) }  alt="loader" className="spinnerImg" />
      </div>
    </>
  );
};

export default Spinner;
