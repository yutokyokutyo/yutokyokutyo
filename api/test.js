$(function() {
    'use strict';

    function api(step) {
        $.ajax({
            url: '/api/tutorial',
            method: 'post',
            dataType: 'text',
            data: {
                'step': step
            }
        });
    }
})
