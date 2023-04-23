import React from 'react'
import { doc, deleteDoc } from "firebase/firestore";
import db from '../fire';
import '../Styles/Detail.css'
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
    const editUser=async(event, i, detailData)=>{
        window.location.href = `editcomplaint?id=${detailData.id}&name=${detailData.name}`
    }
    
    return (    
        <div>
            {
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Solved </th>
                            <th>Update </th>
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
                                    <td><button className='btn1' onClick={(event)=>deleteUsr(event, i, detail.id)}><img style={{width:"25px",height:"20px"}} src='https://cdn.icon-icons.com/icons2/692/PNG/512/seo-social-web-network-internet_262_icon-icons.com_61518.png' alt='delete'></img></button></td>
                                    <td><button className='btn1' onClick={(event)=>editUser(event, i, detail)}><img style={{width:"25px",height:"20px"}} src='https://cdn.icon-icons.com/icons2/1369/PNG/512/-autorenew_90718.png' alt='edit'></img></button></td>
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

// /editcomplaint?id=123456