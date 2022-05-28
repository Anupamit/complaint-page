import React from 'react'

function Details(props) {
    // const fethcData=()=>{
    //     db.collection('complaint')
    // }
    return (
        <div>
            {
                <table className='table'>
                    <thead>
                        <tr>
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