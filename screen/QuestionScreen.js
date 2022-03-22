import React, {useEffect} from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image, ToastAndroid,
TextInput } from "react-native";
import { useTheme } from '@react-navigation/native';
import CardView from 'react-native-cardview';
import SoundPlayer from 'react-native-sound-player';
import {useSelector, useDispatch} from 'react-redux';
import { setQuestSynode, setQuestResultSynode, setOnChangeText } from './redux/action';
import { openDatabase } from 'react-native-sqlite-storage';
const db = openDatabase({
    name: 'saint_rita.db', 
    createFromLocation: '~saint_rita.db'
});
const QuestionScreen = ({route,navigation}) => {
    const {Title} = route.params;
    const { colors } = useTheme();
    const {isDark, questSynod, questResultSynod, inputtext} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
      loadQuestSynod();
      loadQuestResultSynod();

      return ()=>{
        loadQuestSynod();
        loadQuestResultSynod();
      }
    },[])

    function loadQuestSynod() {
      db.transaction((tx) => {
          tx.executeSql(
              "SELECT * FROM tbl_question_synod ",
              [],
              (tx, res) => {
                  let len = res.rows.length;
                 
                  if (len > 0) {
                      let questItem = [];
                      for(let i =0; i<len; i++){
                      let items = res.rows.item(i);
                      questItem.push({id: items.id,  quest_synod: items.quest_synod,  OptionA: items.OptionA, OptonB: items.OptonB, Answered: items.Answered});
                      }
                      dispatch(setQuestSynode(questItem));
                  } else {
                      ToastAndroid.show("User not found", ToastAndroid.LONG);
                  }
              }
          )
      })
  }

  function loadQuestResultSynod() {
    db.transaction((tx) => {
        tx.executeSql(
            "SELECT * FROM tbl_synod_result ",
            [],
            (tx, res) => {
                let len = res.rows.length;
               
                if (len > 0) {
                    let resultItem = [];
                    for(let i =0; i<len; i++){
                    let items = res.rows.item(i);
                    resultItem.push({quest_id: items.quest_id, synod_answer: items.synod_answer});
                    }
                    dispatch(setQuestResultSynode(resultItem));
                }
            }
        )
    })
}


function handleChoise(choise,choiseID){
  db.transaction((tx) => {
      tx.executeSql(
          "SELECT id,Answered,quest_synod FROM tbl_question_synod WHERE id = ?",
          [choiseID],
          (tx, res) => {
              let len = res.rows.length;
              if (len > 0) {
                  let items = res.rows.item(0);
                  let id = items.id;
                  let Answered = items.Answered;
                  let quest = items.quest_synod;
                  //console.log(Answer);
                  if(Answered == 0) {
                    try {
                      // play the file tone.mp3
                      SoundPlayer.playSoundFile('success', 'wav');
                      
                  } catch (e) {
                      console.log(`cannot play the sound file`, e)
                  }
                    handlResult(quest,id,choise);
                     // console.log(id)
                     //console.log(AnswerChecker);
              } else {
                  ToastAndroid.show("This question has been answered", ToastAndroid.LONG);
              }
                  

              } else {
                  ToastAndroid.show("Not found", ToastAndroid.LONG);
              }
          }
      )
  })
  
}

const handlResult = (quest,id,choise) =>{
  try{
      db.transaction((tx)=> {
        tx.executeSql(
          'INSERT INTO tbl_synod_result (synod_quest,quest_id,synod_answer) VALUES (?,?,?)',
          [quest, id, choise],
          (tx, results) => {
            //console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              updateAnswered(id);
              ToastAndroid.show("Question Submited Successfully", ToastAndroid.LONG);
              loadQuestSynod();
              loadQuestResultSynod();
            } else {
              ToastAndroid.show("Error", ToastAndroid.LONG);
            }
          }
        );
      });
  }catch(e){
      console.log(e);
  }

}

function updateAnswered(id){
  db.transaction((tx) => {
      tx.executeSql(
          "UPDATE tbl_question_synod SET Answered = ? WHERE id = ?",
          [1,id],
          (tx, results) => {
              let ok = results.rowsAffected;
              if (ok > 0) {
                  //console.log(ok, 'Paid');
                }
          })
  })
}

