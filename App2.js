import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {View, Image, FlatList, Text, SafeAreaView} from 'react-native';
import pic1 from './assets/pic1.png';
import pic2 from './assets/pic2.jpg';
import pic3 from './assets/pic3.jpg';
import pic4 from './assets/pic4.jpg';
import pic5 from './assets/pic5.jpg';
import {styleApp2} from './Style/StyleApp2';
const feedData = [
  {
    id: 1,
    name: 'Nguyen Bach Tung 1',
    image: pic1,
    likeCount: 200,
    avatar: pic2,
  },
  {
    id: 2,
    name: 'Nguyen Bach Tung 2',
    image: pic3,
    likeCount: 234,
    avatar: pic5,
  },
  {
    id: 3,
    name: 'Nguyen Bach Tung 3',
    image: pic4,
    likeCount: 567,
    avatar: pic3,
  },
  {
    id: 4,
    name: 'Nguyen Bach Tung 4',
    image: pic2,
    likeCount: 145,
    avatar: pic1,
  },
  {
    id: 5,
    name: 'Nguyen Bach Tung 5',
    image: pic1,
    likeCount: 326,
    avatar: pic2,
  },
];
function Item({name, image, likeCount, avatar}) {
  return (
    <View style={styleApp2.ctnItem}>
      {/*Avatar*/}
      <View style={styleApp2.ctnAvtItem}>
        <Image resizeMode={'cover'} source={avatar} style={styleApp2.avtItem} />
        <Text style={styleApp2.name}>{name}</Text>
      </View>
      {/*Picture*/}
      <Image source={image} style={styleApp2.picUpload} resizeMode={'cover'} />
      {/*Tool*/}
      <View style={styleApp2.ctnTool}>
        <Feather
          name={'heart'}
          style={styleApp2.iconTool}
          onPress={() => alert('Like')}
        />
        <MaterialIcons
          name={'chat-bubble-outline'}
          style={styleApp2.iconTool}
          onPress={() => alert('Comment')}
        />
        <Feather
          name={'share'}
          style={styleApp2.iconTool}
          onPress={() => alert('Share')}
        />
      </View>
      {/*Line*/}
      <View style={styleApp2.line} />
      {/*Like*/}
      <View style={styleApp2.ctnCountLike}>
        <FontAwesome name={'heart'} style={styleApp2.iconLiked} />
        <Text style={styleApp2.txtCountLike}>{likeCount} likes</Text>
      </View>
      {/*Line*/}
      <View style={styleApp2.line} />
    </View>
  );
}
export default function App2() {
  return (
    <SafeAreaView>
      {/*Header*/}
      <View style={styleApp2.ctnLogo}>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png',
          }}
          style={styleApp2.imgLogo}
          resizeMode="contain"
        />
        <Feather name={'inbox'} style={styleApp2.iconInbox} />
      </View>

      {/*Body*/}
      <FlatList
        data={feedData}
        renderItem={({item}) => (
          <Item
            image={item.image}
            name={item.name}
            avatar={item.avatar}
            likeCount={item.likeCount}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
