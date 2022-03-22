import React, {useEffect} from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image, ToastAndroid, Modal } from "react-native";
import { useTheme } from '@react-navigation/native';
import CardView from 'react-native-cardview';
import SoundPlayer from 'react-native-sound-player';
import LottieView from 'lottie-react-native';
import {useSelector, useDispatch} from 'react-redux';
import { setTotalCount, setQuest, setQuestResult, setModal, setQuestCount, setQuestCountIndex } from './redux/action';
import { openDatabase } from 'react-native-sqlite-storage';
const db = openDatabase({
    name: 'saint_rita.db', 
    createFromLocation: '~saint_rita.db'
});
const CatholicQuizzesScreen = ({route,navigation}) => {
    const {Title} = route.params;
    const { colors } = useTheme();
    const {isDark, totalCount, question, questResult, shomModal, questCount, questCountIndex} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        loadQuest();
        loadQuestResult();
        loadQuestResultSum();
        const onFinishedPlayingSubscription = SoundPlayer.addEventListener('FinishedPlaying', ({ success }) => {
            console.log('finished playing', success)
          })
        return()=>{
            loadQuest();
            loadQuestResult();
            loadQuestResultSum();
            onFinishedPlayingSubscription.remove();
        }
    },[]);

    function loadQuest() {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM tbl_questions ",
                [],
                (tx, res) => {
                    let len = res.rows.length;
                   
                    if (len > 0) {
                        let questItem = [];
                        for(let i =0; i<len; i++){
                        let items = res.rows.item(i);
                        questItem.push({id: items.id,  quests: items.quests,  OptionA: items.OptionA, OptionB: items.OptionB, OptionC: items.OptionC, OptionD: items.OptionD, Answer
                        : items.Answer, Answered: items.Answered});
                        }
                        dispatch(setQuest(questItem));
                        dispatch(setQuestCount(len));
                    } else {
                        ToastAndroid.show("User not found", ToastAndroid.LONG);
                    }
                }
            )
        })
    }

    function loadQuestResult() {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM tbl_result_table ",
                [],
                (tx, res) => {
                    let len = res.rows.length;
                   
                    if (len > 0) {
                        let resultItem = [];
                        for(let i =0; i<len; i++){
                        let items = res.rows.item(i);
                        resultItem.push({quest_id: items.quest_id,  result_answer: items.result_answer, result: items.result});
                        }
                        dispatch(setQuestResult(resultItem));
                    }
                }
            )
        })
    }

    function loadQuestResultSum() {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT SUM(result_score) current_score FROM tbl_result_table WHERE result = ? ",
                ['Correct'],
                (tx, res) => {
                    let len = res.rows.length;
                    if (len > 0) {
                        let current_score = res.rows.item(0).current_score;
                        dispatch(setTotalCount(current_score));
                    } else {
                        dispatch(setTotalCount(0));
                    }
                }
            )
        })
    }
    // function resultChecker(param){
    
    // }

    // data = data.filter(function(item){
    //     return item.state == 'New York';
    //  }).map(function({id, name, city}){
    //      return {id, name, city};
    //  });




    function handleChoise(choise,choiseID){
        (questCountIndex+1 === questCount) ? dispatch(setModal(true)) : null;
        (totalCount >= 5) ? successTone() : null;
        dispatch(setQuestCountIndex(questCountIndex+1));
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT id,Answer,Answered,quests FROM tbl_questions WHERE id = ?",
                [choiseID],
                (tx, res) => {
                    let len = res.rows.length;
                    if (len > 0) {
                        let items = res.rows.item(0);
                        let id = items.id;
                        let Answer = items.Answer;
                        let Answered = items.Answered;
                        let quest = items.quests;
                        let AnswerChecker;
                        let CorrectChoiseMark;
                        //console.log(Answer);
                        if(Answered == 0) {
                            if(choise !== Answer) {
                                AnswerChecker = 'Wrong';
                                CorrectChoiseMark = 0;
                                try {
                                    // play the file tone.mp3
                                    if(questCountIndex+1 === questCount) {
                                    } else{
                                    SoundPlayer.playSoundFile('wrong', 'wav');
                                    }
                                } catch (e) {
                                    console.log(`cannot play the sound file`, e)
                                }
                                
                            } else {
                                AnswerChecker = 'Correct';
                                CorrectChoiseMark = 5;
                                try {
                                    if(questCountIndex+1 === questCount) {
                                    } else{
                                    // play the file tone.mp3
                                    SoundPlayer.playSoundFile('success', 'wav');
                                    }
                                } catch (e) {
                                    console.log(`cannot play the sound file`, e)
                                }
                                
                            }
                            handlResult(id,AnswerChecker,quest,choise,Answer,CorrectChoiseMark);
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

    const handlResult = (id,AnswerChecker,quest,choise,Answer,CorrectChoiseMark) =>{
        try{
            db.transaction((tx)=> {
              tx.executeSql(
                'INSERT INTO tbl_result_table (quest_id, result, result_quest, result_option, result_answer, result_score) VALUES (?,?,?,?,?,?)',
                [id, AnswerChecker, quest, choise, Answer, CorrectChoiseMark],
                (tx, results) => {
                  //console.log('Results', results.rowsAffected);
                  if (results.rowsAffected > 0) {
                    updateAnswered(id);
                    ToastAndroid.show("Question Submited Successfully", ToastAndroid.LONG);
                    loadQuest();
                    loadQuestResult();
                    loadQuestResultSum();
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

    function playAgain() {
        db.transaction((tx) => {
            tx.executeSql(
                "DELETE FROM tbl_result_table",
                [],
                (tx, results) => {
                    let ok = results.rowsAffected;
                    if (ok > 0) {
                        //console.log(ok, 'Paid');
                      }
                })
        })

        db.transaction((tx) => {
            tx.executeSql(
                "UPDATE tbl_questions SET Answered = ? ",
                [0],
                (tx, results) => {
                    let ok = results.rowsAffected;
                    if (ok > 0) {
                        //console.log(ok, 'Paid');
                        loadQuest();
                        loadQuestResult();
                        dispatch(setTotalCount(0));
                        dispatch(setModal(false));
                        dispatch(setQuestCount(0));
                        dispatch(setQuestCountIndex(0));
                      }
                })
        })
    }

    function successTone() {
        try {
            // play the file tone.mp3
            SoundPlayer.playSoundFile('congrate', 'wav');
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }

    function updateAnswered(id){
        db.transaction((tx) => {
            tx.executeSql(
                "UPDATE tbl_questions SET Answered = ? WHERE id = ?",
                [1,id],
                (tx, results) => {
                    let ok = results.rowsAffected;
                    if (ok > 0) {
                        //console.log(ok, 'Paid');
                      }
                })
        })
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

            <View style={{borderRadius: 50, backgroundColor: isDark ? '#fff' : '#333333'}}>
            <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold', padding: 2, color: isDark ? 'black' : '#fff'}}>{totalCount}</Text>
            </View>
        </View>
        <View style={styles.container_view}>
        <ScrollView>
            {
                question.map((items, index) => (
                    <CardView key={index} style={[styles.box, {backgroundColor: isDark ? '#333333' : '#fff'}]}
                    cardElevation={55}
                    cardMaxElevation={5}
                    cornerRadius={15}
                   >
                      <View style={styles.boxBody}>
                          <Text style={[styles.quest, {color: isDark ? '#fff' : '#333333'}]}>{items.quests}</Text>
                      </View>
                      <View style={[styles.boxFooter, {borderTopColor: isDark ? '#fff' : '#333333'}]}>
                          {
                            items.Answered == 0 
                            ?

                        <ScrollView horizontal={true}>
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
                              handleChoise(items.OptionB,items.id);
                              }} style={styles.presser}>
                          <Text style={[styles.text, {color: isDark ? '#fff' : '#333333'}]}>{items.OptionB}</Text>
                          </TouchableOpacity>
                          </View>

                          <View style={[styles.viewM, {borderLeftColor: isDark ? '#fff' : '#333333'}]}>
      
                          </View>

                          <View>
                          <TouchableOpacity onPress={()=>handleChoise(items.OptionC,items.id)} style={styles.presser}>
                          <Text style={[styles.text, {color: isDark ? '#fff' : '#333333'}]}>{items.OptionC}</Text>
                          </TouchableOpacity>
                          </View>
                          <View style={[styles.viewM, {borderLeftColor: isDark ? '#fff' : '#333333'}]}>
      
                          </View>
                          <View>
                          <TouchableOpacity onPress={()=>handleChoise(items.OptionD,items.id)} style={styles.presser}>
                          <Text style={[styles.text, {color: isDark ? '#fff' : '#333333'}]}>{items.OptionD}</Text>
                          </TouchableOpacity>
                          </View>
                          </View>
                        </ScrollView>
                          :
                          questResult.filter((results)=>{               
                            return results.quest_id == items.id;
                          }).map((resultItem, indextItem) => (
                              (resultItem.result === 'Correct')
                              ?
                            <View key={indextItem} style={styles.boxFooterInner}>
                                <View>
                                    <Text style={[styles.text, {color: isDark ? 'green' : 'green'}]}>{resultItem.result}</Text>
                                </View>
                            </View>
                            :
                            <View key={indextItem} style={styles.boxFooterInner}>
                                <View>
                                    <Text style={[styles.text, {color: isDark ? 'red' : 'red'}]}>{resultItem.result}</Text>
                                </View>
                            </View>
                          ))
                        }
                      </View>
                  </CardView>
                ))
            }

{/* <TouchableOpacity onPress={()=>playAgain()} style={{borderRadius: 10, backgroundColor: 'red'}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 5, color: isDark ? '#fff' : 'black'}}> Try Again</Text>
                    </TouchableOpacity> */}
        
        </ScrollView>
        </View>

        <Modal animationType="slide" transparent={true} visible={shomModal}
      >
       
        <View >
        {
            totalCount >= 5
            ?
            <View>
                <View style={{height: '90%', margin: 5}}>
                <LottieView source={require('../assets/59344-congratulation-badge-animation.json')} autoPlay loop />
                <Text style={[styles.congrate, {color: isDark ? '#fff' : 'black'}]}>Congratulations</Text>
                </View>

                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={()=>playAgain()} style={{borderRadius: 10, backgroundColor: 'green'}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 5, color: isDark ? '#fff' : 'black'}}> Play Again</Text>
                    </TouchableOpacity>
                </View>
            </View>
            :
            <View>
                <View style={{height: '90%', margin: 5}}>
                 <Text style={[styles.fail, {color: isDark ? '#fff' : 'black'}]}>!Oop</Text>
                <LottieView source={require('../assets/33273-failure.json')} autoPlay loop />
               </View>

                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={()=>playAgain()} style={{borderRadius: 10, backgroundColor: 'red'}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 5, color: isDark ? '#fff' : 'black'}}> Try Again</Text>
                    </TouchableOpacity>
                </View>
            </View>
        }
        </View>

    </Modal>

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
        height: 140,
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

  congrate: {
    marginTop: 15,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  fail: {
    marginTop: 5,
    fontSize: 90,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  body_inner: {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center'
  },
  });

export default CatholicQuizzesScreen;