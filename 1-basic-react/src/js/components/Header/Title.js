import React from "react";

export default class Title extends React.Component{
    render(){
        return(
            <div>
            <h1>REACT JS -- Sample React Project 1.0</h1>
            <h3>{this.props.title}</h3>
            </div>
        );
    }
}