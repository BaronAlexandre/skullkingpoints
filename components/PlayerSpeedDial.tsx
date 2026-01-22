import React from "react";
import { SpeedDial } from '@rneui/themed';
import { Colors } from '../const/colors';

type Props = {
  onAdd: () => void;
  onDelete: () => void;
  onFinish: () => void;
};

export default ({ onAdd, onDelete, onFinish }: Props) => {
const [open, setOpen] = React.useState(false);
return (
  <SpeedDial
    isOpen={open}
    color={Colors.coffeebeanDark}
    icon={{ name: 'settings', color: Colors.goldenBronze }}
    openIcon={{ name: 'close', color: Colors.goldenBronze }}
    onOpen={() => setOpen(!open)}
    onClose={() => setOpen(!open)}
    overlayColor="transparent"
  >
    <SpeedDial.Action
      color={Colors.goldenBronze}
      icon={{ name: 'sports-score', type:'material', color: Colors.coffeebeanDark }}
      onPress={() => {
          setOpen(false);
          onFinish();
        }}
    />
    <SpeedDial.Action
      color={Colors.goldenBronze}
      icon={{ name: 'add', color: Colors.coffeebeanDark }}
      onPress={() => {
          setOpen(false);
          onAdd();
        }}
    />
    <SpeedDial.Action
      color={Colors.goldenBronze}
      icon={{ name: 'delete', color: Colors.coffeebeanDark }}
      onPress={() => {
          setOpen(false);
          onDelete();
        }}
    />
  </SpeedDial>
);
};

