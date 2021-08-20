import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }

    // render()가 실행된 후 componentDidMount()가 실행된다.
    render() {
        const { location } = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>
        } else {
            return null;
        }
        // return (
        //     <div>
        //         Hello
        //     </div>
        // );
    }
}

export default Detail;