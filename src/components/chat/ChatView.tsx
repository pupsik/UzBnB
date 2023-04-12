import React, { useEffect } from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import SendIcon from '@mui/icons-material/Send';
import {
    Grid,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    Avatar,
    ListItemText,
    Divider,
    TextField,
    Paper,
    Fab,
    ListItemButton,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { io, Socket } from 'socket.io-client';

import { Conversation, Message } from '../../interfaces/Chat';
import { Auth0User, User } from '../../interfaces/User';
import { useStore } from '../../store';
import { useMock } from '../../stores/config';
import * as Styled from './ChatView.styles';

const ChatView = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [activeUser, setActiveUser] = React.useState<User | null>(null);
    const [currentConverstaion, setCurrentConversation] = React.useState<
        Conversation[]
    >([]);
    const [chatMessage, setChatMessage] = React.useState<string>('');
    const [socket, setSocket] = React.useState<Socket | null>(null);

    const { chatStore } = useStore();
    const { user } = useAuth0<Auth0User>();

    // Open up a new socket - just once on component load;
    useEffect(() => {
        if (!useMock) {
            const newSocket = io('http://localhost:5000/');
            setSocket(newSocket);
            return () => {
                newSocket.disconnect();
            };
        }
        return;
    }, []);

    useEffect(() => {
        if (socket) {
            socket.on('message', (data) => {
                console.log(data);
            });
        }
    });

    // Load all user conversations;
    useEffect(() => {
        if (user) {
            chatStore.getUserConversations(user);
        }
    }, [user]);

    const sendMessage = () => {
        if (socket && chatMessage) {
            socket.emit('message', { room: 'room1', msg: chatMessage });
            // Update chat history

            // Remove text from the text field
            setChatMessage('');
        }
    };

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        const idx = chatStore.userConversations.findIndex(
            (x) => x.roomId === event.currentTarget.id
        );
        if (idx) {
            setSelectedIndex(idx);
        }
    };

    const onChatMessageChange = (event) => setChatMessage(event.target.value);

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h5" className="header-message">
                        Chat
                    </Typography>
                </Grid>
            </Grid>
            <Styled.ChatSectionGrid container component={Paper}>
                <Grid item xs={3}>
                    <List>
                        <ListItem
                            key={`${user?.given_name} ${user?.family_name}`}
                        >
                            <ListItemIcon>
                                <Avatar
                                    alt={`${user?.given_name} ${user?.family_name}`}
                                    src={`${user?.picture}`}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={`${user?.given_name} ${user?.family_name}`}
                            ></ListItemText>
                        </ListItem>
                    </List>
                    <Divider />
                    <Grid item xs={12} style={{ padding: '10px' }}>
                        <TextField
                            id="outlined-basic-email"
                            label="Search"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Divider />
                    <List>
                        {chatStore.userConversations.map(
                            (u: Conversation, i: number) => {
                                return (
                                    <ListItemButton
                                        key={`${u.roomId}`}
                                        id={`${u.roomId}`}
                                        selected={selectedIndex === i}
                                        sx={{
                                            backgroundColor:
                                                selectedIndex === i
                                                    ? 'rgba(0, 0, 255, 0.1)'
                                                    : 'inherit', // Change the background color based on the selected state
                                        }}
                                        onClick={(event) =>
                                            handleListItemClick(event)
                                        }
                                    >
                                        <ListItemIcon>
                                            <Avatar
                                                alt={`${u.otherUser.first_name} ${u.otherUser.last_name}`}
                                                src={`${u.otherUser.avatar}`}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={`${u.otherUser.first_name} ${u.otherUser.last_name}`}
                                        >
                                            {`${u.otherUser.first_name} ${u.otherUser.last_name}`}
                                        </ListItemText>
                                        <ListItemText
                                            secondary="online"
                                            sx={{ align: 'right' }}
                                        ></ListItemText>
                                    </ListItemButton>
                                );
                            }
                        )}
                    </List>
                </Grid>
                <Grid item xs={9}>
                    <Styled.MessageList>
                        {chatStore.userConversations[selectedIndex]?.messages.map((message: Message, i: number)=> {
                            return (
                                <ListItem key={`${i}`}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <ListItemText
                                                    primary={`${message.content}`}
                                                ></ListItemText>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <ListItemText
                                                    secondary={`${message.timestamp}`}
                                                ></ListItemText>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                            );
                        })}
                    </Styled.MessageList>
                    <Divider />
                    <Grid container style={{ padding: '20px' }}>
                        <Grid item xs={11}>
                            <TextField
                                id="outlined-basic-email"
                                label="Type Something"
                                value={chatMessage}
                                onChange={onChatMessageChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Fab
                                color="primary"
                                aria-label="add"
                                onClick={sendMessage}
                            >
                                <SendIcon />
                            </Fab>
                        </Grid>
                    </Grid>
                </Grid>
            </Styled.ChatSectionGrid>
        </div>
    );
};

export default observer(ChatView);
