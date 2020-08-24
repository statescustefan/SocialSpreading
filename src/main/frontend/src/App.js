import React from 'react';

class App extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            speakers: [],
            sessions: [],
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
                    {sessions.map(item => (
                        <li key={item.id}>
                            Name: {item.name} | Email: {item.email}
                        </li>
                    ))}
                </ul>
            </div>
        );

    }

}

export default App;