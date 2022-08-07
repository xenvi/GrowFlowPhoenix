import React, { Component } from "react";
import styled from 'styled-components';
// icons
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
// redux
import { connect } from "react-redux";
import { createEmployee } from "../redux/actions/dataActions";
import { apiKey, apiUser } from "../redux/apiObject";

const Wrapper = styled.section`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.5);
`;
const ModalCard = styled.div`
    max-width: 600px;
    width: 100%;
    height: auto;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 0.15rem 1rem rgba(0,0,0,0.3);
`;
const Topbar = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
    & svg {
        cursor: pointer;
    }
`;
const Title = styled.h3`
`;
const Form = styled.form`
    padding: 2rem 0 0;
`;
const Row = styled.div`
    display: flex;
    width: 100%;
    padding: 0 1.5rem;
    margin-bottom: 1.5rem;
    &:last-child {
        margin-bottom: none;
    }
    & input[type="radio"] {
        display:none;   
    }
    & input[type="radio"]:checked + label {
        background: rgba(0,0,0,0.7);
        color: #fff;
    }
    & input[type="radio"] + label {
        padding: 0.5rem 1rem;
        border: 1px solid rgba(0,0,0,0.3);
        cursor: pointer;
    }
    &:last-child {
        margin-bottom: 0;
    }
    & .inner-row {
        padding: 0;
    }
`;
const Col = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    & label {
        margin-bottom: 2px;
    }
    & input {
        padding: 0.5rem 0.5rem;
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 5px;
    }
    &:first-child {
        margin-right: 1rem;
    }
`;
const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 1rem 1.5rem;
    border-top: 1px solid rgba(0,0,0,0.3);
    & button {
        cursor: pointer;
    }
    & .cancel {
        background: none;
        outline: none;
        border: 1px solid rgba(0,0,0,0.3);
        padding: 0.35rem 0.75rem;
        margin-right: 0.5rem;
        transition: 0.3s ease-in-out;
        &:hover {
            color: #6a43f7;
            border: 1px solid #6a43f7;
            transition: 0.3s ease-in-out;
        }
    }
    & .create-new {
        outline: none;
        background: #6a43f7;
        color: #fff;
        border: none;
        padding: 0.35rem 0.75rem;
        transition: 0.3s ease-in-out;
        &:hover {
            background: #5836d6;
            transition: 0.3s ease-in-out;
        }
    }
`;

class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            telephone: "",
            role: ""
          };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createEmployee({ 
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            telephone: this.state.telephone,
            role: this.state.role,
            ApiKey: apiKey,
            ApiUser: apiUser
         });
        this.setState({ 
            firstName: "",
            lastName: "",
            email: "",
            telephone: "",
            role: ""
        });
        this.props.closeModal();
    };
      
    render() {
        return (
            <Wrapper>
                <ModalCard>
                    <Topbar>
                        <Title>Add New Employee</Title>
                        <CloseOutlinedIcon onClick={this.props.closeModal} />
                    </Topbar>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col>
                                <label htmlFor="firstName">First Name:</label>
                                <input type="text" id="firstName" name="firstName" value={this.state.firstName} onChange={this.handleChange} required></input>
                            </Col>
                            <Col>
                                <label htmlFor="lastName">Last Name:</label>
                                <input type="text" id="lastName" name="lastName" value={this.state.lastName} onChange={this.handleChange} required></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
                            </Col>
                            <Col>
                                <label htmlFor="telephone">Phone Number:</label>
                                <input type="number" id="telephone" name="telephone" value={this.state.telephone} onChange={this.handleChange} required></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label>Role:</label>
                                <Row className="inner-row">
                                    <input type="radio" name="role" id="driver" value="driver" onChange={this.handleChange}></input>
                                    <label htmlFor="driver">Driver</label>
                                    <input type="radio" name="role" id="owner" value="owner" onChange={this.handleChange}></input>
                                    <label htmlFor="owner">Owner</label>
                                    <input type="radio" name="role" id="other" value="other" onChange={this.handleChange}></input>
                                    <label htmlFor="other">Other</label>
                                </Row>
                            </Col>
                        </Row>
                        <Buttons>
                            <button className="cancel" onClick={this.props.closeModal}>
                                Cancel
                            </button>
                            <button type="submit" className="create-new">
                                Create New Employee
                            </button>
                        </Buttons>
                    </Form>
                </ModalCard>
            </Wrapper>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data
})

const mapActionsToProps = {
    createEmployee
}

export default connect(mapStateToProps, mapActionsToProps)(Modal);