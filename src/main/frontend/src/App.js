import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Dropdown from 'react-bootstrap/Dropdown';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';


class App extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            sessions: [],
            speakers: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/v1/sessions')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    sessions: json,
                    isLoaded: true,
                })
            }).catch((err) => {
            console.log(err);
        });
    }

    render() {

        const {isLoaded, sessions} = this.state;

        if (!isLoaded)
            return <div>
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
            </div>;

        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sessions
                </Dropdown.Toggle>
                <Dropdown.Menu>
                        {sessions.map(session => (
                            <Dropdown.Item key={session.session_id}>
                                {console.log(session.speakers.map(s => s.first_name))}
                                {session.session_name}
                            </Dropdown.Item>
                        ))}
                </Dropdown.Menu>
            </Dropdown>
        );

    }

}

export default App;