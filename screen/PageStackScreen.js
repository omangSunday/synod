import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import QuestionScreen from './QuestionScreen';
import DailyPrayerScreen from './DailyPrayerScreen';
import CatholicQuizzesScreen from './CatholicQuizzesScreen';
import JoyfulScreen from './JoyfulScreen';
import RosaryMistryScreen from './RosaryMistryScreen';
import SorrowfulScreen from './SorrowfulScreen';
import GloriousScreen from './GloriousScreen';
import LuminousScreen from './LuminousScreen';
import AngelusScreen from './AngelusScreen';
import DivinemercyScreen from './DivinemercyScreen';
import BackUpContactScreen from './BackUpCaontactScreen';
const PageStack = createStackNavigator();

const PageStackScreen = () => (
    <PageStack.Navigator screenOptions={{
        headerShown: false
      }}>
        <PageStack.Screen name="HomeScreen" component={HomeScreen}/>
        <PageStack.Screen name="QuestionScreen" component={QuestionScreen}/>
        <PageStack.Screen name="DailyPrayerScreen" component={DailyPrayerScreen}/>
        <PageStack.Screen name="CatholicQuizzesScreen" component={CatholicQuizzesScreen}/>
        <PageStack.Screen name="JoyfulScreen" component={JoyfulScreen}/>
        <PageStack.Screen name="RosaryMistryScreen" component={RosaryMistryScreen}/>
        <PageStack.Screen name="SorrowfulScreen" component={SorrowfulScreen}/>
        <PageStack.Screen name="GloriousScreen" component={GloriousScreen}/>
        <PageStack.Screen name="LuminousScreen" component={LuminousScreen}/>
        <PageStack.Screen name="AngelusScreen" component={AngelusScreen}/>
        <PageStack.Screen name="DivinemercyScreen" component={DivinemercyScreen}/>
        <PageStack.Screen name="BackUpContactScreen" component={BackUpContactScreen}/>
    </PageStack.Navigator>
);

export default PageStackScreen;