import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // console.log("we are ready")
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
  
    console.log("Recieving:")
    console.log(data.content)
    $('#msg').append(`<div class="message">${data.content.user}: ${data.content.message}</div>`)
    scroll_bottom();
    // Called when there's incoming data on the websocket for this channel
  }
});
