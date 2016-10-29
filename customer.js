<script>
		  //set the default value
		  var txtId = 1;
		  
		  //add input block in showBlock
		  $("#btn").click(function () {
		      $("#showBlock").append('<div id="div' + txtId + '">Input:<input type="text" name="test[]" /> <input type="button" value="del" onclick="deltxt('+txtId+')"></div>');
		      txtId++;
		  });
		  //remove div
		  function deltxt(id) {
		      $("#div"+id).remove();
		  }
</script>