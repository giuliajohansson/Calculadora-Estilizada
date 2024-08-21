import React from 'react'
import { Image, ImageBackground, Text, View, StyleSheet, BackHandler, Pressable, TextInput } from 'react-native'

const Calculadora = function () {
  const [primeiroNumero, setPrimeiroNumero] = React.useState('')
  const [operation, setOperation] = React.useState('')
  const [displayNumber, setDisplayNumber] = React.useState('')
  const [calcularValor, setCalcularValor] = React.useState(false)

  const somar = function () {
    if (primeiroNumero != '')
      setDisplayNumber(parseFloat(primeiroNumero) + parseFloat(displayNumber))

  }
  const subtrair = function () {
    if (primeiroNumero != '')
      setDisplayNumber(primeiroNumero - displayNumber)

  }
  const dividir = function () {
    if (parseFloat(displayNumber) === 0)
      setDisplayNumber('ERROR - DIV 0')
    else if (primeiroNumero != '')
      setDisplayNumber(primeiroNumero / displayNumber)

  }
  const multiplicar = function () {
    if (primeiroNumero != '')
      setDisplayNumber(primeiroNumero * displayNumber)

  }

  const calcular = function () {
    if (!calcularValor) {
      switch (operation) {
        case 'soma':
          somar()
          break
        case 'subtracao':
          subtrair()
          break
        case 'multiplicacao':
          multiplicar()
          break
        case 'divisao':
          dividir()
          break
      }
    }
    setCalcularValor(true)
  }

  const addDigit = function (digit) {
    if (calcularValor) {
      setCalcularValor(false)
    }
    if (digit != '.') {
      setDisplayNumber(displayNumber + digit)
    } else if (!displayNumber.includes('.')) {
      setDisplayNumber(displayNumber + digit)
    }

  }

  const clean = function () {
    setDisplayNumber('')
    setPrimeiroNumero('')
    setCalcularValor(false)
  }

  return (
    <View style={styles.main}>
      
      <ImageBackground source={{uri: "https://i.pinimg.com/736x/8d/ed/d5/8dedd5d207082b29b56679d140cc38e3.jpg"}} resizeMode="cover" style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.title}>Calculator (ㅅ´ ˘ `)</Text>
      <View style={styles.display}>
        <Text style={styles.displayText}>{displayNumber}</Text>
      </View>

    <View style={styles.buttons}>
        <Pressable style={styles.buttonDigit} onPress={() => addDigit('9')}><Text>9</Text></Pressable>
        <Pressable style={styles.buttonDigit} onPress={() => addDigit('8')}><Text>8</Text></Pressable>
        <Pressable style={styles.buttonDigit} onPress={() => addDigit('7')}><Text>7</Text></Pressable>
        <Pressable style={styles.buttonOperator} onPress={() => { setOperation('soma'), setPrimeiroNumero(displayNumber), setDisplayNumber('') }}><Text>+</Text></Pressable>
        <Pressable style={styles.buttonDigit} onPress={() => addDigit('6')}><Text>6</Text></Pressable>
        <Pressable style={styles.buttonDigit} onPress={() => addDigit('5')}><Text>5</Text></Pressable>
        <Pressable style={styles.buttonDigit} onPress={() => addDigit('4')}><Text>4</Text></Pressable>
        <Pressable style={styles.buttonOperator} onPress={() => { setOperation('subtracao'), setPrimeiroNumero(displayNumber), setDisplayNumber('') }}><Text>-</Text></Pressable>
        <Pressable style={styles.buttonDigit} onPress={() => addDigit('3')}><Text>3</Text></Pressable>
        <Pressable style={styles.buttonDigit} onPress={() => addDigit('2')}><Text>2</Text></Pressable>
        <Pressable style={styles.buttonDigit} onPress={() => addDigit('1')}><Text>1</Text></Pressable>
        <Pressable style={styles.buttonOperator} onPress={() => { setOperation('multiplicacao'), setPrimeiroNumero(displayNumber), setDisplayNumber('') }}><Text>*</Text></Pressable>
        <Pressable style={styles.button} onPress={() => calcular()}><Text>=</Text></Pressable>
        <Pressable style={styles.buttonDigit} onPress={() => addDigit('0')}><Text>0</Text></Pressable>
        <Pressable style={styles.buttonDigit} onPress={() => addDigit('.')}><Text>.</Text></Pressable>
        <Pressable style={styles.buttonOperator} onPress={() => { setOperation('divisao'), setPrimeiroNumero(displayNumber), setDisplayNumber('') }}><Text>/</Text></Pressable>
        <Pressable style={styles.buttonClear} onPress={() => clean()}><Text>C</Text></Pressable>
        <Pressable style={styles.buttonClear} onPress={() => setDisplayNumber('')}><Text>CE</Text></Pressable>
      </View>
      </ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',

    gap: 20,
    fontFamily: 'Times New Roman',
  },
  image:{
    justifyContent: 'center',
  },
  display: {
    backgroundColor: '#ff85a1',
    margin: 10,
    height: 50,
    textAlign: 'center',
    borderRadius: 5,
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
  },

  displayText: {
    fontSize: 25,
    fontFamily: 'Times New Roman'
  },

  title: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'Times New Roman'
  },

  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '70%',
    flexWrap: 'wrap',
    rowGap: 15,
    fontFamily: 'Times New Roman'
  },

  button: {
    width: 58,
    height: 58,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbb1bd',
  },

  buttonDigit: {
    width: 58,
    height: 58,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fae0e4',
  },

  buttonOperator: {
    width: 58,
    height: 58,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbb1bd',
  },

  buttonClear: {
    width: 58,
    height: 58,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff85a1',
  }

});

export default Calculadora;