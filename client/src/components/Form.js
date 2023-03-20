function Form() {
  return (
    <div className="container-fluid">
      <div class="row g-3">
        <div class="col-md-3">
          <input
            type="text"
            class="form-control"
            placeholder="First name"
            aria-label="First name"
          />
        </div>
        <div class="col-md-4">
          <input
            type="text"
            class="form-control"
            placeholder="Last name"
            aria-label="Last name"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 m-1">
          <label for="formFile" className="form-label">
            Default file input example
          </label>
          <input className="form-control" type="file" id="formFile" />
        </div>
      </div>
    </div>
  );
}

export default Form;
