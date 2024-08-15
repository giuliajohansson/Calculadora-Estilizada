import React from 'react'
import { Text, View, StyleSheet, BackHandler, Pressable, TextInput } from 'react-native'

const Calculadora = function () {
  const [firstNumber, setFirstNumber] = React.useState('')
  const [operation, setOperation] = React.useState('')
  const [displayNumber, setDisplayNumber] = React.useState('')
  const [calculatedValue, setCalculatedValue] = React.useState(false)

  const sum = function () {
    if (firstNumber != '')
      setDisplayNumber(parseFloat(firstNumber) + parseFloat(displayNumber))

  }
  const subtract = function () {
    if (firstNumber != '')
      setDisplayNumber(firstNumber - displayNumber)

  }
  const divide = function () {
    if (parseFloat(displayNumber) === 0)
      setDisplayNumber('ERROR - DIV 0')
    else if (firstNumber != '')
      setDisplayNumber(firstNumber / displayNumber)

  }
  const multiplicate = function () {
    if (firstNumber != '')
      setDisplayNumber(firstNumber * displayNumber)

  }

  const calcular = function () {
    if (!calculatedValue) {
      switch (operation) {
        case 'soma':
          sum()
          break
        case 'subtracao':
          subtract()
          break
        case 'multiplicacao':
          multiplicate()
          break
        case 'divisao':
          divide()
          break
      }
    }
    setCalculatedValue(true)
  }

  const addDigit = function (digit) {
    if (calculatedValue) {
      setCalculatedValue(false)
    }
    if (digit != '.') {
      setDisplayNumber(displayNumber + digit)
    } else if (!displayNumber.includes('.')) {
      setDisplayNumber(displayNumber + digit)
    }

  }

  const clean = function () {
    setDisplayNumber('')
    setFirstNumber('')
    setCalculatedValue(false)
  }

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Calculadora</Text>
      <View style={styles.display}>
        <Text style={styles.displayText}>{displayNumber}</Text>
      </View>
      <View style={styles.buttons}>
        <Pressable style={styles.buttonDigit} onPress={() => addDigit('9')}><Text>9</Text></Pressable>
        <Pressable style={styles.buttonDigit} onPress={() => addDigit('8')}><Text>8</Text></Pressable>
        <Pressable style={styles.buttonDigit} onPress={() => addDigit('7')}><Text>7</Text></Pressable>
        <Pressable style={styles.buttonOperator} onPress={() => { setOperation('soma'), setFirstNumber(displayNumber), setDisplayNumber('') }}><Text>+</Text></Pressable>
        <Pressable style={styles.buttonDigit} onPress={() => addDigit('6')}><Text>6</Text></Pressable>
        <Pressable style={styles.buttonDigit} onPress={() => addDigit('5')}><Text>5</Text></Pressable>
        <Pressable style={styles.buttonDigit} onPress={() => addDigit('4')}><Text>4</Text></Pressable>
        <Pressable style={styles.buttonOperator} onPress={() => { setOperation('subtracao'), setFirstNumber(displayNumber), setDisplayNumber('') }}><Text>-</Text></Pressable>
        <Pressable style={styles.buttonDigit} onPress={() => addDigit('3')}><Text>3</Text></Pressable>
        <Pressable style={styles.buttonDigit} onPress={() => addDigit('2')}><Text>2</Text></Pressable>
        <Pressable style={styles.buttonDigit} onPress={() => addDigit('1')}><Text>1</Text></Pressable>
        <Pressable style={styles.buttonOperator} onPress={() => { setOperation('multiplicacao'), setFirstNumber(displayNumber), setDisplayNumber('') }}><Text>*</Text></Pressable>
        <Pressable style={styles.button} onPress={() => calcular()}><Text>=</Text></Pressable>
        <Pressable style={styles.buttonDigit} onPress={() => addDigit('0')}><Text>0</Text></Pressable>
        <Pressable style={styles.buttonDigit} onPress={() => addDigit('.')}><Text>.</Text></Pressable>
        <Pressable style={styles.buttonOperator} onPress={() => { setOperation('divisao'), setFirstNumber(displayNumber), setDisplayNumber('') }}><Text>/</Text></Pressable>
        <Pressable style={styles.buttonClear} onPress={() => clean()}><Text>C</Text></Pressable>
        <Pressable style={styles.buttonClear} onPress={() => setDisplayNumber('')}><Text>CE</Text></Pressable>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    gap: 20,
  },

  display: {
    backgroundColor: '#d2d2d2',
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
    fontSize: 25
  },

  title: {
    fontSize: 40,
    textAlign: 'center',
  },

  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '70%',
    flexWrap: 'wrap',
    rowGap: 15,
  },

  button: {
    width: 58,
    height: 58,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aaaaff',
  },

  buttonDigit: {
    width: 58,
    height: 58,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DFDFDF',
  },

  buttonOperator: {
    width: 58,
    height: 58,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A4A4A4',
  },

  buttonClear: {
    width: 58,
    height: 58,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0597E',
  }

});

export default Calculadora;