import React, { Component } from 'react';
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './ErrorBoundaryStyles';

class ErrorBoundary extends Component {
    constructor(){
        super();

        this.state = {
            hasErrored: false 
        }
    }

    static getDerivedStateFromError(error) {
        return { hasErrored: true };
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/g3hgqe8.png' />
                    <ErrorImageText>
                        Sorry, this page is broken...
                    </ErrorImageText>
                </ErrorImageOverlay>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;