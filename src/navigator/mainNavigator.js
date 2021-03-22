import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Settings217233Navigator from '../features/Settings217233/navigator';
import UserProfile217226Navigator from '../features/UserProfile217226/navigator';
import Settings217225Navigator from '../features/Settings217225/navigator';
import Settings217223Navigator from '../features/Settings217223/navigator';
import SignIn2217221Navigator from '../features/SignIn2217221/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Settings217233: { screen: Settings217233Navigator },
UserProfile217226: { screen: UserProfile217226Navigator },
Settings217225: { screen: Settings217225Navigator },
Settings217223: { screen: Settings217223Navigator },
SignIn2217221: { screen: SignIn2217221Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
