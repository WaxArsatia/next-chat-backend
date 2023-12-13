import { App } from "uWebSockets.js";
import { Server } from "socket.io";

const app = App();
const io = new Server({ cors: { origin: "*" } });

io.attachApp(app);

io.on("connection", (socket) => {
  socket.on("message", (msg) => {
    console.log({ msg });
    io.emit("message", msg);
  });
});

app.listen(3001, (token) => {
  if (token) {
    console.log("Listening to port " + 3001);
  } else {
    console.log("Failed to listen to port " + 3001);
  }
});
