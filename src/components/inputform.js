import React from 'react';
import { Button, TextField, Dialog} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { KeyboardTimePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import { moment } from 'moment';
import CAlert from './modal/customAlert';
class InputForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:"",
            content:"",
            startDate: null,
            startTime: null,
            endDate: null,
            endTime: null,
            modalOpen: false,
            todoList:[],
        }
    }
    useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
      }));
      stateChange = (e) => {
        this.setState({
          [e.target.name]:e.target.value
        });
      }
      startDateSet = (KeyboardDatePicker) => {
        
        this.setState({
          startDate: KeyboardDatePicker._d
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
      saveTodoList = () => {
        const nowList = this.state.todoList;
        const { title, content, startDate, startTime, endDate, endTime} = this.state;
        nowList.push({
          title, content, startDate, startTime, endDate, endTime
        });
        this.setState({
          todoList:nowList,
          title:"",
          content:"",
          startDate: null,
          startTime: null,
          endDate:null,
          endTime:null,
        })
      }
    
    checkValidate(){
      const {
        title, content, startDate,
        startTime, endDate, endTime
      } = this.state;
      if(!title || !content|| !startDate || !startTime || !endDate || !endTime){
        
        return false
      }
      return true
    }

    addInputData(){
      const data = this.state;
      if(this.checkValidate()){
        this.props.addTodoList(data);
        this.setState({
        title:"",
        content:"",
        startDate: null,
        startTime: null,
        endDate: null,
        endTime: null,
      })}else{
        this.setState({
          modalOpen:true
        })
      }
 
  
    }
    modalClose(){
      this.setState({
        modalOpen:false
      })
    }
    render(){
        return (
            <div>
              <TextField label="제목" placeholder="제목을 입력해주세요" size="medium" margin="normal" value={this.state.title} onChange={this.stateChange} name="title" fullWidth required></TextField>
              <TextField label="상세 내용" size="medium" margin="normal" value={this.state.content} name="content" onChange={this.stateChange} fullWidth multiline></TextField>
     
              <KeyboardDatePicker
               disableToolbar
               variant="inline"
               format="yyyy/MM/DD"
               margin="normal"
               value={this.state.startDate}
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
               value={this.state.startTime}
               onChange={this.startTimeSet}
               style = {{width:"50%"}}
               KeyboardButtonProps={{
                 'aria-larbel':'change time',
               }}
         />
         <KeyboardDatePicker
               disableToolbar
               variant="inline"
               margin="normal"
               format="yyyy/MM/DD"
               value={this.state.endDate}
               label="종료 예정일"
               onChange={this.endDateSet}
               style={{width:'50%'}}
               KeyboardButtonProps={{
                 'aria-label':'change date',
               }}
         />
         <KeyboardTimePicker
               margin="normal"
               label="종료시간"
               variant="inline"
               value={this.state.endTime}
               onChange={this.endTimeSet}
               style={{width:'50%'}}
               KeyboardButtonProps={{
                 'aria-label':'change time',
               }}
               
         />
        <Button variant="contained" color="secondary" onClick={this.addInputData.bind(this)}>
          저장
        </Button> 

       <CAlert 
       modalClose={this.modalClose.bind(this)} 
       modalOpen={this.state.modalOpen} 
       message="에러입니다."/>
     
         </div>
        )
    }
    
}

export default InputForm;