import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogoTitle from '../components/LogoHeader';

import Characters from '../pages/Characters';
import CharacterDetail from '../pages/CharacterDetail';

import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createStackNavigator();

export default function CharacterRoutes() {
  return(
    <Navigator 
      screenOptions={{
        headerStyle:{
          backgroundColor: theme.colors.header
        },
        headerTintColor: theme.colors.white,
      }}
    >
      <Screen
        name="Characters"
        component={Characters}
        options={{ 
          headerTitle: (props:any) => <LogoTitle {...props} />,
          headerTitleAlign: 'center'
        }}
      />
      <Screen
        name="CharacterDetail"
        component={CharacterDetail}
        options={{
          headerBackTitleVisible: false
        }}
      />
    </Navigator>
  );
}