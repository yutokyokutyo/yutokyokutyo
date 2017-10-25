$(function() {
    'use strict';

    function setApi(step) {
        $.ajax({
            url: '/api/tutorial',
            method: 'post',
            dataType: 'text',
            data: {
                'step': step
            }
        });
    }

    function getApi(step) {
        $.ajax({
            url: '/api/tutorial',
            method: 'get',
            dataType: 'text',
            data: {
                'step': step
            }
        });
    }

    // sessionの情報を取得してボタンを押したらhiddenが表示される
    $('.heal').on('click', function () {
        $(".heal").attr('type', 'hidden');
        $(".break").attr('type', 'button');
    });
});
