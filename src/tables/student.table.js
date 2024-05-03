import React from 'react'

const StudentTable = props => {
  const handleDeleteUser = id => {
    let answer = window.confirm('Are you sure?')

    if (answer) {
      props.deleteUser(id)
    }
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  className="button muted-button"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>

                <button
                  onClick={() => {
                    props.editRow(user)
                  }}
                  className="button muted-button"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
export { StudentTable }