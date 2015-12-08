(function(){
    $(document).ready(function(){
        $('.key').click(function(){
          handleInput(this);
          // console.log(this);
        })
    });

    function evaluateResult(){
      $('#result').html(eval($('#preview').html()));
      $('#preview').html(value="");
    }
    function handleData(){
        $('#preview').html($('#preview').html().slice(0,-1));
    }

    function handleInput(ele){
      if($(ele).hasClass('delete')){
            handleData();
      }else if ($(ele).hasClass('equals')) {
            evaluateResult();

      }else {
        $('#preview').append($(ele).html());
      }
    }

}.call(this));
