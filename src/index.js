import "dotenv/config";
import { App } from "uWebSockets.js";
import { Server } from "socket.io";

const { CORS_ORIGIN, LISTEN_PORT } = process.env;

const app = App();
const io = new Server({ cors: { origin: CORS_ORIGIN } });

io.attachApp(app);

io.on("connection", (socket) => {
  socket.on("message", (msg) => {
    console.log({ msg });
    io.emit("message", msg);
  });
});

app.listen(Number(LISTEN_PORT), (token) => {
  if (token) {
    console.log("Listening to port " + LISTEN_PORT);
  } else {
    console.log("Failed to listen to port " + LISTEN_PORT);
  }
});
