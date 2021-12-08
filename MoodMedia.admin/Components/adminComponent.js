app.component("admin-component", {
    template: /*html*/ `
      <div  class="text-light modal fade modal-dialog-centered" id="adminSettingsModel">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-dark">
              <h4 class="modal-title text-light">
                Admin Settings
              </h4>
            </div>
            <div class="modal-body bg-dark">
                <h5>
                    Add Admin
                </h5>
                <form action="/action_page.php">
                    <label for="aName">Admin name: </label>
                    <input type="text" id="aName" name="aName"><br><br>
                    <label for="aPassword">Admin password: </label>
                    <input type="text" id="aPassword" name="aPassword"><br><br>
                    <button class="btn btn-primary" type="button" @click="addAdmin()">Add Admin</button>
                </form>
            </div>
          </div>
        </div>
      </div>
      `,
      data() {
          return{
            adminSettings: false,
            adminName: "",
            adminPassword: "",
        }
      },
      methods: {
        addAdmin(adminName, adminPassword){

        }
    }
})

      