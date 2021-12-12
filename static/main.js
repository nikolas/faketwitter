document.addEventListener(
    'DOMContentLoaded',
    function(event) {
        console.log('document ready');
        
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

                // Add a new div to the page, with form data
                const textarea = target.querySelector('textarea[name="post"]');
                const tweet = textarea.value;

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
