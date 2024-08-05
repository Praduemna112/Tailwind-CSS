import { useEffect, useState } from "react"
import Header from "./components/Header"
import JobCart from "./components/Jobcard"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import JobData from "./JobDummydata"
import { collection, query, orderBy,where, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";


function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch,setCustomSearch] =useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false)
    const tempJobs =[] 
    const jobRef = query(collection(db, "jobs"));
    const q = query(jobRef, orderBy("postedOn","desc"));
    const req= await getDocs(q);

    req.forEach((job) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });

    setJobs(tempJobs);
  }


  const fetchJobsCustom = async (jobCriteria) => {
    setCustomSearch(true)
    const tempJobs =[] 
    const jobRef = query(collection(db, "jobs"));
    const q = query(jobRef,where("type", "==", jobCriteria.type),where("title", "==", jobCriteria.title),where("experience", "==", jobCriteria.experience),where("location", "==", jobCriteria.location),orderBy("postedOn","desc"));
    const req= await getDocs(q);

    req.forEach((job) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });

    setJobs(tempJobs);
  }


  useEffect(()=>{
    fetchJobs()
  },[])

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <SearchBar fetchJobsCustom={fetchJobsCustom} />
        {customSearch && 
        <button onClick={fetchJobs} className="flex pl-[1250px] mb-2">
          <p className="bg-blue-500 px-10 py-2 rounded-md">Clear Filters</p>
        </button>
        }
        {jobs .map((job) => (
          <JobCart key={job.id} {...job} />
        ))}
      </div>
    </>
  )
}

export default App
