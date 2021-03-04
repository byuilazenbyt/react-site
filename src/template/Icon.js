import React from "react";
import '../App.css';

export class Icon extends React.Component {
    render() {
        return <i className="material-icons">{ this.props.type }</i>;
    }
}