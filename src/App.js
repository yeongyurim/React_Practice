import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from './components/Control';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.max_content_id = 3;
        this.state = {
            mode:'read',
            selected_content_id: 1,
            subject:{title:'WEB', sub:'World Wide Web!'},
            welcome:{title:'Welcome', desc:'Hello,React!!'},
            contents:[
                {id:1, title:'HTML', desc:'HTML is for information'},
                {id:2, title:'CSS', desc:'CSS is for design'},
                {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
            ]
        }
    }
    getReadContent() {
        var i = 0;
        while(i < this.state.contents.length) {
            var data = this.state.contents[i];
            if(data.id === this.state.selected_content_id) {
                return data;
            }
            i = i + 1;
        }
    }
    getContent() {
        var _title, _desc, _article = null;
        if(this.state.mode ==='welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title = {_title} desc = {_desc}></ReadContent>
        } else if(this.state.mode === 'read') {
            var _content = this.getReadContent();
            _article = <ReadContent title = {_content.title} desc = {_content.desc}></ReadContent>
        } else if(this.state.mode === 'create') {
            _article = <CreateContent onSubmit={function(_title, _desc) {
                this.max_content_id = this.max_content_id + 1;
                //var _contents = this.state.contents.concat(
                //    {id:this.max_content_id, title:_title, desc:_desc}
                //);
                //this.setState({
                //    contents:_contents
                //});
                /*
                this.state.contents.push( // push를 이용해 배열에 데이터를 추가하면 원본 배열의 값이 변경된다.
                    {id:this.max_content_id, title:_title, desc:_desc}
                );*/
                var newContents = Array.from(this.state.contents); // 값은 같지만 객체가 동일하진 않음
                newContents.push({id:this.max_content_id, title:_title, desc:_desc});
                this.setState({
                    contents: newContents
                })
                console.log(_title, _desc);
            }.bind(this)}></CreateContent>
        } else if(this.state.mode === 'update') {
            var _content = this.getReadContent();
            _article = <UpdateContent data = {_content}onSubmit={function(_id, _title, _desc) {
                var _contents = Array.from(this.state.contents);
                var i = 0;
                while(i < _contents.length) {
                    if(_contents[i].id === _id) {
                        _contents[i] = {id:_id, title:_title, desc:_desc};
                        break;
                    }
                    i = i + 1;
                }
                this.setState({ contents:_contents });
            }.bind(this)}></UpdateContent>
        }
        return _article;
    }
    render() {
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
                    onChangePage = { function(id) {
                        this.setState({
                            mode:'read',
                            selected_content_id:id
                        });
                }.bind(this)}
                data={ this.state.contents }></TOC>
                <Control
                    onChangeMode = { function (_mode) {
                        this.setState({
                            mode:_mode
                        });
                }.bind(this)}></Control>
                {this.getContent()}
            </div>
        );
    }
}

export default App;
