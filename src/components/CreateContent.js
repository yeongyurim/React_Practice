import React, { Component } from "react";

class CreateContent extends Component {
    render() {
        console.log('CreateContent render');
        return (
            <article>
                <h2>Create</h2>
                <form action = "/create_process" method="post" // action은 지정된 페이지로 사용자가 입력한 정보를 전송할 것이다 라는 뜻이고.
                    onSubmit={function(e) { // method는 post방식으로 전송하겠다는 뜻이다.
                        e.preventDefault();
                        this.props.onSubmit(
                            e.target.title.value,
                            e.target.desc.value
                        );
                    }.bind(this)}>
                        <p><input type="text" name="title" placeholder="title"></input></p> {/*placholeder는 아무런 입력도 되어있지 않을 때 문구가 나타나게 하는 속성이다.  */}
                        <p>
                            <textarea name="desc" placeholder="description"></textarea>
                        </p>
                        <p>
                            <input type="submit"></input>
                        </p>
                </form>
            </article>
        )
    }
}

export default CreateContent;