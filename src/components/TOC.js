import React, { Component } from 'react';

class TOC extends Component {
    render() {
        console.log('TOC render');
        var lists = [];
        var data = this.props.data;
        var i = 0;
        // element를 자동적으로 생성하는 경우 각 리스트 항목에 키 값을 설정해주어야 리액트 내부적으로 문제가 생기지 않는다.
        while(i < data.length) {
            lists.push(<li key={data[i].id}><a href={"/content/" + data[i].id}
                onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangePage();
                }.bind(this)}
                >{data[i].title}</a></li>);
            i = i + 1;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;