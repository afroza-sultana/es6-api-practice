//console.log comments data
//button and autometic dynamically load data at UI use arrow function 


function loadComment () {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(data => displayComment(data))
};
//loadComment(); autometic load

const displayComment = (comments) => {
const commentBox = document.getElementById("comment-box");
comments.forEach(comment => {
    const commentDetails = document.createElement("div");
    commentDetails.innerHTML= `
    <p>postId: ${comment.postId} </p>
    <p>id: ${comment.id} </p>
    <p>name: ${comment.name} </p>
    <p>email: ${comment.email} </p>
    <p>body: ${comment.body} </p>
    `;
    commentBox.appendChild(commentDetails);
})
}