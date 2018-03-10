$(document).ready(function() {
  $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); //grabs first item in array of posts
        $('#quote').html(post.content);
        $('#quote-title').html("<p>&mdash; " + post.title + "</p>");
      },
      cache: false
    });
  $('#get-another-quote-button').click(function(e) {
    e.preventDefault();
    $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // Grabs first post in the array.
        $('#quote').html(post.content);
        $('#quote-title').html("<p>&mdash; " + post.title + "</p>");
        // Show source if it exists. If source is not present, hide it.
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#quote-source').html('<small>Source: ' + post.custom_meta.Source +'</small>');
        } else {
          $('#quote-source').text('');
        }
      },
      cache: false
    });
  });
});
