
import React, { useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  Touchable,
  TextInput,
  useColorScheme,
  View,
  KeyboardAvoidingView,
} from 'react-native';


const App = () => {

  const [mark1,setMark1] = useState(0);
  const [c1,setC1] = useState(0);
  const [gpa1,setGpa1] = useState(0);

  const handlegpa1 =(e)=>{
    var g1 = Math.ceil(mark1/10 * c1) ;
    setGpa1(g1)
    console.warn(g1)

  }
  const [mark2,setMark2] =useState(0);
  const [c2,setC2] = useState(0);
  const [gpa2,setGpa2] = useState(0);

  const handlegpa2 =(e)=>{
    var g1 = Math.ceil(mark2/10* c2) ;
    setGpa2(g1)
    console.warn(g1)
  }
  const [mark3,setMark3] =useState(0);
  const [c3,setC3] = useState(0);
  const [gpa3,setGpa3] = useState(0);

  const handlegpa3 =(e)=>{
    var g1 = Math.ceil(mark3/10 * c3) ;
    setGpa3(g1)
    console.warn(g1)
  }
  const [mark4,setMark4] =useState(0);
  const [c4,setC4] = useState(0);
  const [gpa4,setGpa4] = useState(0);

  const handlegpa4 =(e)=>{
    var g1 = Math.ceil(mark4/10 * c4) ;
    setGpa4(g1)
    console.warn(g1)
  }
  const [mark5,setMark5] =useState(0);
  const [c5,setC5] = useState(0);
  const [gpa5,setGpa5] = useState(0);

  const handlegpa5 =(e)=>{
    var g1 = Math.ceil(mark5/10 * c5) ;
    setGpa5(g1)
    console.warn(g1)
  }

  const [cgpa,setCgpa] = useState(0);

  const handlecgpa=(e)=>{
    var totalGpa = gpa1+gpa2+gpa3+gpa4+gpa5;
    var totC = Number(c1)+Number(c2)+Number(c3)+Number(c4)+Number(c5);
    
    var finalCgpa = totalGpa/totC;
    console.warn(totC)
    setCgpa(finalCgpa);
  }



  return (
    <ScrollView>
    
    <View style={{backgroundColor:"#e8eddf"}}>
      <KeyboardAvoidingView>

      

    <View style={styles.viewfield} >
      <Text style={styles.subjecttext}>Subject 1</Text>
      <TextInput style={styles.textbox} placeholder='Mark 1' onChangeText={text => setMark1(text)}/>
      <TextInput style={styles.textbox} placeholder='Credit 1' onChangeText={text=> setC1(text)} />
      <Text onPress={handlegpa1} style={styles.gpatext}>gpa 1: {gpa1}</Text>
    </View>

    <View style={styles.viewfield} >
      <Text style={styles.subjecttext}>Subject 2</Text>
      <TextInput style={styles.textbox} placeholder='Mark 1' onChangeText={text =>setMark2(text)}/>
      <TextInput style={styles.textbox} placeholder='Credit 1' onChangeText={text=> setC2(text)}/>
      <Text onPress={handlegpa2} style={styles.gpatext}>gpa 2: {gpa2}</Text>
    </View>

    <View style={styles.viewfield} >
      <Text style={styles.subjecttext}>Subject 3</Text>
      <TextInput style={styles.textbox} placeholder='Mark 1'onChangeText={text =>setMark3(text)} />
      <TextInput style={styles.textbox} placeholder='Credit 1' onChangeText={text=> setC3(text)}/>
      <Text onPress={handlegpa3}style={styles.gpatext}>gpa 3: {gpa3}</Text>
    </View>

  <View style={styles.viewfield} >
    <Text style={styles.subjecttext}>Subject 4</Text>
    <TextInput style={styles.textbox} placeholder='Mark 1' onChangeText={text =>setMark4(text)}/>
    <TextInput style={styles.textbox} placeholder='Credit 1' onChangeText={text=> setC4(text)}/>
    <Text onPress={handlegpa4}style={styles.gpatext}>gpa 4: {gpa4}</Text>
  </View>

  <View style={styles.viewfield} >
    <Text style={styles.subjecttext}>Subject 5</Text>
    <TextInput style={styles.textbox} placeholder='Mark 1' onChangeText={text =>setMark5(text)}/>
    <TextInput style={styles.textbox} placeholder='Credit 1' onChangeText={text=> setC5(text)}/>
    <Text onPress={handlegpa5}style={styles.gpatext}>gpa 5: {gpa5}</Text>
  </View>

  <View style={styles.cgpaview}>
    <Button title='CALCULATE' onPress={handlecgpa}></Button>
    <Text style={styles.cgpatext} onPress={handlecgpa}>CGPA</Text>
    <Text style={styles.cgpatext}>{cgpa}</Text>
  </View>


  </KeyboardAvoidingView>
  </View >
  </ScrollView>
    
  );
};

const styles = StyleSheet.create({

  textbox:{backgroundColor:"white",
  elevation:10,
  borderWidth:0.5,
  borderRadius:12,
  fontWeight:"bold",
  color:"black"},

  viewfield:{marginHorizontal:20,
     display:"flex",
      paddingVertical:13,
      paddingHorizontal:50,
      alignContent:"space-between"
  },

  subjecttext:{
    fontWeight:"bold",
    textAlign:"center",
    fontSize:18,
    padding:5
    
  },
  gpatext:{
    textAlign:"center",
    fontWeight:"bold",
    fontSize:18,
    padding:5,
    borderWidth:5,
    borderColor:"#ff8fa3",
    borderRadius:50,
    backgroundColor:"#f8edeb"
  },
  cgpaview:{
    alignItems:"center",
    display:"flex",
      paddingVertical:13,
      paddingHorizontal:50,
      alignContent:"space-between",
    
  },
  cgpatext:{
    fontSize:40,
    fontWeight:"bold",
    marginTop:40
  }


  
});

export default App;
