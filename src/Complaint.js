import React, { useState , useEffect} from 'react'
import Details from './Details'
import db from './fire';
import { collection, addDoc , getDocs} from "firebase/firestore"; 


function Complaint() {
    const [name,setName]=useState('')
    const [mobileno,setMobileno]=useState('')
    const [complaintType,setComplaintType]=useState('')
    const [concerned,setConcerned]=useState('')
    const [complaint,setComplaint]=useState('')
    const [userdetail,setUserdetail]=useState([])
    const [cd,setCd]=useState([])

    const fullName=(event)=>{
        console.log(event.target.value);
        let fname=event.target.value
        let length =fname.length
        if (length <= 15) {
            setName(fname)
        }else if (length >15) {
            alert("Name length is Not more than 15 digits")
        }
    }
    const mobileNo=(event)=>{
        console.log(event.target.value);
        let mob=event.target.value
        let mobstr=mob+''
        let length=mobstr.length
        if (length <= 10) {
            setMobileno(mobstr)
        }else if (length >= 11) {
            alert('Mobile Number must be of 10 Digits')
        }
    }
    const complainttype=(event)=>{
        console.log(event.target.value);
        setComplaintType(event.target.value)
    }
    const concernedPerson=(event)=>{
        console.log(event.target.value);
        setConcerned(event.target.value)
    }
    const complaintBox=(event)=>{
        console.log(event.target.value);
        let complaint=event.target.value
        let length =complaint.length
        if (length <= 200) {
            setComplaint(complaint)
        }else if (length > 200) {
            alert("Complent box length is not more than 200 digits")
        }
    }
    const submit= async ()=>{
        if (name === '') {
            alert('Name feild is empty')
        }else if (mobileno.length !== 10) {
            alert('Mobile number is not filled completely')
        }else if (complaintType === '') {
            alert('Please select type of complaints')
        }else if (concerned === '') {
            alert('Please select the concerned person')
        }else if (complaint === '') {
            alert('Please Write complaint')
        }if ((name.length > 0 && name.length < 16) 
            && (mobileno.length > 0 
            && mobileno.length < 11) 
            && complaintType.length > 0 
            && concerned.length > 0 
            && (complaint.length > 0 && complaint.length < 201)) {
            const print={name,mobileno,complaintType,concerned,complaint}
            setUserdetail([...userdetail,print])
            console.log(userdetail);
            
        try {
            const ref = collection(db, "complaints")
            const docRef = await addDoc(ref, print);
            console.log("Document written with ID: ", docRef.id);
            // payment
            fetchData()
        } catch (event) {
            console.error("Error adding document: ", event);
            // refund
        }
        }
    }
    const reset=()=>{
        setName('')
        setMobileno('')
        setComplaintType('')
        setConcerned('')
        setComplaint('')
        setUserdetail([])
    }


    const fetchData = async ()=>{
        console.log('heeeeee');
        let complaintsData = []
        const querySnapshot = await getDocs(collection(db, "complaints"));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          let data = doc.data()
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
            <header className='header'>
                <h1>Complaint Box</h1>
            </header>
        </div>
        <div className='form'>
            <input placeholder='Your Name' type='text' value={name} onChange={fullName}/>
            <input placeholder='Your Mobile No.' type='number' value={mobileno} onChange={mobileNo}/>
            <select value={complaintType} onChange={complainttype}>
                <option>Choose Complaint Type</option>
                <option>Acedmics</option>
                <option>Bus</option>
                <option>Fee</option>
                <option>Class</option>
                <option>Sports</option>
                <option>Others</option>
            </select>
            <select value={concerned} onChange={concernedPerson}>
                <option>Concerned Person</option>
                <option>Anubhav Sir</option>
                <option>Aryan Sir</option>
                <option>Sumit Sir</option>
                <option>Gudiya Maam</option>
            </select>
            <textarea placeholder='Type Your Complaint in 200 words' type='text' value={complaint} onChange={complaintBox}/> 
            <button className='button1' onClick={submit}>Submit</button>
            <button className='button2'>Edit</button>
            <button className='button3' onClick={reset}>Reset</button>
        </div>
        <div>
             <Details userdetail={cd}/>
        </div>
    </div>
    )
}

export default Complaint