import React, { Component } from "react";

class CreateContent extends Component {
    render() {
        console.log('Content render');
        return (
            <article>
                <h2>Create</h2>
                <form action = "/create_process" method="post"
                    onSubmit={function(e) {
                        e.preventDefault();
                        alert('Submit!');
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