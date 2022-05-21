import React from "react";
import Article from "./Article";

function ArticleList(props) {

    console.log("jeena");
    console.log(props.posts[0].id)
    console.log(props);

    return (
       <main>
           <Article key={props.posts[0].id} title={props.posts[0].title} date={props.posts[0].date} preview={props.posts[0].preview}
           minutes={props.posts[0].minutes}/>
           <Article key={props.posts[1].id} title={props.posts[1].title} date={props.posts[1].date} preview={props.posts[1].preview} minutes={props.posts[1].minutes}/>
           <Article key={props.posts[2].id} title={props.posts[2].title} date={props.posts[2].date} preview={props.posts[2].preview} minutes={props.posts[2].minutes}/>
       </main>
    )
}
export default ArticleList;