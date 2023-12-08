function setupCannedResponses() { // jshint ignore:line
  $('[data-canned-controller]').on('click', '[data-canned-response]', function(e) {
    $(e.target).closest('[data-canned-controller]').find('textarea').val(e.target.dataset.cannedResponse);
    // we have to enable the submit button for the comments form
    $(e.target).closest('[class*="-comment-form"]').find('input[type="submit"]').prop('disabled', false);
  });
}