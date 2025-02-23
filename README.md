# Node.js Server Hang Issue

This repository demonstrates a common issue in Node.js servers: hanging or crashing due to long-running request handlers that don't send a timely response.  The server code simulates a computationally intensive task within the request handler, causing the server to become unresponsive. This example showcases the problem and a solution using streams and asynchronous processing to prevent hangs.

## Problem

The `bug.js` file contains a Node.js HTTP server with a request handler that performs a time-consuming computation before sending a response. If the computation takes longer than the default request timeout, the server will hang or crash, leading to connection issues for clients.

## Solution

The `bugSolution.js` file demonstrates how to resolve this issue by incorporating asynchronous operations and efficiently handling large data inputs using streams. This prevents blocking the main event loop and keeps the server responsive even during long-running tasks.

## How to Run

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` to observe the issue (server may hang).
4. Run `node bugSolution.js` to see the improved, responsive server.