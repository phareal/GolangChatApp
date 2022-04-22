import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const socket = new WebSocket("ws://localhost:8080/ws");

let connect = () => {
    console.log('Attempting connection .... ')

    socket.onopen= ()=> {
         console.log('successfully connected')
    }

    socket.onmessage = message => {
        console.log(message)
    }

    socket.onclose = ev => {
        console.log('Socket closed connection ', ev)
    }

    socket.onerror = error => {
        console.log('Socket error', error)
    }
}

let sendMsg = (msg:any) => {
    console.log('sending message', msg)
    socket.send(msg)
}

export { connect, sendMsg}