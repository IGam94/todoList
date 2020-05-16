import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Paper , Typography, TextField} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { KeyboardTimePicker } from '@material-ui/pickers';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title:"",
      content:"",
      startDate: new Date(),
      startTime: null,
      endDate: null,
      endTime: null
    }
  }
  stateChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  startDateSet = (KeyboardDatePicker) => {
    
    this.setState({
      startDate:KeyboardDatePicker._d
    });
  }
  startTimeSet = (KeyboardDatePicker) => {
    
    this.setState({
      startTime:KeyboardDatePicker._d
    });
  }
  endDateSet = (KeyboardDatePicker) => {
    
    this.setState({
      endDate:KeyboardDatePicker._d
    });
  }
  endTimeSet = (KeyboardDatePicker) => {
    
    this.setState({
      endTime:KeyboardDatePicker._d
    });
  }
  render(){
    return (
      <div className="App">
       <div className="Hadder">Todo List</div>
       <div className="input_area">
         <TextField label="제목" placeholder="제목을 입력해주세요" size=  "medium" margin="normal" value={this.state.title} onChange={this.stateChange} name="title" fullWidth required></TextField>
         <TextField label="상세 내용" size="normal" margin="normal" value={this.state.content} name="content" onChange={this.stateChange} fullWidth multiline></TextField>

         <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/DD"
          margin="normal"
          label="시작 예정일"
          name="startDate"
          onChange={this.startDateSet}
          style = {{width:"50%"}}
          KeyboardButtonProps={{
            'aria-larbel':'change date',
          }}
        />
        
    <KeyboardTimePicker
          disableToolbar
          variant="inline"
          margin="normal"
          label="시작시간"
          onChange={this.startTimeSet}
          style = {{width:"50%"}}
          KeyboardButtonProps={{
            'aria-larbel':'change time',
          }}
    />
    <KeyboardDatePicker
          disableToolbar
          variant="inline"
          margin="nomarl"
          format="yyyy/MM/DD"
          label="종료 예정일"
          onChange={this.endDateSet}
          style={{width:'50%'}}
          KeyboardButtonProps={{
            'aria-label':'change date',
          }}
    />
    <KeyboardTimePicker
          margin="inline"
          label="종료시간"
          variant="inline"
          onChange={this.endTimeSet}
          style={{width:'50%'}}
          KeyboardButtonProps={{
            'aria-label':'change time',
          }}
          
    />
    
       </div>
       <div className="list_area">리스트 영역</div>
       <Typography variant="body2" color="textSecondary" align="center">
         {'Copyright 이주상'+new Date().getFullYear()+'.'}
       </Typography>
      </div>
    );
  }
}
export default App;
