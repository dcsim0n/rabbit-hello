var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
      var queue = 'queue';

      channel.assertQueue(queue, {
          durable: false
      })

      console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    channel.consume(queue, function( msg ){
        console.log(" [X] Recieved message: ", msg.content.toString());
    }, { noAck: true })
  });
});