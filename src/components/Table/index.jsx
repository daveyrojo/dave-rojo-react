import React from 'react';
import './style.css';
import axios from 'axios';

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    // handle input change to .sort through the names
    // look up .sort

    componentDidMount() {
        axios.get("https://randomuser.me")
        .then((res) => {
            this.setState({ users: });
        })
    }

    render() {
        return(
            // return all our data and display to the page
        );
    };
};
