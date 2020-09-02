import React from 'react';
import './App.css';
import { Typography} from '@material-ui/core';
import {List , ListItem , ListItemText} from '@material-ui/core';
import Inputform from './components/inputform';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todoList:[],
    }

  }


  addTodoList(data){
    const nowList = this.state.todoList;
    nowList.push(data);
    this.setState({
      todoList : nowList,
    });
  }
  
  render(){
    const {todoList} = this.state;
    return (
      <div className="App">
       <div className="Hadder">Todo List</div>
       <div className="input_area">
       <Inputform addTodoList={this.addTodoList.bind(this)}/>
       </div>
       <div className="list_area">리스트 영역
        <List>
          {this.state.todoList.map((todoItem, idx) => {
            const {
              title , content, startDate, startTime, endDate , endTime
            } = todoItem;
            return(
              <ListItem key={idx} role={undefined} dense button>
                <ListItemText 
                  primary={title+' '+content}
                  secondary={startDate+ ' ' + startTime +'~'+ endDate + ' '+ endTime }
                />
              </ListItem>
            )
          })}
        </List>
       </div>
       <Typography variant="body2" color="textSecondary" align="center">
         {'Copyright. 이주상'+new Date().getFullYear()+'.'}
       </Typography>

      </div>
      
    );
  }
}
export default App;
