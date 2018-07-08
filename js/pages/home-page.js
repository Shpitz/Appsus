export default {
  template: `
    <section class="home-page">
      <h1>Welcome to the world of Appsus</h1>

      <div class="apps-logos">
      <div class="mister-email-app">
        <h1>Mister Email</h1>
        <router-link to="/email">
      <img src="../img/Email.png">
    </router-link>
      </div>
      <div class="mister-keeper-app">
      <h1>Mister Keeper</h1>
      <router-link to="/notes">
      <img src="../img/Task.png">
      </router-link>
      </div>
      </div>
    </section>
    `,
}