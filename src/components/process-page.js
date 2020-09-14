import React, { Component } from 'react';

const ProcessPage = ({ match }) => {
    const name = match.params.name
    return (
        <>
            <h1>This is a Process</h1>
        </>
    );
}
export default ProcessPage;