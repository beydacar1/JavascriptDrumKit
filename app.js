$('.key').on('click', function() {
    let key = $(this).data('key');
    $('audio[data-key="' + key + '"]').get(0).play();
});

$(window).on('keydown', function(e) {
    let key = e.keyCode;
    $('audio[data-key="' + key + '"]').get(0).play();
    $('.key[data-key="' + key + '"]').addClass('active');

    $('audio[data-key="' + key + '"]').on('ended', function() {
        $('.key[data-key="' + key + '"]').removeClass('active');
    });
});