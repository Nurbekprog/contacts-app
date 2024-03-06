import React, { Component } from "react";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";

class Students extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addModal: false,
      students: [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          group: "React N38",
          doesWork: false,
        },
        {
          id: 2,
          firstName: "Jane",
          lastName: "Doe",
          group: "React N50",
          doesWork: false,
        },
        {
          id: 3,
          firstName: "Jack",
          lastName: "Smith",
          group: "React N45",
          doesWork: true,
        },
      ],
    };
  }

  openAddModal = () => this.setState({ addModal: true });
  closeAddModal = () => this.setState({ addModal: false });

  addStudent = (student) => {
    this.setState({
      students: [
        ...this.state.students,
        { ...student, id: this.state.students.length + 1 },
      ],
    });
  };

  deleteStudent = (studentId) => {
    console.log(studentId);
    this.setState({
      students: this.state.students.filter(
        (student) => student.id !== studentId
      ),
    });
  };

  render() {
    const { students, addModal } = this.state;
    const { closeAddModal, openAddModal } = this;
    return (
      <div className="container py-3  ">
        <div className="w-100">
          <h1>Contact App</h1>
        </div>
        <div className="d-flex w-100  py-3 gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="form-control p-3 w-75"
          />
          <select name="filter" id="filter" className="form-select p-3 w-25">
            <option value="all">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button
            className="btn btn-outline-success p-3 w-auto input-group-text"
            onClick={openAddModal}
          >
            Add Contact
          </button>
        </div>
        <StudentList students={students} deleteStudent ={this.deleteStudent} />
        <AddStudent
          addModal={addModal}
          closeAddModal={closeAddModal}
          addStudent={this.addStudent}
        />
      </div>
    );
  }
}

export default Students;
