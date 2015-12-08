
(function(){

    var Calci = {
      init: function(){
        $('.key').click(function(){
          Calci.handleInput(this);
          // console.log(this);
        });
        $(".key.delete").dblclick(function(){
            $('#preview').html("");
            $('#result').html('');
        });
      },
      evaluateResult: function(){
        $('#result').html(eval($('#preview').html()));
        // $('#preview').html("");
      },

      handleData: function(){
        $('#preview').html($('#preview').html().slice(0,-1));

      },
      handleInput: function(ele){
          console.log(ele.dataset.value);
          switch(ele.dataset.type){
            case "delete":
            Calci.handleData();
            break;
            case "equals":
            Calci.evaluateResult();
            break;
            default:
            $('#preview').append(ele.dataset.value);
            break;
          }

      }
    };

  $(document).ready(function(){

      Calci.init();

}(this));
  });
