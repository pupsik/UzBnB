import React, { useEffect, useState } from 'react';

import { io, Socket } from 'socket.io-client';

const useSocket = (url) => {
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const newSocket = io(url);
        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
    }, [url]);

    return socket;
};

export default useSocket;
