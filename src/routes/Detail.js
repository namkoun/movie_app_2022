import React from "react";
import "./About.css"
import {Link} from "react-router-dom";

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
                <Link to={{pathname:'/'}}>
                    <div className="about__container">
                        <span>{location.state.title}({location.state.year})</span>
                        <img src={location.state.poster} />
                        <span>{location.state.summary}</span>

                    </div>
                </Link>
            )
        }else {
            return null;
        }
    }
}

export default Detail;