import { ImageSourcePropType } from 'react-native';

export class Player {
  id: string;
  name: string;
  score: number;
  iconPath: ImageSourcePropType;

  constructor(id: string, name: string, score: number) {
    this.id = id;
    this.name = name;
    this.score = score;
    const index = Math.floor(Math.random() * playerImages.length);
    this.iconPath = playerImages[index];
  }
}


const playerImages: ImageSourcePropType[] = [
  require('../assets/players/1.png'),
  require('../assets/players/2.png'),
  require('../assets/players/3.png'),
  require('../assets/players/4.png'),
  require('../assets/players/5.png'),
  require('../assets/players/6.png'),
  require('../assets/players/7.png'),
  require('../assets/players/8.png'),
  require('../assets/players/9.png'),
  require('../assets/players/10.png'),
  require('../assets/players/11.png'),
  require('../assets/players/12.png'),
  require('../assets/players/13.png'),
  require('../assets/players/14.png'),
  require('../assets/players/15.png'),
  require('../assets/players/16.png'),
  require('../assets/players/17.png'),
  require('../assets/players/18.png'),
  require('../assets/players/19.png'),
  require('../assets/players/20.png'),
  require('../assets/players/21.png'),
  require('../assets/players/22.png'),
  require('../assets/players/23.png'),
  require('../assets/players/24.png'),
  require('../assets/players/25.png'),
  require('../assets/players/26.png'),
  require('../assets/players/27.png'),
  require('../assets/players/28.png'),
  require('../assets/players/29.png'),
  require('../assets/players/30.png'),
  require('../assets/players/31.png'),
  require('../assets/players/32.png'),
  require('../assets/players/33.png'),
  require('../assets/players/34.png'),
];
