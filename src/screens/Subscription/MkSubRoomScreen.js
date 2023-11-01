import React, { useState, useCallback, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  ScrollView,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import styled from 'styled-components';
import DropDownPicker from 'react-native-dropdown-picker';
import { BEIGE, BROWN, RED } from '../../css/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { baseURL } from '../../api/client';

const MkSubRoomScreen = ({ navigation }) => {
  const [roomname, setRoomname] = useState('');
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [providerId, setProviderId] = useState(null);
  const [num, setNum] = useState(null);
  const [token, setToken] = useState('');
  const [roomid, setRoomid] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('accessToken')
      .then((value) => {
        setToken(value);
      })
      .catch((error) => {
        console.log('Token Error:', error);
      });
  }, []);

  const postMakeRoomAPI = async () => {
    await axios
      .post(
        `${baseURL}/chatrooms?providerId=${providerId}`,
        {
          title: roomname,
          wholeNum: num,
        },
        {
          headers: {
            'Content-Type': `application/json`,
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setRoomid(response.data.data.chatroomId);
        navigation.navigate('ChatRoomScreen'); // 해당 방으로 이동하게 수정
      })
      .catch(function (error) {
        console.log('postMakeRoom', error);
        console.log(roomname, num, providerId);
      });
  };

  const onOpen1 = useCallback(() => {
    setOpen2(false);
  }, []);

  const onOpen2 = useCallback(() => {
    setOpen1(false);
  }, []);

  const [ottItems, setOttItems] = useState([
    { label: '넷플릭스', value: 1 },
    { label: '티빙', value: 2 },
    { label: '웨이브', value: 3 },
    { label: '디즈니플러스', value: 4 },
    { label: '쿠팡플레이', value: 5 },
    { label: '왓챠', value: 6 },
    { label: '애플티비', value: 7 },
  ]);

  const [maxNums, setMaxNums] = useState([
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
  ]);

  return (
    <Container>
      <SmallCircle />
      <Circle />
      <MkBox>
        <Centralize>
          <Title>구독방 만들기</Title>
          <NameInput
            value={roomname}
            onChangeText={(text) => setRoomname(text)}
            returnKeyType="next"
            placeholder="방 이름"
          />
          <StyledDropDownPicker
            open={open1}
            onOpen={onOpen1}
            value={providerId}
            items={ottItems}
            setOpen={setOpen1}
            setValue={setProviderId}
            setItems={setOttItems}
            placeholder="OTT 종류"
            zIndex={3000}
            zIndexInverse={1000}
            textStyle={{
              fontFamily: 'kotra',
              fontSize: 20,
              color: '#4f2416',
            }}
            dropDownContainerStyle={{
              width: 200,
            }}
          />
          <StyledDropDownPicker
            open={open2}
            onOpen={onOpen2}
            value={num}
            items={maxNums}
            setOpen={setOpen2}
            setValue={setNum}
            setMaxNums={setMaxNums}
            placeholder="인원 수"
            zIndex={2000}
            zIndexInverse={2000}
            textStyle={{
              fontFamily: 'kotra',
              fontSize: 20,
              color: '#4f2416',
            }}
            dropDownContainerStyle={{
              width: 200,
            }}
          />
          <MkButton onPress={postMakeRoomAPI}>
            <ButtonText>방 만들기</ButtonText>
          </MkButton>
        </Centralize>
      </MkBox>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${BEIGE};
`;

const MkBox = styled.View`
  width: 80%;
  height: ${Dimensions.get('window').height * 0.6}px;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  top: -50px;
`;

const Centralize = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: 500;
  font-family: 'chab';
  color: ${BROWN};
`;

const NameInput = styled.TextInput`
  width: 200px;
  height: 50px;
  font-size: 20px;
  padding: 0px 10px;
  font-family: 'kotra';
  color: ${BROWN};
  border-radius: 10px;
  background-color: ${BEIGE};
`;

const MkButton = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${BROWN};
`;

const ButtonText = styled.Text`
  font-weight: 700;
  font-size: 20px;
  font-family: 'kotra';
  color: ${BEIGE};
`;

const StyledDropDownPicker = styled(DropDownPicker)`
  width: 200px;
  height: 50px;
  border: none;
  font-size: 20px;
  font-family: 'kotra';
  color: ${BROWN};
  border-radius: 10px;
  background-color: ${BEIGE};
`;

const Circle = styled.View`
  background-color: white;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const SmallCircle = styled.View`
  background-color: ${BEIGE};
  width: 30px;
  height: 30px;
  border-radius: 50px;
  z-index: 999;
  top: 50px;
`;

export default MkSubRoomScreen;
