import { Avatar, Button } from '@rneui/themed';
import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../styles';
import { Colors } from '../const/colors';
import { ImageSourcePropType } from 'react-native';

type Props = {
  name: string;
  score: number;
  iconPath: ImageSourcePropType ;
  onPlus: () => void;
  onMinus: () => void;
};

export default ({ name, score, iconPath, onPlus, onMinus }: Props) => {
  return (
    <View style={Styles.PlayerRow}>
      <Avatar
        source={iconPath}
        imageProps={{style:{width:32, height:32}}}
        size={32}
      />
      <Text style={Styles.PlayerRowName}>{name}</Text>
      <Text style={Styles.PlayerRowScore}>{score}</Text>
      <Button 
        containerStyle={{borderRadius:5,marginRight:10}}
        title="+10" 
        color={Colors.goldenBronze}
        onPress={onPlus} />
      <Button 
        containerStyle={{borderRadius:5}}
        color={Colors.coffeebean}
        title="-10" 
        onPress={onMinus} />
    </View>
  );
}
