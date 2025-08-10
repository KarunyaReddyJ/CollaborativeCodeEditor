import {io} from 'socket.io-client'

export const initSocket=async()=>{
    const options={
        'force new connection':true,
        reconnectAttempt:'Infinity',
        timeout:1000,
        transports:['websocket']
    }
    return io(options)
}
