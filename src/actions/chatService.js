import useHandleResponse from "../Utils/handle-response";
import authHeader from '../Utils/auth-header';
import { useSnackbar } from 'notistack'

export function useChatUsers(){
    const { enqueueSnackbar }  = useSnackbar();
    const handleResponse = useHandleResponse();
    const requestOptions = {
        method: 'GET',
        headers: authHeader,
    };

    const getChats = () => {
        return fetch(
            `${process.env.REACT_APP_API_URL}/api/messages/chats`,
            requestOptions
        )
        .then(handleResponse)
        .catch(() =>
            enqueueSnackbar('Sorry Chat could not be loaded(getChats error)', {
                variant: 'error'
            })
            );
    };
    return getChats;
}

export function useChatMessages() {
    const { enqueueSnackbar } = useSnackbar();
    const handleResponse = useHandleResponse();
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };

    const getMessages = id => {
        return fetch(
            `${process.env.REACT_APP_API_URL}/api/messages/query?userID=${id}`,
            requestOptions
        )
        .then(handleResponse)
        .catch(() =>
        enqueueSnackbar('Could not load chats(getMessages error)', {
            variant: 'error'
        })
    );
    }
    return getMessages;
}

export function useSendMessage() {
    const { enqueueSnackbar } = useSnackbar();
    const handleResponse = useHandleResponse();
    const sendMessage = (id, body) => {
        const requestOptions = {
            method: 'POST',
            headers: authHeader(),
            body: JSON.stringify({ to: id, body: body }),
        };

        return fetch(
            `${process.env.REACT_APP_API_URL}/api/messages/`,
            requestOptions
        )
        .then(handleResponse)
        .catch(err => {
            console.log(err);
            enqueueSnackbar('Could not Send the message(sendMessage error)', {
                variant: 'error'
            });
        });
    };
    return sendMessage;
}