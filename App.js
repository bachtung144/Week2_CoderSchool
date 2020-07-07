import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {
  View,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import pic1 from './assets/pic1.png';
import pic2 from './assets/pic2.jpg';
import pic3 from './assets/pic3.jpg';
import pic4 from './assets/pic4.jpg';
import pic5 from './assets/pic5.jpg';
import {styleApp} from './Style/StyleApp';
const imgData = [
  {id: 1, imgSource: pic1},
  {id: 2, imgSource: pic2},
  {id: 3, imgSource: pic3},
  {id: 4, imgSource: pic4},
  {id: 5, imgSource: pic5},
];

function Item({source}) {
  return (
    <View style={styleApp.containerItem}>
      <Image source={source} style={styleApp.imgItem} resizeMode={'contain'} />
    </View>
  );
}
export default function App() {
  return (
    <SafeAreaView style={styleApp.containerItem}>
      {/*StatusBar*/}
      <View style={styleApp.ctnHeader}>
        <Ionicons name={'arrow-back-outline'} style={styleApp.iconHeader} />
        <Foundation name={'indent-more'} style={styleApp.iconHeader} />
      </View>

      {/*AVT*/}
      <View style={styleApp.ctnAvt}>
        <Image source={pic1} style={styleApp.avt} />

        <View>
          <View>
            <Text style={styleApp.name}>Bach Tung</Text>
            <Text style={styleApp.colorGray}>Developer</Text>
            <View style={styleApp.ctnContact}>
              <TouchableOpacity
                style={styleApp.ctnButton}
                onPress={() => alert('follow')}>
                <Text style={styleApp.txtFollow}>Follow</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styleApp.ctnSend}
                onPress={() => alert('send')}>
                <Ionicons name={'send-sharp'} style={styleApp.iconSend} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/*CountFollow*/}
      <View style={styleApp.ctnViewFollow}>
        <View style={styleApp.ctnCenter}>
          <Text style={styleApp.txtCount}>210</Text>
          <Text style={styleApp.colorGray}>Photos</Text>
        </View>

        <View style={styleApp.ctnCenter}>
          <Text style={styleApp.txtCount}>15K</Text>
          <Text style={styleApp.colorGray}>Followers</Text>
        </View>

        <View style={styleApp.ctnCenter}>
          <Text style={styleApp.txtCount}>605</Text>
          <Text style={styleApp.colorGray}>Following</Text>
        </View>
      </View>

      {/*Picture*/}

      <FlatList
        style={styleApp.flatList}
        data={imgData}
        renderItem={({item}) => <Item source={item.imgSource} />}
        numColumns={2}
        keyExtractor={item => item.id}
      />

      {/*Bottom*/}
      <View style={styleApp.ctnBottom}>
        <View style={styleApp.ctnBotChild}>
          <Entypo name={'sound-mix'} style={styleApp.iconBottom} />
          <Ionicons name={'add-circle-outline'} style={styleApp.iconBottom} />
          <Feather name={'user'} style={styleApp.iconBottom} />
        </View>
      </View>
    </SafeAreaView>
  );
}
