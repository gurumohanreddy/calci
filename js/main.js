
(function(){

    var Calci = {
      init: function(){
        $('.key').click(function(){
          Calci.handleInput(this);
          // console.log(this);
        });
      },
      evaluateResult: function(){
        $('#result').html(eval($('#preview').html()));
        $('#preview').html(value="");
      },

      handleData: function(){
        $('#preview').html($('#preview').html().slice(0,-1));

      },
      handleInput: function(ele){
        if($(ele).hasClass('delete')){
              Calci.handleData();
        }else if ($(ele).hasClass('equals')) {
              Calci.evaluateResult();

        }else {
          $('#preview').append($(ele).html());
        }
      }
    };

  $(document).ready(function(){

      Calci.init();
  });

}());
