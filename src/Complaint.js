import React, { useState } from 'react'
import Details from './Details'

function Complaint() {
    const [name,setName]=useState('')
    const [mobileno,setMobileno]=useState('')
    const [complaint,setComplaint]=useState('')
    const [complaintType,setComplaintType]=useState('')
    const [concerned,setConcerned]=useState('')
    const[showdetail,setShowdetail]=useState(false)
    const[userdetail,setUserdetail]=useState([])

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
    const complainttype=(event)=>{
        console.log(event.target.value);
        setComplaintType(event.target.value)
    }
    const concernedPerson=(event)=>{
        console.log(event.target.value);
        setConcerned(event.target.value)
    }
    const submit=()=>{
        if (name === '') {
            alert('Name feild is empty')
        }else if (mobileno.length !== 10) {
            alert('Mobile number is not filled completely')
        }else if (complaint === '') {
            alert('Plese Write complaint')
        }else if (complaintType === '') {
            alert('Plse select type of complaints')
        }else if (concerned === '') {
            alert('Plese select the concerned person')
        }if ((name.length > 0 && name.length < 16) && (mobileno.length > 0 && mobileno.length < 11)
        && (complaint.length > 0 && complaint.length < 201) 
        && complaintType.length > 0 && concerned.length > 0) {
            setShowdetail(true)
            const print={name,mobileno,complaint,complaintType,concerned}
            setUserdetail([...userdetail,print])
            console.log(userdetail);
        }
    }
    const reset=()=>{
        setName('')
        setMobileno('')
        setComplaint('')
        setComplaintType('')
        setConcerned('')
        setUserdetail([])
        setShowdetail(false)
    }
    return (
    <div>
        <header>
            <h1>Complaint Box</h1>
        </header>
        <div>
            <input placeholder='Name' type='text' value={name} onChange={fullName}/>
        </div>
        <div>
            <input placeholder='mobile No.' type='number' value={mobileno} onChange={mobileNo}/>
        </div>
        <div>
            <input placeholder='Complaint Box' type='text' value={complaint} onChange={complaintBox}/> 
        </div>
        <div>
            <select value={complaintType} onChange={complainttype}>
                <option>Choose Complaint Type</option>
                <option>Acedmics</option>
                <option>Bus</option>
                <option>Fee</option>
                <option>Class</option>
                <option>Sports</option>
                <option>Others</option>
            </select>
        </div>
        <div>
            <select value={concerned} onChange={concernedPerson}>
                <option>Concerned Person</option>
                <option>Anubhav Sir</option>
                <option>Aryan Sir</option>
                <option>Sumit Sir</option>
                <option>Gudiya Maam</option>
            </select>
        </div>
        <div>
            <button onClick={submit}>Submit</button>
            <button>Edit</button>
            <button onClick={reset}>Reset</button>
        </div>
        <div>
            {showdetail && <Details userdetail={userdetail}/>}
        </div>
    </div>
    )
}

export default Complaint