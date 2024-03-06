import React, { Component } from "react";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";

class Students extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addModal: false,
      search: "",
      filter: "",
      filteredStudents: [],
      students: [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          group: "Male",
          doesWork: false,
          number: "+998 91 552 90 34",
        },
        {
          id: 2,
          firstName: "Jane",
          lastName: "Doe",
          group: "Female",
          doesWork: false,
          number: "+998 93 333 33 34",
        },
        {
          id: 3,
          firstName: "Jack",
          lastName: "Smith",
          group: "Male",
          doesWork: true,
          number: "+998 99 342 34 34",
        },
      ],
    };
  }

  openAddModal = () => this.setState({ addModal: true });
  closeAddModal = () => this.setState({ addModal: false });

  addStudent = (student) => {
    const newStudents = [
      ...this.state.students,
      { ...student, id: this.state.students.length + 1 },
    ];
    this.setState({
      students: newStudents,
      filtered: newStudents,
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

  componentDidMount() {
    this.setState({
      filteredStudents: this.state.students,
    });
  }

  handleSearchChange = (e) => {
    const text = e.target.value;
    this.setState({ search: text });
    this.setState({
      filteredStudents: this.state.students.filter(
        (student) =>
          student.firstName.toLowerCase().includes(text.toLowerCase()) ||
          student.lastName.toLowerCase().includes(text.toLowerCase())
      ),
    });
  };

  handleFilterChange = (e) => {
    const group = e.target.value;
    this.setState({
      filter: group,
    });
    const filtered = this.state.students.filter((student) => {
      student.group === group;
    });
    this.setState({
      filteredStudents: filtered,
    });
  };

  componentDidMount() {
    this.setState({
      filteredStudents: this.state.students,
    });
  }

  render() {
    const { search, filter, filteredStudents, addModal } = this.state;
    const {
      handleSearchChange,
      handleFilterChange,
      closeAddModal,
      openAddModal,
    } = this;
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
            id="search"
            value={search}
            onChange={handleSearchChange}
          />
          <select
            name="filter"
            id="filter"
            className="form-select p-3 w-25"
            value={filter}
            onChange={handleFilterChange}
          >
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
        <StudentList
          students={filteredStudents}
          deleteStudent={this.deleteStudent}
        />
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