function handleSuggestion(val) {

}

    return (
        <View style={[styles.main_container, {backgroundColor: isDark ? '#333333' : '#fff'}]}>
        <StatusBar backgroundColor={isDark ? '#333333' : 'lightblue'} barStyle="light-content"/>
        <View  style={[styles.header, {backgroundColor: isDark ? '#333333' : 'lightblue' }]}>
            <View>
                <TouchableOpacity  onPress={() =>navigation.navigate('HomeScreen')}>
                    <Image style={{width: 40, height: 30}} source={require('../assets/back.png')} />
                </TouchableOpacity>
            </View>

            <View style={{flex: 1}}>
                <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold', color: isDark ? '#fff' : 'black'}}>{Title}</Text>
            </View>
        </View>
        <View style={styles.container_view}>
        <ScrollView>
        {
                questSynod.map((items, index) => (
                    <CardView key={index} style={[styles.box, {backgroundColor: isDark ? '#333333' : '#fff'}]}
                    cardElevation={55}
                    cardMaxElevation={5}
                    cornerRadius={15}
                   >
                      <View style={styles.boxBody}>
                          <Text style={[styles.quest, {color: isDark ? '#fff' : '#333333'}]}>{items.quest_synod}</Text>
                      </View>
                      <View style={[styles.boxFooter, {borderTopColor: isDark ? '#fff' : '#333333'}]}>
                          {
                            items.Answered == 0 
                            ?

                            <View style={styles.boxFooterInner}>
                          <View>
                          <TouchableOpacity onPress={()=>{
                              handleChoise(items.OptionA,items.id);
                              }} style={styles.presser}>
                          <Text style={[styles.text, {color: isDark ? '#fff' : '#333333'}]}>{items.OptionA}</Text>
                          </TouchableOpacity>
                          </View>
                          <View style={[styles.viewM, {borderLeftColor: isDark ? '#fff' : '#333333'}]}>
      
                          </View>
                          <View>
                          <TouchableOpacity onPress={()=>{
                              handleChoise(items.OptonB,items.id);
                              }} style={styles.presser}>
                          <Text style={[styles.text, {color: isDark ? '#fff' : '#333333'}]}>{items.OptonB}</Text>
                          </TouchableOpacity>
                          </View>
                          
                          </View>
                        
                          :
                          questResultSynod.filter((results)=>{               
                            return results.quest_id == items.id;
                          }).map((resultItem, indextItem) => (
                              (resultItem.quest_id === items.id)
                              ?
                            <View key={indextItem} style={styles.boxFooterInner}>
                                <View>
                                    <Text style={[styles.text, {color: isDark ? 'green' : 'green'}]}>{resultItem.synod_answer}</Text>
                                </View>
                            </View>
                            :
                            null
                          ))
                        }
                      </View>
                  </CardView>
                ))
            }
            <CardView style={[styles.boxSynod, {backgroundColor: isDark ? '#333333' : '#fff'}]}
                    cardElevation={55}
                    cardMaxElevation={5}
                    cornerRadius={15}
                   >
            <View>
              <View>
                  <Text style={[styles.text, {color: isDark ? '#fff' : '#333333'}]}>Any other suggestions that can improve the local Church:</Text>
              </View>
              <View style={{borderTopWidth: 2, height: 250, borderTopColor: isDark ? '#fff' : '#333333'}}>
                <TextInput 
                style={{color: isDark ? '#fff' : '#333333',  height:250, textAlignVertical: 'top'}} 
                multiline={true}
                numberOfLines={10}
                onChangeText={(inputtext) =>dispatch(setOnChangeText({inputtext}))}
                value={inputtext}
                placeholder="Enter your suggestions"
                placeholderTextColor={isDark ? '#fff' : '#333333'}
                />
              </View>
            </View>
            </CardView>

            <View>
              <TouchableOpacity onPress={()=>handleSuggestion()} style={{borderRadius: 10, backgroundColor: 'green', width: 250, alignSelf: 'center', margin: 15}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 5, color: isDark ? '#fff' : 'black'}}> Submit Suggestion</Text>
                    </TouchableOpacity>
              </View>
        </ScrollView>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
    },
  
    container_view: {
      margin: 5,
      height: '93%',
    },
  
    box: {
      
        height: 150,
        margin: 5
    },

    boxSynod: {
      height: 250,
        margin: 5
    },

    boxBody: {
        margin: 5
    },

    boxFooter: {
        borderTopWidth: 2,
      },
  
    boxFooterInner: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignSelf: 'flex-end',
      padding: 5
    },
  
    viewM: {
      borderLeftWidth: 2,
      marginLeft: 5,
      marginRight: 5
    },
  
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      padding: 5,
      },
  
      presser:{
        borderRadius: 50,
    },
  
    text_L:{
      color: 'red',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold'
  },
  
    
  
    preference: {
      flex: 1,
      justifyContent: 'center',
      margin: 5
    },
  
    header: {
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5
      },

  view_one:{
      flexDirection: 'row',
      margin: 5,
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  
  text_one: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
  },
  });

export default QuestionScreen;