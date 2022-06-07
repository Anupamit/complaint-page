import React, { useState, useEffect} from 'react'
import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from './fire';

function Editcomplaint() {
    const [name,setName]=useState('')
    const [mobileno,setMobileno]=useState('')
    const [complaintType,setComplaintType]=useState('')
    const [concerned,setConcerned]=useState('')
    const [complaint,setComplaint]=useState('')
    const [username,setUsername]=useState('')
    const [id,setId]=useState('')

    const backComplaint=()=>{
        window.location.href = '/'
        console.log('you click the back home page');
    }
    const viewcomplaints=()=>{
        window.location.href = '/viewcomplaints'
        console.log('you click the back home page');
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
            return alert('Name feild is empty')
        }else if (mobileno.length !== 10) {
            return alert('Mobile number is not filled completely')
        }else if (complaintType === '') {
            return alert('Please select type of complaints')
        }else if (concerned === '') {
            return alert('Please select the concerned person')
        }else if (complaint === '') {
            return alert('Please Write complaint')
        }if ((name.length > 0 && name.length < 16) 
            && (mobileno.length > 0 
            && mobileno.length < 11) 
            && complaintType.length > 0 
            && concerned.length > 0 
            && (complaint.length > 0 && complaint.length < 201)) {
            // return  reset()
        }
        // submit , id, 'complaints'
        let data = {name, mobileno, complaintType, concerned, complaint}
        const complaintref = doc(db, 'complaints', id);
        await updateDoc(complaintref, data);
        alert('data updated')
        window.location.href = '/viewcomplaints'
    }
    // const reset=()=>{
    //     setName('')
    //     setMobileno('')
    //     setComplaintType('')
    //     setConcerned('')
    //     setComplaint('')
    // }

    const fetchData = async (id)=>{
        // fetch for input id
        const docRef = doc(db, "complaints", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let data = docSnap.data()
            setName(data.name)
            setMobileno(data.mobileno)
            setComplaintType(data.complaintType)
            setConcerned(data.concerned)
            setComplaint(data.complaint)
            // TODO set all other data fields
        } else {
            console.log("No such document!");
        }
    }

    useEffect(()=>{
        // read id from url
        const params = new URL(window.location.href).searchParams;
        const id = params.get('id');
        const name = params.get('name');
        setUsername(name)
        setId(id)
        fetchData(id)
    }, [])

    return (
        <div>
            <div className='navbar'>
                    <header className='header1'>
                        <h1>The Presidents School</h1>
                        <button className='buttonnav' onClick={backComplaint}>Back Home</button>
                        <button className='buttonnav2' onClick={viewcomplaints}>View Complaint</button>
                    </header>
            </div>
            <div className='form'>
                <header className='header'>
                    <h1>Edit Complaint Box for {username}</h1>
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
                    <button className='button1' onClick={submit}>Update Database</button>
                </div>
            </div>
        </div>
    )
}

export default Editcomplaint


// /editcomplaint?id=123456&name=asdsfsdf