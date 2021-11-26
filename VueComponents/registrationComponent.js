app.component("registration-component", {
  template: /* html*/ `<div
    class="modal fade"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    id="registationModel"
    tabindex="-1"
    aria-labelledby="informationModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-dark">
          <h5 class="modal-title text-light" id="informationModal">
            Register User
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body bg-dark">
          <form class="row g-3">
          <div class="col-12">
            <input id="profileId" type="hidden"/>      
          </div>
          <div class="col-12">
            <img class="img-fluid w-50 d-block rounded-circle mx-auto" id="profilePicture"/>
          </div>
            <div class="col-md-6">
              <label for="profileEmail" class="form-label text-light">Email</label>
              <input type="email" class="form-control" id="profileEmail">
            </div>
            <div class="col-md-6">
              <label for="profileName" class="form-label text-light">Name</label>
              <input type="text" class="form-control" id="profileName">
            </div>
            <div class="col-12">
              <label for="profileAddress" class="form-label text-light">Address</label>
              <input type="text" class="form-control" id="profileAddress" placeholder="1234 Main St">
            </div>
            <div class="col-12">
              <button class="btn btn-success">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>`,
});
