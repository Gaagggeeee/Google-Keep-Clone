import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import Header from './components/header';
import Main from './components/main';





function App() {
  
  const [ showInput, setShowInput ] = useState(false);
  const [ textValue, setTextValue ] = useState('');
  const [ titleValue, setTitleValue ] = useState('');
  const [ textFocused, setTextFocused ] = useState('');
  const [ titleFocused, setTitleFocused ] =useState('');
  const [ notes, setNotes ] = useState('');

  const blurOut = () => {
    if (!textFocused && !titleFocused) {
      if(textValue !== '' || titleValue !== ''){
        setShowInput(false)
        let noteObj = {
          title: titleValue,
          text: textValue
        }
        setTextValue('');
        setTitleValue('')
        try {
          setNotes([...notes, noteObj])
          const db = firebase.database().ref('data');
          db.push().set(noteObj)
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  return (
    <>
      <Header />
      <Main
        textValue = {textValue}
        titleValue = {titleValue}
        showInput = {showInput}
        onShowInput = {(state) => setShowInput(state)}
        onTextInput = {(state) => setTextValue(state)}
        onTitleInput = {(state) => setTitleValue(state)}
        onTextFocus = {(state) => setTextFocused(state)}
        onTitleFocus = {(state) => setTitleFocused(state)}
      />
    </>
  );
}

export default App;
