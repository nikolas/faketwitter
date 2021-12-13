document.addEventListener(
    'DOMContentLoaded',
    function(event) {
        console.log('document ready');

        const postsContainer = document.querySelector('.posts');
        // Fetch all posts from the api and display them
        fetch('/api')
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);

                result.posts.forEach(function(post) {
                    const newPost = document.createElement('div');
                    const newContent = document.createTextNode(
                        `${post.body} - by ${post.author}`);
                    newPost.appendChild(newContent);
                    postsContainer.appendChild(newPost);
                });
            });

        /*jQuery('form').on('submit', function() {
            console.log('form submit!');
        });

        jQuery('button').on('click', function() {
            console.log('button click!');
        });*/

        document.getElementById('tweet-form')
            .addEventListener('submit', function(e) {
                e.preventDefault();
                console.log(e.target);
                console.log('form submit!');
                const target = e.target;

                const formData = new FormData();

                const textarea = target.querySelector('textarea[name="post"]');
                const tweet = textarea.value;

                formData.append('body', tweet);

                fetch('/api', {
                    method: 'POST',
                    body: formData,
                })
                    .then(response => response.json())
                    .then(result => {
                        console.log('Success:', result);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
                
                // 1. Make POST request to flask app to create tweet
                //   2. on success, refresh collection of tweets
                //   2. on failure, show error msg
                

                // Add a new div to the page, with form data


                const newDiv = document.createElement('div');

                // and give it some content
                const newContent = document.createTextNode(tweet);

                // add the text node to the newly created div
                newDiv.appendChild(newContent);
                
                document.body.insertBefore(
                    newDiv,
                    document.querySelector('footer')
                );

                // Clear the textarea
            });
    });
