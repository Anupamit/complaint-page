import React, { useState} from 'react'
import './Addcomplaint.css'
import db from './fire';
import { collection, addDoc} from "firebase/firestore"; 

function Addcomplaint() {
    const [name,setName]=useState('')
    const [mobileno,setMobileno]=useState('')
    const [complaintType,setComplaintType]=useState('')
    const [concerned,setConcerned]=useState('')
    const [complaint,setComplaint]=useState('')
    const [userdetail,setUserdetail]=useState([])


    const backHome=()=>{
        window.location.href = '/'
        console.log('you click the back home page');
    }
    const viewComplaint=()=>{
        window.location.href = '/viewcomplaints'
        console.log('you click the edit complaint page');
    }

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
            reset()
            
        try {
            const ref = collection(db, "complaints")
            const docRef = await addDoc(ref, print);
            console.log("Document written with ID: ", docRef.id);
            // payment
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
    }
    
    return (
    <div>
        <div className='navbar'>
                <header className='header1'>
                    <h1>The Presidents School</h1>
                    <button className='buttonnav' onClick={backHome}>Back Home</button>
                    <button className='buttonnav2' onClick={viewComplaint}>View Complaint</button>
                </header>
        </div>
        <div className='form'>
            <header className='header'>
                <h1>Complaint Box</h1>
            </header>
            <div className='container'>
                <label><b>Name</b></label>
                <input placeholder='Your Name' type='text' value={name} onChange={fullName}/>
                <label><b>Mobile Number</b></label>
                <input placeholder='Your Mobile No.' type='number' value={mobileno} onChange={mobileNo}/>
                <label><b>Complaint Type</b></label>
                <select className='selectopt' value={complaintType} onChange={complainttype}>
                    <option>Choose Complaint Type</option>
                    <option>Acedmics</option>
                    <option>Bus</option>
                    <option>Fee</option>
                    <option>Class</option>
                    <option>Sports</option>
                    <option>Others</option>
                </select>
                <label><b>Concerned Person</b></label>
                <select className='selectopt' value={concerned} onChange={concernedPerson}>
                    <option>Concerned Person</option>
                    <option>Anubhav Sir</option>
                    <option>Aryan Sir</option>
                    <option>Sumit Sir</option>
                    <option>Gudiya Maam</option>
                </select>
                <label><b>Type Complaint</b></label>
                <textarea placeholder='Type Your Complaint in 200 words' type='text' value={complaint} onChange={complaintBox}/> 
                <button className='button1' onClick={submit}>Submit</button>
            </div>
        </div>
    </div>
    )
}

export default Addcomplaint