import React, {useState, useEffect} from 'react'
import './Viewcomplaint.css'
import Details from './Details'
import db from './fire';
import { collection, getDocs} from "firebase/firestore";

function ViewComplaint() {
    const [cd,setCd]=useState([])
    const [showdbpage,setShowdbpage]=useState(false)

    const backComplaint=()=>{
        window.location.href = '/'
        console.log('you click the back home page');
    }
    const addcomplaint=()=>{
        window.location.href = '/addcomplaint'
        console.log('you click the back home page');
    }
    const dbPage=()=>{
        setShowdbpage(true)
        console.log('dbpage click');
        try {
            fetchData()
        } catch (event) {
            console.error("Error adding document: ", event);
        }
    }
    const fetchData = async ()=>{
        console.log('heeeeee');
        let complaintsData = []
        const querySnapshot = await getDocs(collection(db, "complaints"));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        let data = doc.data()
        data.id = doc.id
        complaintsData.push(data)
        })
        setCd(complaintsData)
    }

    useEffect(()=>{
        fetchData()
    }, [])
    return (
        <div>
            <div className='navbar'>
                    <header className='header1'>
                        <h1>The Presidents School</h1>
                        <button className='buttonnav' onClick={backComplaint}>Back Home</button>
                        <button className='buttonnav2' onClick={addcomplaint}>Add Complaint</button>
                    </header>
            </div>
            <div>
                <h1 className='subheader'> See Firebase Database</h1>
                <button className='button2' onClick={dbPage}>See Database</button>
            </div>
            <div>
                {showdbpage && <Details userdetail={cd} custDelete={setCd} fetchData1={fetchData}/> }
            </div>
            
        </div>
    )
}

export default ViewComplaint