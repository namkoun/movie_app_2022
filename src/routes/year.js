import React from "react";
import $ from "jquery";
import './year.css';

class year extends React.Component{
    componentDidMount() {

        $(".onc").on('click',function(){
            if ($(".input").val() == ""){
                alert("년도로 입력해 주세요")
            }else {
                uuyd()
                $(".input").val("");
            }
        })
        $(".input").keydown(function (key){
            if (key.keyCode == 13){
                $(".onc").click();
            }
        })
        function uuyd() {

            let rawInput = $(".input").val();
            const year = Number(rawInput);
            const tti = '신,유,술,해,자,축,인,묘,진,사,오,미'.split(',')
            const ttii = '경,신,임,계,갑,을,병,정,무,기'.split(',')

            let ttti = tti[year % 12]
            let iiit = ttii[year % 10]
            let aass = iiit+ttti
            $(".years").text(year)
            $(".yearss").text(iiit+ttti)
            $(".frame").show();
            $(".frame").attr('src','https://ko.wikipedia.org/wiki/'+aass+'년')
        }
    }

    render() {

            return(
                <div className="main">
                    <span>(년도) 숫자만 입력하세요</span>
                    <div className="inputbox">
                            <input className="input" type="number" />
                            <button className="onc">검색</button>
                    </div>
                    <div className="contens" >
                        <div className="years"></div>
                        <div>년에 태어났다면 &ensp;</div>
                        <div className="yearss"></div>
                        <div>년 입니다</div>
                    </div>
                    <div >
                        <iframe className="frame" src="https://www.daum.net/" width="100%" height="600"></iframe>
                    </div>
                </div>
            )
        }
}


export default year;