import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';
import styled from 'styled-components';
import DropDownPicker from 'react-native-dropdown-picker';

const MkSubRoomScreen = ({ navigation }) => {
  const [roomname, setRoomname] = useState('');
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);

  const onOpen1 = useCallback(() => {
    setOpen2(false);
  }, []);

  const onOpen2 = useCallback(() => {
    setOpen1(false);
  }, []);

  const [ottItems, setOttItems] = useState([
    { label: '넷플릭스', value: 'Netflix' },
    { label: '티빙', value: 'Tving' },
    { label: '왓챠', value: 'Watcha' },
    { label: '디플', value: 'Disney+' },
    { label: '웨이브', value: 'Wavve' },
  ]);

  const [maxNums, setMaxNums] = useState([
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
  ]);

  return (
    <Container>
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
            value={value1}
            items={ottItems}
            setOpen={setOpen1}
            setValue={setValue1}
            setItems={setOttItems}
            placeholder="OTT 종류"
            zIndex={3000}
            zIndexInverse={1000}
          />
          <StyledDropDownPicker
            open={open2}
            onOpen={onOpen2}
            value={value2}
            items={maxNums}
            setOpen={setOpen2}
            setValue={setValue2}
            setMaxNums={setMaxNums}
            placeholder="인원 수"
            zIndex={2000}
            zIndexInverse={2000}
          />
          <MkButton>
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
`;

const MkBox = styled.View`
  width: 80%;
  height: ${Dimensions.get('window').height * 0.6}px;
  border: 1px solid black;
  align-items: center;
  padding: 10px;
`;

const Centralize = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: 500;
  margin: 30px 0px;
  font-family: 'dunggeunmo';
`;

const NameInput = styled.TextInput`
  width: 200px;
  height: 50px;
  border: 3px solid black;
  font-size: 20px;
  padding: 0px 10px;
  font-family: 'dunggeunmo';
`;

const MkButton = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border: 3px solid black;
  background-color: gray;
`;

const ButtonText = styled.Text`
  font-weight: 700;
  font-size: 20px;
  font-family: 'dunggeunmo';
`;

const StyledDropDownPicker = styled(DropDownPicker)`
  width: 200px;
  height: 50px;
  border: 3px solid black;
  border-radius: 0px;
  font-size: 20px;
  font-family: 'dunggeunmo';
`;

export default MkSubRoomScreen;
