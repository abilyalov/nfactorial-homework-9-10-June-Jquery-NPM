$('document').ready(function() {

    $('#story').hide();

    $("#btn-click").click(function(e) {
        $('.person').empty().append($('input.person').val());
        $('.character').empty().append($('input.character').val());
        $('.adverb').empty().append($('input.adverb').val());
        $('.adjective').empty().append($('input.adjective').val());

        $('#story').show();
    });

    $("#btn-click-2").click(function(e) {
        $('.width').empty().append($('input.width').val());

        let width = $('#width').val();
        let height = $('#height').val();
        let colors = $('#colors').val();
        let calculation = '<div class="calculator">'+((width*height*colors)/8)+'</div>';
        $('.calculation').replaceWith('<div id="calculation">'+calculation+'</div>');

    });
});