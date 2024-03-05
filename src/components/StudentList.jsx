import React, { Component } from "react";

class StudentList extends Component {
  render() {
    const { students, deleteStudent } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Group</th>
              <th>Does Work?</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, i) => (
              <tr key={student.id}>
                <td>{i + 1}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.group}</td>
                <td>{student.doesWork ? "✅" : "❌"}</td>
                <td className="d-flex gap-3">
                  <button className="btn btn-warning btn-sm">Edit</button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
