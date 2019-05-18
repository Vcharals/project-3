import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TeacherFormSelect from "./formTeacherSelect";
import teachers from "./teachers.json";

class ContactPage extends React.Component {
  state = {
    teachers: teachers
  };

  componentDidMount() {}

  selectTeacher = name => {
    const findTeacher = this.state.teachers.find(item => item.name === name);

    if (findTeacher) {
      this.setState({
        name: this.state.teachers
      });
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div class="container" id="formHolder">
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Who are you looking for?</Form.Label>
            <Form.Control as="select">
              <option>select a teacher...</option>

              {this.state.teachers.map(teacher => (
                <TeacherFormSelect
                  name={teacher.name}
                  subject={teacher.subject}
                  selectedTeacher={this.selectTeacher}
                />
              ))}
            </Form.Control>
          </Form.Group>

          <br />

          <Form.Label>Who is leaving the message?</Form.Label>
          <Form.Row>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Form.Row>

          <br />

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Please write your message below.</Form.Label>
            <Form.Control as="textarea" rows="5" />
          </Form.Group>

          <Button
            variant="warning"
            type="submit"
            onClick={this.handleFormSubmit}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default ContactPage;
