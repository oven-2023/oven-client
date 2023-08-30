import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import WebSocket from 'react-native-websocket';

const ChatRoomScreen = ({ navigation }) => {
  const [ws, setWs] = useState(null);
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');

  useEffect(() => {
    // 웹소켓 서버 주소를 설정합니다.
    const serverUrl = 'ws://your-websocket-server-url';
    // WebSocket 인스턴스를 생성하고 서버와 연결합니다.
    const wsInstance = new WebSocket(serverUrl);
    setWs(wsInstance);

    // 메시지 수신 이벤트 핸들러를 등록합니다.
    wsInstance.onmessage = (event) => {
      const messageFromServer = event.data;
      // 수신된 메시지를 상태에 저장합니다.
      setReceivedMessage(messageFromServer);
    };

    // 컴포넌트 언마운트 시 WebSocket 연결을'`` 해제합니다.
    return () => {
      wsInstance.close();
    };
  }, []);

  // 메시지를 전송하는 함수
  const sendMessage = () => {
    if (ws && message.trim() !== '') {
      ws.send(message);
      setMessage('');
    }
    alert('전송');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Received Message: {receivedMessage}</Text>
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="Type your message..."
        style={{ borderWidth: 1, padding: 10, width: '80%' }}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

export default ChatRoomScreen;
