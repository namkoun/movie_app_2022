import React from "react";
import "./About.css"


class Detail extends React.Component{
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined){
            history.push('/');
        }
    }

    render() {
        const {location} = this.props
        
        console.log(this.props)

        if (location.state){
            return(
                <div className="about__container">
                    <span>{location.state.title}({location.state.year})</span>
                    <img src={location.state.poster} />
                    <span>{location.state.summary}</span>
                </div>

            )
        }else {
            return null;
        }
    }
}

export default Detail;