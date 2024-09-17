import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from 'react'
import Addworks from "./Addworks";
import Searchwork from "./Searchwork";
function App() {
  const [works,setWorks] = useState([{
    id:1,checked:false,work:"food"
  }])

  useEffect(()=> {
    const fetch = ()=>{
      const items = [...works,JSON.parse(localStorage.getItem('check_list'))];
      setWorks(items);
    }
    fetch();
  }
    ,[works])

const [newWork,setNewWork] = useState('')

const [searchWork,setSearchWork] = useState('')

const addWork = (work) =>{
  const id = works.length ? works[works.length - 1].id+1 :1;
  const addNewWork = {id,checked:false,work}
  const listWorks = [...works,addNewWork]
  setWorks(listWorks)
        localStorage.setItem("check_list",JSON.stringify(listWorks)) 
}

const handleCheck = (id) =>{
    const listWorks = works.map((work) =>
       work.id===id ? {...work,checked:!work.checked} : work)
        setWorks(listWorks)
        localStorage.setItem("check_list",JSON.stringify(listWorks)) 
}

const handleDelete = (id) =>{
    const listWorks = works.filter((work) =>
       work.id !==id)
        setWorks(listWorks)
        localStorage.setItem("check_list",JSON.stringify(listWorks))
}

const handleSubmit = (e) =>{
      e.preventDefault()
      if(!newWork) return;
      console.log(newWork)
      addWork(newWork)
      setNewWork('')
}

  return (
    <div className="App">
      <Header title = "Karthikeyan"/>
      <Addworks 
        newWork = {newWork}
        setNewWork = {setNewWork}
        handleSubmit = {handleSubmit}
      />
      <Searchwork
        searchWork = {searchWork}
        setSearchWork = {setSearchWork}

      />
      <Content 
        works={works.filter(work => (work.work).toLowerCase().includes(searchWork.toLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer
      count = {works.length}
      />
    </div>
  );
}

export default App;
