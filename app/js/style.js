$( document ).ready(function() {

    /*loadSvg*/
    $('[data-svg]').each(function(){
        var $this = $(this);
        var $svg = $this.data('svg');
        var $filename = $svg.split('\\').pop().split('/').pop().replace(".svg", "");

        $this.load($svg, function(responseTxt, statusTxt){
            if(statusTxt == "success"){
                $this.find('svg').addClass('svg svg-'+$filename+'');
            }
        });
    });
    thumbImg();
    /*menu*/
    $('.header__toggle-menu').on('click', function () {
        var $this = $(this);
        $this.closest('.header').toggleClass('menu-open');
    });


    $('.product-colors__item').click(function(){
        $(this).closest('.product-colors').find('.product-colors__item').removeClass('active');
        $(this).addClass('active');
    });

    $('.product-memory__item').click(function(){
        $(this).closest('.product-memory').find('.product-memory__item').removeClass('active');
        $(this).addClass('active');
    });

    function changeRate(){
        let inputValue = $(this).val();

        let assessment = $(this).closest('.rating').find('.rate-assessment');
        $(assessment).html(inputValue + '.0');
    }

    $('.rate input').click(function(){
        let inputValue = $(this).val();

        let assessment = $(this).closest('.rating').find('.rate-assessment');
        $(assessment).html(inputValue + '.0');
    });
    

});

function thumbImg() {
    $('[data-thumb]').each(function () {
        var $this = $(this);
        var img = $this.find('img').attr('src');
        var size = $this.data('thumb');
        $this.css({
            'background-image': 'url(' + img + ')',
            'background-size': '' + size + ''
        });
    });
    return false;
}
