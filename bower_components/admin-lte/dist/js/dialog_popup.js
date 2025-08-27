var handleCustomPopupModal=function(type, html, title, orientationClass, extraBtn){
    $('#modal_dialog').html('');
    var extraButtons = extraBtn || '';
    var t=""+
        '<div class="modal-dialog '+orientationClass+'" data-modal-id="modal_popup-ajax">'+
        '<div class="modal-content">'+
        '<div class="modal-header bg-light-blue color-palette">'+
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
        '<h4 class="modal-title">'+title+'</h4>'+
        '</div>'+
        '<div class="modal-body" id="popup_modal-body">'+
        html +
        '</div>'+
        '<div class="modal-footer">'+
        extraButtons +
        '<button type="button" class="modal_close-btn btn btn-default" data-dismiss="modal">Tutup</button>'+
        '</div>'+
        '</div>'+
        '</div>';
    $("#modal_dialog").append(t);
    $('#modal-dialog').trigger('click');
    $('.modal-body').on('shown.bs.modal', function(event) {
        $(this).off(event);
    });
};
var DialogPopup=function() {
    "use strict";
    return {
        init: function () {
        },
        handleCustomPopupModal:function(type, path, title, orientationClass){
            $.get(
                path,
                function( data ) {
                    handleCustomPopupModal(type, data, title, orientationClass, []);
                }
            );
        }
    }
}();