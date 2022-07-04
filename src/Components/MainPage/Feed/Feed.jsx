import React, { useContext, useEffect ,useState} from 'react'
import PostContext from '../../../context/Post/PostContext'
import Spinner from '../../Spinner/Spinner'
import PostItem from './PostItem'

const Feed = () => {

  const context = useContext(PostContext)
  const { posts, fetchAllPosts } = context
  const [loading, setloading] = useState(false)


  const fetchposts =async  ()=>{
    setloading(true)
    await fetchAllPosts()
    setloading(false)
  }

  useEffect(() => {

    fetchposts()
    // eslint-disable-next-line
  }, [])

  return (
    <div style={{ height: "92vh" ,overflowY:"scroll"}}>
      {loading&&<Spinner />}
      {
        posts.map((element) => {
          return <PostItem key={element._id} name={element.name} title={element.title} description={element.description} timestamp={element.timestamp} />
        })}

    </div>
  )
}

export default Feed