const postArticles = document.getElementById('main').getElementsByClassName('post');

// if (postArticles.length > 1) {
//   for(let i = 0; i <= 1; i++) {
//     const thisPost = document.getElementsByClassName('post')[i];

//     const thisHeader = thisPost.getElementsByTagName('header');
//     const thisThumbnail = thisPost.getElementsByTagName('img');

//     const newHeight = thisHeader[0].offsetHeight + thisThumbnail[0].height;
//     console.log(thisThumbnail[0].height)
//     thisPost.setAttribute('style', 'height: ' + newHeight + 'px; overflow: hidden;');
//   }
// }