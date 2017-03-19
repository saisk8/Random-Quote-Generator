$(document).ready(function() {
    var quote = '';
    var author = '';
    createQuote();

    $('.button1').on('click', function() {
        createQuote();
    });

    $('.button2').on('click', function() {
        var url = 'https://twitter.com/intent/tweet?text=' + ' "' + quote + '" -' + author;
        window.open(url, 'twitter');
        return false;
    });


    function createQuote() {
        var output = $.ajax({
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
            type: 'GET',
            data: {},
            dataType: 'json',
            success: function(data) {
                quote = data.quote;
                author = data.author;
                document.getElementById('quote').innerHTML = quote;
                document.getElementById('author').innerHTML = author;
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "PywLy38dVSmsh96UqNx0URBDIoGsp102JHdjsn27WKNeJV37Kl");
            }
        });
    }
});
