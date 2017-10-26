$(function() {
    'use strict';

    function setApi(status) {
        $.ajax({
            url: 'api.php',
            method: 'post',
            dataType: 'text',
            data:
                'status': status
            }
        });
    }

    function getApi(status) {
        $.ajax({
            url: 'api.php',
            method: 'get',
            dataType: 'text',
            data: {
                'status': status
            }
        });
    }

    // sessionの情報を取得してボタンを押したらhiddenが表示される
    $('.heal').on('click', function () {
        $(".heal").attr('type', 'hidden');
        $(".break").attr('type', 'button');
        setApi('1');
    });

    getApi(status);
});
