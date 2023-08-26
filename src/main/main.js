import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getcall,queryCall } from '../action/action'

const Main = () => {
  const [q,setq]=useState("")
    const [node,SetNode]=useState(false)
const dispatch = useDispatch()
const data = useSelector(state => state.reducer)

const newQuery = async (query)  => {
  const response=await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=X3JEbtEsbcTQ8qObHMW1JxTkOkiQ4LIZ&limit=25&q=${query}`)
  const res=await response.json()
  dispatch(queryCall(res.data))
}


const fetchData=async ()=>{
    const response=await fetch("https://api.giphy.com/v1/gifs/trending?api_key=X3JEbtEsbcTQ8qObHMW1JxTkOkiQ4LIZ&limit=25")
    const res=await response.json()
    dispatch(getcall(res.data))
}
  useEffect(()=>{
          fetchData()
          if(data.length > 25){
              SetNode(true)
          }
  },[data])
  return (
    <>
    <nav>
            <input type="text" value={q} onChange={(e)=> setq(e.target.value)} />
            <button onClick={newQuery}>click</button>
            </nav>
    {
        data.map((ele,i)=>
          <>   
                <img src={ele.images.downsized.url} alt='ltmy imahe' />
                </>
        )
    }
    </>
  )
  }


export default Main
