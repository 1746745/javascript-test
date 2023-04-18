
onChangeSelect1 = function() {
    console.log('change');
    console.log($(this).val());
    $(this);
}



$(document).ready(function() {
    $('table tr select:first-child').on('change', onChangeSelect1);
  });