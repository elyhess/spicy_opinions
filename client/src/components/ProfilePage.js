import React from "react";

function ProfilePage(props) {
  console.log(props.user)

  return (
      <div>Hello {props.user.email}</div>
  )
}

export default ProfilePage;