import React from 'react'

function Details(props) {
    return (
        <div>
            {
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>MobileNo.</th>
                            <th>Complaint</th>
                            <th>ComplaintType</th>
                            <th>Concerned Person</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.userdetail.map((detail, i)=>{
                            return(
                                <tr key={i}>
                                    <td>{detail.name}</td>
                                    <td>{detail.mobileno}</td>
                                    <td>{detail.complaint}</td>
                                    <td>{detail.complaintType}</td>
                                    <td>{detail.concerned}</td>
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