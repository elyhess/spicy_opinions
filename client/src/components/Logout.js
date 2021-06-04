import AuthService from "../services/AuthService"

function Logout() {
  AuthService.logout()
  window.location = "/about"
}

export default Logout;