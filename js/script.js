var base = 'https://quill.p3k.io/';
        
function createAction(name, share_type, param, article) {
    var $li = $('<li>').addClass('article-plugin-indieweb')
                       .addClass('indieweb-' + share_type);
    var $button = $('<button>').attr('title', t('news_indieweb', name));
    
    $button.click(function (event) {
        window.open(base + '/' + share_type + 
                    '?' + param + '=' + encodeURI(article.url));
        window.opener = null; // prevent target from being able to access the DOM
        event.stopPropagation(); // prevent expanding in compact mode
    });
    
    $li.append($button);

    return $li;
}


News.addArticleAction(function($actionsElement, article) {
    $actionsElement.append(createAction('Reply', 'new', 'reply', article));
    $actionsElement.append(createAction('Bookmark', 'bookmark', 'url', article));
    $actionsElement.append(createAction('Like', 'favorite', 'url', article));
    $actionsElement.append(createAction('Repost', 'repost', 'url', article));
});
