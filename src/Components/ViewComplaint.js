import React, {useState, useEffect} from 'react'
import '../Styles/Viewcomplaint.css'
import Details from './Details'
import db from '../fire';
import { collection, getDocs} from "firebase/firestore";

function ViewComplaint() {
    const [cd,setCd]=useState([])
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
            <div>
                <h1 className='subheader'> See Firebase Database</h1>
            </div>
            <div>
                {<Details userdetail={cd} custDelete={setCd} fetchData1={fetchData}/> }
            </div>
        </div>
    )
}

export default ViewComplaint