import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode:'read',
            selected_content_id: 2,
            subject:{title:'WEB', sub:'World Wide Web!'},
            welcome:{title:'Welcome', desc:'Hello,React!!'},
            contents:[
                {id:1, title:'HTML', desc:'HTML is for information'},
                {id:2, title:'CSS', desc:'CSS is for design'},
                {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
            ]
        }
    }  
    render() {
        console.log('App render');
        var _title, _desc = null;
        if( this.state.mode === 'welcome' ) {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if ( this.state.mode === 'read' ) {
            var i = 0;
            while(i < this.state.contents.length) {
                var data = this.state.contents[i];
                if(data.id === this.state.selected_content_id) {
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
                i = i + 1;
            }
        }
        console.log("render", this); // render 함수 내에서의 this는 현재 컴포넌트를 가르킨다.
        return (
            <div className="App">
            
            <Subject 
                title = { this.state.subject.title } // 중괄호로 감싼 코드는 자바 스크립트 코드로 인식됌.
                sub = { this.state.subject.sub } // double quotation은 문자열로 취급됨.
                onChangePage = { function () {
                    this.setState({mode:'welcome'});
                }.bind(this)}
            ></Subject>
            <TOC 
                onChangePage = { function() {
                    this.setState({mode:'read'});
                }.bind(this)}
                data={ this.state.contents }></TOC>
            <Content title = {_title } desc = { _desc }></Content>
        </div>
        );
    }
}

export default App;
