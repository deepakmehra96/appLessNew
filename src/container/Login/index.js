import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import microValidator from 'micro-validator'
import is from 'is_js'
import './index.css'
import { loginApi, getData } from '../../redux/actions/index';
import Spinner from '../../components/Spinner';

let validationSchema = {
    username: {
        required: {
            errorMsg: 'username is required'
        },
    },
    password: {
        required: {
            errorMsg: 'Password is required'
        },
    },
}

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            checked: true,
            userData: {
                username: '',
                password: ''
            },
            errors: {},
            loading:false
        };
    }

    handleChange(key, event) {
        let { userData } = this.state
        userData[key] = event.target.value
        this.setState({ userData, errors: {} })
    }

    handleSubmit(event) {
        event.preventDefault()
        let { userData } = this.state
        const errors = microValidator.validate(validationSchema, userData)
        if (!is.empty(errors)) {
            this.setState({ errors })
            return
        }
        let data = {
            username: userData.username,
            password: userData.password,
        }
        this.setState({ loading: true })
        this.props.dispatch(loginApi(data)).then(res => {
            if (res.status == 200) {
                this.props.history.push('/dashboard');
                this.setState({ loading: false })
            } else {
                this.setState({ loading: false })
                alert('Invalid Credential')
            }
        }).catch((err) => {
            this.setState({ loading: false })
            alert('Invalid Credential')
        })
    }

    LoadingMessage = () => {
        return (
            <Spinner />
        );
    }
       

    render() {
        let { errors, loading } = this.state
        if (loading) return this.LoadingMessage();
        return (
            <div className="backGroundImage">
                <div className="wrapper-page">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="headingMain">
                                APP LESS
                            </h2>
                            <div className="container">
                                <h6>
                                    Welcome Back !
                                </h6>
                                <p>Sign in to continue to Appless.</p>
                                <form className="form-containerMain" onSubmit={(e) => this.handleSubmit(e)}>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" onChange={this.handleChange.bind(this, 'username')} className="form-control" id="username" placeholder="Enter Username" />
                                        <span className="errorMsg">{errors.email && errors.email[0]}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" onChange={this.handleChange.bind(this, 'password')} className="form-control" id="Password" placeholder="Enter Password" />
                                        <span className="errorMsg">{errors.password && errors.password[0]}</span>
                                    </div>
                                    <Row className="btnOut">
                                        <Col md={6} xs={6} sm={6} xl={6} >
                                            <div className="custom-control custom-checkbox">
                                                <label className="alignRow">
                                                    <input className="checkbox" type="checkbox" name="vehicle1" />
                                                    <p>Remember me</p>
                                                </label>
                                            </div>
                                        </Col>
                                        <Col md={6} xs={6} sm={6} xl={6} className="alignEnd">
                                            <button className="btn-primary" type="submit" value="Enter">Log In</button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Col md={12} xs={12} sm={12} xl={12} className="bottomtext">
                        <p>
                            © 2019 DRM Digital
                        </p>
                    </Col>
                </div>
            </div>

        )
    }
}

export default connect(
    state => ({
        dispatch: state.dispatch
    })
)(Login)