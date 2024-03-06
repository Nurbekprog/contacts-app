import { Button, Modal } from "react-bootstrap";
import React, { Component } from "react";

class AddStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: {
        firstName: "",
        lastName: "",
        gender: "",
        doesWork: false,
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      student: {
        ...this.state.student,
        [e.target.id]: e.target.value,
      },
    });
  };

  handleAdd = (e) => {
    e.preventDefault();
    this.props.closeAddModal();
    this.props.addStudent(this.state.student);
  };
  render() {
    const { addModal, closeAddModal } = this.props;
    const { firstName, lastName, gender, doesWork } = this.state.student;
    const { handleChange } = this;
    return (
      <div>
        <Modal show={addModal} onHide={closeAddModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label htmlFor="firstName">Firstname</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="md-3">
                <label htmlFor="lastName">Lastname</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3 my-2">
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  id="gender"
                  value={gender}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="male">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div class="form-check py-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  checked={doesWork}
                  onChange={(e) => {
                    this.setState({
                      student: {
                        ...this.state.student,
                        doesWork: e.target.value,
                      },
                    });
                  }}
                  id="doesWork"
                />
                <label class="form-check-label" for="doesWork">
                  Does Work?
                </label>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeAddModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.handleAdd}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddStudent;
