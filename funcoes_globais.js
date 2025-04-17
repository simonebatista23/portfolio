const AnimaLoad = async (ativo = true, msg = 'Carregando...') => {
    let host = location.origin;
    let u = `${host}/controle/paginas/template/anima-load.html?v=1`;
    let layout = await $.get(u);
    if (ativo) {
        if (!$('.loader').length) {
            $('body').append(layout);
            $('.loader .title').html(msg);
            $('body').css('overflow', 'hidden');
        } else {
            $('.loader .title').html(msg);
        }
    } else {
        $('#preloader #status').fadeOut();
        $('#preloader').delay(50).fadeOut('fast', function () {
            $('body').delay(5).css({
                'overflow': 'visible'
            });
            $('body').css('overflow', 'auto');
            $('#preloader').remove();
            $('#style-anima').remove();
        });
    }
}


const Send = async (param, callback = function (e) { }, param1 = null) => {
    var dados = {};
    dados['tipo'] = param;

    if(param1){
        Object.assign(dados, param1);
    }
    // console.log(dir); 
    let ret = await $.post(dir, dados);

    callback ? callback(ret) : null;
     
    return (ret);
}