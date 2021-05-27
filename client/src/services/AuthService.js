class AuthService {
  async login(email, password) {
    try {
      const response = await fetch("http://localhost:4000/api/v1/users/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password})
      });
      const user = await response.json();
      if (user.token) {
        localStorage.setItem("user", JSON.stringify(user))
      }
      return user
    } catch (error) {
      console.log(error)
    }
  }

  logout() {
    localStorage.removeItem("user")
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

}

export default new AuthService();
