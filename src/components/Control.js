import React, { Component } from "react";

class Control extends Component {
    render() {
        console.log('Control render');
        return (
            <ul>
                <li><a href='/create' onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangeMode('create');
                }.bind(this)}>create</a></li>
                <li><a href='/update' onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangeMode('update');
                }.bind(this)}>update</a></li> 
                <li><input onClick={ function (e) {
                    e.preventDefault();
                    this.props.onChangeMode('delete');
                }.bind(this)}type='button' value="delete" ></input></li> {/* delete는 링크로 만들시 주소를 미리 방문하는 프로그램에 의하여 delelte처리가 될 수도 있기 때문에 operation 기능인 버튼을 사용하는 것이 좋다.*/}
            </ul>
        )
    }
}

export default Control;