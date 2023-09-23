/*页面载入完成后，创建复制按钮*/
!function (e, t, a) { 
    /* code */
    var initCopyCode = function(){
      var copyHtml = '';
      copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
      copyHtml += '  <i class="fa fa-globe"></i><span>copy</span>';
      copyHtml += '</button>';
      $(".highlight .code pre").before(copyHtml);
      var clipboard = new ClipboardJS('.btn-copy', {
          target: function(trigger) {
              return trigger.nextElementSibling;
          }
      });
      clipboard.on('success', function(e){
        e.trigger.innerHTML = "<i class='fa fa-clipboard'></i><span>copied!</span>"
        setTimeout(function() {
            e.trigger.innerHTML = "<i class='fa fa-clipboard'></i><span>copy</span>"
        }, 4000)
        e.clearSelection();
      });
      clipboard.on('error', function(e){
        e.trigger.innerHTML = "<i class='fa fa-clipboard'></i><span>copy error</span>"
        setTimeout(function() {
            e.trigger.innerHTML = "<i class='fa fa-clipboard'></i><span>copy</span>"
        }, 4000)
        e.clearSelection();
      });
    }
    initCopyCode();
  }(window, document);