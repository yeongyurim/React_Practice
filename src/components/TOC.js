import React, { Component } from 'react';

class TOC extends Component {
    /*
    1. render 이전에 shouldComponentUpdate가 실행된다.
    2. shouldComponentUpdate의 반환값이 true이면 render가 호출되고, false이면 render가 호출되지 않도록 약속되어 있다.
    3. shouldComponentUpdate를 통해 새롭게 바뀐 값과 이전 값에 접근할 수 있다.
    */
    shouldComponentUpdate(newProps, newState) {
        console.log("==>TOC renter shouldComponentUpdate",
            newProps.data, // 변경된 props 값
            this.props.data // 원본 props 값
        );
        if(this.props.data === newProps.data) {
            return false;
        }
        return true;
    }
    render() {
        console.log('TOC render');
        var lists = [];
        var data = this.props.data;
        var i = 0;
        // element를 자동적으로 생성하는 경우 각 리스트 항목에 키 값을 설정해주어야 리액트 내부적으로 문제가 생기지 않는다.
        while(i < data.length) {
            lists.push(
                <li key={data[i].id}>
                     <a 
                        href={"/content/" + data[i].id}
                        //data-id = {data[i].id} // a 태그의 속성에 data-id를 주어 이벤트 객체에서 빼내기
                        //onClick={function (e) {
                        //    debugger; 
                        //    e.preventDefault();
                        //    this.props.onChangePage(e.target.dataset.id);
                        //    }.bind(this)
                        //}
                        onClick={function (id, e) {
                            e.preventDefault();
                            this.props.onChangePage(id); // a 태그 생성시에 값을 미리 전달
                        }.bind(this , data[i].id)}
                    >{data[i].title}</a></li>
            );
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