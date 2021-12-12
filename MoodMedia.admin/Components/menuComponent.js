app.component("menu-component", {
  template: /* html */ `<div class="container">
    <div class="row mt-2 g-4">
      <div class="col-md-4">
        <a
          href="#"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#userActivityModal"
        >
          <div class="card p-1">
            <div
              class="
                d-flex
                justify-content-between
                align-items-center
                p-2
              "
            >
              <div class="flex-column lh-1 imagename">
                <span>Users</span>
              </div>
              <div>
                <img
                  src="./images/icons/people.svg"
                  height="100"
                  width="100"
                />
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-md-4">
        <a href="">
          <div class="card p-2">
            <div
              class="
                d-flex
                justify-content-between
                align-items-center
                p-2
              "
            >
              <div class="flex-column lh-1 imagename">
                <span>SensorData</span>
              </div>
              <div>
                <img
                  src="./images/icons/clipboard-data.svg"
                  height="100"
                  width="100"
                />
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-md-4">
        <a href="">
          <div class="card p-2">
            <div
              class="
                d-flex
                justify-content-between
                align-items-center
                p-2
              "
            >
              <div class="flex-column lh-1 imagename">
                <span>Graphs</span>
              </div>
              <div>
                <img
                  src="./images/icons/graph-up.svg"
                  height="100"
                  width="100"
                />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div> `,
});
