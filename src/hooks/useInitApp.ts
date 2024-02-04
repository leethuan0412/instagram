import { useEffect } from 'react';
import SocketManager, { SocketEvent } from 'src/services/socket/socket-manager';
import { UserStateOnlineOrOffline } from 'src/types/socket';
import { useChatState } from 'src/store/reducer/chat-reducer';
import { useAuthState } from 'src/store/reducer/auth-reducer';
import Api from 'src/services/api';

export default function useInitApp() {
  const [{ accessToken }, authActions] = useAuthState();
  const [, chatActions] = useChatState();

  async function fetchUserInformation() {
    const res = await Api.getUserInformation();

    if (res.ok) {
      authActions.setUserInformation(res.data!);
    }
  }

  useEffect(() => {
    if (!accessToken) {
      return;
    }

    fetchUserInformation();

    const socket = SocketManager.initSocket(accessToken);

    socket.on(SocketEvent.STATE, (userState: UserStateOnlineOrOffline) => {
      chatActions.updateUserStateOnlineOrOffline(userState);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return {
    accessToken,
  };
}
