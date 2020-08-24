import React from 'react';

class App extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            sessions: [],
            speakers: [],
            isLoaded: false
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
            return <div>Loading...</div>;

        return (
            <div className="App">
                <ul>
                    {sessions.map(session => (
                        <li key={session.session_id}>
                            {console.log(session.speakers.map(s => s.first_name))}
                            Session name: {session.session_name} | Session description: {session.session_description} |
                            Session speakers: {session.speakers.map(speaker => speaker.first_name)}
                        </li>

                    ))}
                </ul>
            </div>
        );

    }

}

export default App;