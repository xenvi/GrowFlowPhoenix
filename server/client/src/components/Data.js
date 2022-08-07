import React, { Component } from "react";
import styled from 'styled-components';
import { Pagination } from '@material-ui/lab';
import CircularProgress from '@material-ui/core/CircularProgress';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
// icons
import SearchIcon from '@material-ui/icons/Search';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
// component
import EmployeeModal from './EmployeeModal';
// redux
import { connect } from "react-redux";
import { getEmployees } from "../redux/actions/dataActions";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: auto;
    background: #fff;
`;
const Title = styled.div`
    height: 30px;
    margin: 2rem 0 1rem 1.5rem;
    font-weight: bold;
    font-size: 1.5rem;
`;
const InfoBar = styled.div`
    display: flex;
    justify-content: space-between;
`;
const NavLinks = styled.ul`
    list-style: none;
    margin: 0;
    padding-left: 10px;
    display: flex;
    align-items: flex-end;
    & .active {
        color: #6a43f7;
        border-bottom: 3px solid #6a43f7;
        font-weight: bold;
    }
`;
const Link = styled.li`
    padding: 0.75rem 0;
    margin: 0 1rem;
    transition: 0.3s ease-in-out;
    &:hover {
        cursor: pointer;
        color: #6a43f7;
        transition: 0.3s ease-in-out;
    }
`;
const StyledButton = styled.button`
    outline: 0;
    border: none;
    background: #6a43f7;
    color: #fff;
    padding: 0.3rem 1rem;
    margin: 0.5rem 1rem;
    transition: 0.3s ease-in-out;
    &:hover {
        cursor: pointer;
        background: #5836d6;
        transition: 0.3s ease-in-out;
    }
`;
const Content = styled.section`
    background: #f0f0f0;
    min-height: 30vh;
    height: 100%;
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const InnerContent = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 0.5rem;
    padding: 1rem 1.5rem;
    box-shadow: 0 0.1rem 0.3rem rgba(0,0,0, 0.05);
`;
const Actions = styled.div`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
`;
const SearchInput = styled(Input)`
    width: 250px;
    padding: 0.2rem 0.5rem;
    outline: none;
    border: 1px solid #bdbdbd;
    color: #bdbdbd;
    svg {
        color: #bdbdbd;
    }
    &:before {
        display: none;
    }
`;
const VerticalLine = styled.span`
    border-left: 1px solid #bdbdbd;
    height: 100%;
    padding: 0.5rem 0;
    margin: 0 1em;
`;
const IconButton = styled(Button)`
    outline: none;
    color: #000 !important;
    border: 1px solid #bdbdbd !important;
    background: none !important;
    box-shadow: none !important;
    font-weight: normal !important;
    text-transform: capitalize !important;
    margin-right: 0.2rem !important;
    transition: 0.3s ease-in-out;
    &:hover {
        color: #6a43f7 !important;
        border: 1px solid #6a43f7 !important;
        transition: 0.3s ease-in-out;
    }
`;
const Table = styled.div``;
const Row = styled.li`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    justify-content: space-around;
    padding: 1rem;
`;
const RowHeader = styled.li`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    background: #f9f9f9;
    padding: 1rem;
    font-weight: bold;
`;
const Col = styled.div`
    flex: ${(props) => props.size};
    & .viewBtn {
        text-decoration: none;
        color: #6a43f7;
        cursor: pointer;
    }
    & .ownerRole {
        background: rgba(106, 67, 247, 0.1);
        border: 1px solid #6a43f7;
        color: #6a43f7;
        padding: 0.25rem 0.5rem;
    }
    & .otherRole {
        background: rgba(0, 245, 196, 0.1);
        border: 1px solid #00e6b8;
        color: #00e6b8;
        padding: 0.25rem 0.5rem;
    }
`;
const CheckCol = styled.div`
    flex: ${(props) => props.size};
    text-align: center;
`;
const Paginate = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 1rem 0;
    & li {
        margin: 0 0.5rem;
        cursor: pointer;
        & .MuiPaginationItem-page.Mui-selected {
            background: none;
            border: 1px solid #6a43f7;
            color: #6a43f7;
        }
    }
`;

class Data extends Component {
    constructor() {
        super();
        this.state = {
          currentPage: 6,
          itemsPerPage: 9,
          showModal: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
      }
    componentDidMount() {
        this.props.getEmployees();
    }
    handleChange(e, value) {
        this.setState({
          currentPage: value
        });
      }
    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }
    render() {
        const { employees, loading } = this.props.data;
        const { currentPage, itemsPerPage } = this.state;
        const count = Math.ceil(employees.length / itemsPerPage);

        let renderData = loading ? <Row><CircularProgress /></Row> : employees.length === 0 ? (
            <Row>No employees to display.</Row>
        ) : (employees.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((employee, index) =>
            <Row key={index}>
                <CheckCol size={0.5}><input type="checkbox" /></CheckCol>
                <Col size={1}>{employee.firstName}</Col>
                <Col size={1}>{employee.lastName}</Col>
                <Col size={2}>{employee.email}</Col>
                <Col size={1}>{employee.telephone}</Col>
                <Col size={1}>{employee.role === "owner" ? <span className="ownerRole">{employee.role}</span> : <span className="otherRole">{employee.role}</span>}</Col>
                <Col size={1}><span className="viewBtn" onClick={this.toggleModal}>View</span></Col>
            </Row>
        )
        );


        return (
            <Wrapper>
                <Title>Employees</Title>
                <InfoBar>
                    <NavLinks>
                        <Link className="active">All employees</Link>
                        <Link>Terminated</Link>
                    </NavLinks>
                    <StyledButton onClick={this.toggleModal}>+ Add new employee</StyledButton>
                </InfoBar>
                <Content>
                    <InnerContent>
                        <Actions>
                            <SearchInput startAdornment={
                                <InputAdornment position="start">
                                <SearchIcon />
                                </InputAdornment>
                                } type="text" placeholder="Search employee"></SearchInput>
                                <div>
                                <IconButton
                                    variant="contained"
                                    startIcon={<PrintOutlinedIcon />}
                                >
                                    Print
                                </IconButton>
                                <IconButton
                                    variant="contained"
                                    startIcon={<DeleteOutlinedIcon />}
                                >
                                    Delete
                                </IconButton>
                                <VerticalLine />
                                <IconButton
                                    variant="contained"
                                ><FilterListOutlinedIcon />
                                </IconButton>
                                <IconButton
                                    variant="contained"
                                ><MoreVertOutlinedIcon />
                                </IconButton>
                                </div>
                        </Actions>
                        <Table>
                            <RowHeader>
                                <CheckCol size={0.5}><input type="checkbox" /></CheckCol>
                                <Col size={1}>First Name</Col>
                                <Col size={1}>Last Name</Col>
                                <Col size={2}>Email Address</Col>
                                <Col size={1}>Phone Number</Col>
                                <Col size={1}>Role</Col>
                                <Col size={1}>Action</Col>
                            </RowHeader>
                                {renderData}
                                <Paginate>
                                    <Pagination count={count} page={currentPage} siblingCount={2} variant="outlined" shape="rounded" onChange={this.handleChange} />
                                </Paginate>
                        </Table>
                    </InnerContent>
                </Content>
               {this.state.showModal ? <EmployeeModal closeModal={this.toggleModal} /> : null}
            </Wrapper>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data
})

const mapActionsToProps = {
    getEmployees
}

export default connect(mapStateToProps, mapActionsToProps)(Data);