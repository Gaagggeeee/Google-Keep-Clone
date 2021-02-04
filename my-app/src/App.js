import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import Header from './components/header';
import Main from './components/main';





function App() {
  
  const [ showInput, setShowInput ] = useState(false);
  const [ textValue, setTextValue ] = useState('');
  const [ titleValue, setTitleValue ] = useState('');
  const [ textFocused, setTextFocused ] = useState(false);
  const [ titleFocused, setTitleFocused ] =useState(false);
  const [ notes, setNotes ] = useState([]);

  useEffect(() => {
    getData();
  }, []);

// Gets data from firebase db
  const getData = () => {
    let notesArr = [];
    try{
      const db = firebase.database().ref('data');
      db.orderByValue().once('value', snapshot => {
        snapshot.forEach((note) => {
          notesArr.push(notes.val());
        })

        if(notesArr.length !== 0){
          setNotes(notesArr)
        }
      })
    } catch (error) {
        console.log(error);
    }
  }



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
    <div classNam='App' onClick={() => {
      blurOut();
    }}>
      <Header />
      <Main
        textValue = {textValue}
        titleValue = {titleValue}
        showInput = {showInput}
        textFocused={textFocused}
        titleFocused={titleFocused}
        onShowInput = {(state) => setShowInput(state)}
        onTextInput = {(state) => setTextValue(state)}
        onTitleInput = {(state) => setTitleValue(state)}
        onTextFocus = {(state) => setTextFocused(state)}
        onTitleFocus = {(state) => setTitleFocused(state)}
        notes={notes}
      />
    </div>
  );
}

export default App;
