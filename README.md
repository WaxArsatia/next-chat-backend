# next-chat-backend

## Overview

This repository contains a minimal real-time chat backend built with Socket.IO on top of uWebSockets.js.

The server accepts Socket.IO connections, listens for a `message` event from any client, and broadcasts that message payload to all connected clients using the same `message` event.

## Features

- Real-time communication via Socket.IO.
- Message broadcast flow: receive `message` -> emit `message` to all clients.
- Configurable CORS origin through environment variables.
- Configurable listen port through environment variables.

## Tech Stack

- Node.js (ES Modules)
- Socket.IO
- uWebSockets.js
- dotenv

## Setup and Run

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root:

```env
LISTEN_PORT=3001
CORS_ORIGIN=http://localhost:3000
```

Used variables:

- `LISTEN_PORT`: Port used by `app.listen(...)`.
- `CORS_ORIGIN`: Allowed origin for Socket.IO CORS.

### 3. Start the server

```bash
npm start
```

## Project Structure

```text
next-chat-backend/
├── src/
│   └── index.js   # Server entry point and Socket.IO event handling
├── package.json
└── README.md
```

## License

ISC (from `package.json`).
