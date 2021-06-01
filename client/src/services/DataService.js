// Use this for sending request to server for restricted resources
// EX:

// const response = await fetch("http://localhost:4000/api/v1/users", {
//   method: "GET",
//   headers: {headers: authHeader()}
// });

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token };
  } else {
    return {};
  }
}

