import React from "react";
import "./About.css"
import {Link} from "react-router-dom";
import Disqus from "disqus-react";


class Detail extends React.Component{
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined){
            history.push('/');
        }
    }

    render() {
        const {location} = this.props
        const disqusShortname = "http-localhost-3000-movie-detail"
        const disqusConfig = {
            url: "http://localhost:3000",
            identifier: location.state.title,
            title: location.state.title
        }

        console.log(this.props)

        if (location.state){
            return(
               <div >

                    <div className="about__container">
                        <div className="about__back">
                            <Link to={{pathname:'/'}}>뒤로가기</Link>
                        </div>
                        <span className="title">{location.state.title}({location.state.year})</span>
                        <img src={location.state.poster} />
                        <span>{location.state.summary}</span>
                    </div>
                   <Disqus.DiscussionEmbed
                       shortname={disqusShortname}
                       config={disqusConfig}
                   />
               </div>
               
            )
        }else {
            return null;
        }
    }
}

export default Detail;