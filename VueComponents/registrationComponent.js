app.component("registration-component", {
    template: `<div
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
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label text-light">Email</label>
              <input type="email" class="form-control" id="inputEmail4">
            </div>
            <div class="col-md-6">
              <label for="inputName" class="form-label text-light">Name</label>
              <input type="text" class="form-control" id="inputName">
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label text-light">Address</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
            </div>
            <div class="col-12">
              <button class="btn btn-primary">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>`
})
