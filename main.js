const Posts = []
let id = 1;
const addPost = function (text) {
    const postNew = { text: text, id: id };
    Posts.push(postNew);
    id++;
}

const render = []
const renderPosts = function () {
    $('.posts').empty();
    for (let i = 0; i < Posts.length; i++) {
        $('.posts').append("<div class='post' data-id=" + Posts[i].id + ">" + (Posts[i].text + " " + "<br>") + "<button class='btn btn-primary remove'> Remove </button>" + "</div>");
    }
}

$('.add-post').on('click', function () {
    const text = $('#post-name').val()
    addPost(text, id);
    renderPosts();
});


$(".posts").on("click", ".remove", function () {
   let id= $(this).closest(".post").data('id');
   let i= findpostById (id);
   Posts.splice(i, 1);
   renderPosts();

})


const findpostById = function (id) {
    for( let i=0; i<Posts.length ; i+=1){
        if (Posts[i].id == id){
            
            return i;
        }
    }
}