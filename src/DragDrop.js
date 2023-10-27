import React, { useState } from 'react'

const DragDrop = () => {

    const data = [{
        name: "Aakash",
        class: "Play way",
        roll_no: 1,
        marks: 2
    },
    {
        name: "Ankish",
        class: "Play way",
        roll_no: 2,
        marks: 2
    },
    {
        name: "Perrrjau",
        class: "Play way",
        roll_no: 3,
        marks: 2
    }]
    const [fruits, setfruits] = useState([...data])
    const [startindex, setstartindex] = useState("")
    const [endindex, setendindex] = useState("")
    const [inp, setinp] = useState("")
    function addd() {
        let obj = {
            name:inp,class:"play way",roll_no:2,marks:2
        }
        setfruits((items) => [...items, obj])
        setinp("")
    }

    function ondragend() {
        let newfruits = [...fruits]
        newfruits.splice(endindex, 0, ...newfruits.splice(startindex, 1))
        setfruits(() => [...newfruits])

    }




    return (
        <>
            <div className='row'>
                <div className='col-lg-5 mx-auto mt-5'>
                    <div className='form-group d-flex'>
                        <input className='form-control p-2' value={inp} onChange={(e) => {
                            setinp(e.target.value)
                        }} />
                        <button className='btn btn-primary' onClick={addd}>Add</button>
                    </div>
                    <div className='col-lg-12'>
                        <table className='table table-bordered table-striped'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Class</th>
                                    <th>Roll No</th>
                                    <th>Marks</th>
                                    <th>Action</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    fruits.map((row, index) => (

                                        <tr key={index} onDragStart={(e) => {
                                            setstartindex(index)
                                        }}
                                            onDragEnd={ondragend} onDragEnter={(e) => {
                                                setendindex(index)
                                            }} draggable>
                                            <td>{row.name}</td>
                                            <td>{row.class}</td>
                                            <td>{row.roll_no}</td>
                                            <td>{row.marks}</td>
                                            <td><button type='button' className='btn btn-danger' onClick={() => {
                                                let delfruits = [...fruits]
                                                delfruits.splice(index, 1)
                                                setfruits(() => [...delfruits])
                                            }}>Delete</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </div>
                    




                </div>
            </div>


        </>
    )
}

export default DragDrop