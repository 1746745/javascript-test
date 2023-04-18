const myapp = {};

(function() {
  $(document).ready(function() {
    $('.myapp-b-select').on('change', function() {
      const bValue = $(this).val();
      const cSelect = $(this).closest('tr').find('.myapp-c-select');
      cSelect.empty();

      if (bValue == '1') {
        cSelect.append($('<option>', { value: '1', text: '選択1' }));
        cSelect.append($('<option>', { value: '2', text: '選択2' }));
      } else if (bValue == '2') {
        cSelect.append($('<option>', { value: '1', text: '選択1' }));
        cSelect.append($('<option>', { value: '2', text: '選択2' }));
      } else if (bValue == '3') {
        cSelect.append($('<option>', { value: '1', text: '選択1' }));
        cSelect.append($('<option>', { value: '2', text: '選択2' }));
        cSelect.append($('<option>', { value: '3', text: '選択3' }));
        }
      });
    });
  })();
  
  