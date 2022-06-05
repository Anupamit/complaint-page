import React from 'react'
import { doc, deleteDoc } from "firebase/firestore";
import db from './fire';
import './Detail.css'
function Details(props) {
    const deleteUsr=async(event, i, id)=>{
        await deleteDoc(doc(db, "complaints", id));
        props.fetchData1()
        // let delnew=props.userdetail.filter((detail,ind)=>{
        //     console.log("delete", i);
        //     if (ind === i) {
        //         return false
        //     }else {
        //         return true
        //     }
        // })
        // props.custDelete(delnew)
    }
    
    return (
        <div>
            {
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Solved </th>
                            <th>Name </th>
                            <th>MobileNo </th>
                            <th>Complaint Type </th>
                            <th>Concerned Person </th>
                            <th>Complaint</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.userdetail.map((detail, i)=>{
                            return(
                                <tr key={i}>
                                    <td><button className='btn1' onClick={(event)=>deleteUsr(event, i, detail.id)}>X</button></td>
                                    <td>{detail.name}</td>
                                    <td>{detail.mobileno}</td>
                                    <td>{detail.complaintType}</td>
                                    <td>{detail.concerned}</td>
                                    <td>{detail.complaint}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Details