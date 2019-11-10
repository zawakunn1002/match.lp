new Vue({
    el: "#app",
    data: {
      position: 0
    },
    methods:{
      toTop: function(){
        //やむなくjQuery
        $("html,body").animate({scrollTop:0},"slow");
      }
    },
    ready: function(){
      var self = this;
      document.onscroll = function(e){
        self.position = document.documentElement.scrollTop || document.body.scrollTop;
      }
    }
  });

  $(function(){
    $('#b a').click(function(){
        var id =$(this).attr('href');
        var position = $(id).offset().top - 100;
        $('html,body').animate({
          'scrollTop':position
        }, 1500)
    });
  });