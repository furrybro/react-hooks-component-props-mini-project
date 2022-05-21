import React from "react";

function Article({ title, date="January 1, 1970", preview, minutes }) {
    let emoji = "";

    const minRead = `\t${minutes} min read`;

    if (minutes <= 30) {
        emoji = "☕️".repeat(Math.ceil(minutes/5));
    } else {
        emoji = "🍱".repeat(Math.ceil(minutes/10));
    }

    return (
        <div>
            <article>
                <h3>{title}</h3>
                <small>{date}</small>
                <small> {emoji} {minRead}</small>
                <p>{preview}</p>
            </article>
        </div>
    );
}

export default Article;