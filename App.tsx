import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [input, setInput] = useState(''); 
  const [result, setResult] = useState(''); 

  const handlePress = (value:any) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text>Calculadora</Text>
      <View style={styles.Calculadora}>
        <TextInput
          style={styles.resultado}
          value={input}
          editable={false}
        />
        <TextInput
          style={styles.resultado}
          value={result}
          editable={false}
        />
        <View style={styles.ButtonsCalc}>
          <View  style={styles.Esquerdo}>
            <TouchableOpacity style={styles.buttons} onPress={() => handlePress('0')}>
                <Text>0</Text>
            </TouchableOpacity>
              {[...Array(9)].map((_, index) => (
              <TouchableOpacity key={index} style={styles.buttons}  onPress={() => handlePress((index + 1).toString())}>
                <Text>{index + 1}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View  style={styles.direito}>
            <TouchableOpacity style={styles.buttons} onPress={() => handlePress('-')}>
              <Text>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => handlePress('+')}>
              <Text>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => handlePress('*')}>
              <Text>*</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => handlePress('/')}>
              <Text>/</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.FooterButtons}>
        <TouchableOpacity  style={styles.buttons} onPress={calculateResult}>
                  <Text>=</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttons} onPress={clearInput}>
              <Text>C</Text>
            </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:56,
    marginLeft:'auto',
    marginRight:'auto'

  },
  Calculadora:{
    
  },
  resultado:{
    textAlign:'right',
    borderWidth:1,
    borderRadius:10,
    padding:10,
    marginBottom:20
  },
  ButtonsCalc:{
  flexDirection:"row",
   marginBottom:20
    
  },
  Esquerdo:{
    flexDirection:'row',
    flexWrap:'wrap',
    width:200,
    gap:20
    
  },
  direito:{
  
    gap:20
  },
  FooterButtons:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  buttons:{
    padding:20,
    backgroundColor:'#808080',
    fontSize:16
  }

});
