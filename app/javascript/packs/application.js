// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()

require('jquery')
import '@doabit/semantic-ui-sass'

$(document).on('turbolinks:load', function() {
   window.scroll_bottom = () => {
    if ($('#messages').length > 0){
      $('#messages').scrollTop($('#messages')[0].scrollHeight);
    }
   }

   console.log("we are ready")
    $('.ui.dropdown').dropdown();
    $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
  scroll_bottom();
}) 
ActiveStorage.start()
