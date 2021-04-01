import React, {useState} from 'react';
import { Button, Label, Input} from 'reactstrap';
import './dashboard.css'


const DashBoard = () => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [appointType, setAppointType] = useState('')
    const [appointStatus, setAppointStatus] = useState('')
    const [reason, setReason] = useState('')
    const [location, setLocation] = useState('')
    const [room, setRoom] = useState('')
    const [visitReason, setVisitReason] = useState('')
    const [comments, setComments] = useState('')

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }
    const changeDate = (e) => {
        setDate(e.target.value)
    }
    const changeStartTime = (e) => {
        setStartTime(e.target.value)
    }
    const changeEndTime = (e) => {
        setEndTime(e.target.value)
    }
    const changeAppointType = (e) => {
        setAppointType(e.target.value)
    }
    const changeAppointStatus = (e) => {
        setAppointStatus(e.target.value)
    }
    const changeReason = (e) => {
        setReason(e.target.value)
    }
    const changeLocation = (e) => {
        setLocation(e.target.value)
    }
    const changeRoom = (e) => {
        setRoom(e.target.value)
    }
    const changeVisitReason = (e) => {
        setVisitReason(e.target.value)
    }
    const changeComments = (e) => {
        setComments(e.target.value)
    }
    

    const click = () => {
        console.log('TITLE  =======',title)
        console.log('DATE  =======',date)
        console.log('STARTTIME  =======',startTime)
        console.log('ENDTIME  =======',endTime)
        console.log('APPOINTTYPE  =======',appointType)
        console.log('APPOINTSTATUS  =======',appointStatus)
        console.log('REASON  =======',reason)
        console.log('LOCATION  =======',location)
        console.log('ROOM  =======',room)
        console.log('VISITREASON  =======',visitReason)
        console.log('COMMENTS  =======',comments)
    }
    return ( 
        <div>
            <div className='form_firstrow_container'>
                <div>
                    <Label>Title</Label>
                    <Input
                        type="search"
                        name="title"
                        className='firstrow_title_field'
                        placeholder="Rohnman Ricky: M: 24"
                        onChange={changeTitle}
                        />                
                </div>
            </div>
            <br/>
        {/* second row */}
            <div className='form_secondflex_container' >
                <div className='secondflex_div'>
                <Label for="exampleDate">Date</Label>
                    <Input
                    type="date"
                    name="date"
                    className='sencondrow_date_field'
                    placeholder="date placeholder"
                    onChange={changeDate}
                    />
                </div>
                <div>
                <Label for="startTime">Start</Label>
                    <Input
                    type="time"
                    name="startTime"
                    className='sencondrow_time_field'
                    placeholder="time placeholder"
                    onChange={changeStartTime}
                    />
                </div>
                <div>
                <Label for="endTime">End</Label>
                    <Input
                    type="time"
                    name="endTime"
                    className='sencondrow_time_field'
                    placeholder="time placeholder"
                    onChange={changeEndTime}

                    />
                </div>
            </div>
            <br/>
        {/* third row */}
            <div className='form_thirdflex_container' >
                <div className='thirdflex_div'> 
                    <div>
                    <Label for="status">Appointment Type</Label>
                        <Input type="select" name="status" className='thirdrow_all_field' 
                            onChange={changeAppointType}
                            >
                            <option>Evaluation</option>
                            <option>Done</option>
                            <option>Nice</option>
                            <option>Excellent</option>
                            <option>Outstanding</option>
                        </Input>
                    </div>
                </div>
                <div>
                    <Label for="status">Appointment Status</Label>
                        <Input type="select" name="status" className='thirdrow_all_field' 
                            onChange={changeAppointStatus}
                            >
                            <option>Cancelled</option>
                            <option>Stagged</option>
                            <option>Commit</option>
                            <option>Push</option>
                            <option>Pull</option>
                        </Input>
                </div>
                <div>
                    <Label for="status">Select a Reason</Label>
                        <Input type="select" name="status" className='thirdrow_all_field'
                            onChange={changeReason}
                            >
                            <option>Cancelled</option>
                            <option>Not Cancelled</option>
                            <option>Maybe Cancelled</option>
                            <option>Perhaps Cancelled</option>
                            <option>Uncancelled</option>
                        </Input>
                </div>
            </div>
            <br/>
        {/* fourthrow */}
            <div className='form_fourthflex_container'>
            <div className='fourthflex_div'> 
                        <Label for="status">Room</Label>
                        <Input type="select" name="status" className='fourthrow_all_field'
                            onChange={changeRoom} 
                            >
                            <option>None</option>
                            <option>Room 1</option>
                            <option>Room 2</option>
                            <option>Room 3</option>
                            <option>Room 4</option>
                        </Input>
                    </div>
                    <div>
                        <Label for="location">Location/Facility</Label>
                        <Input type="text" className='fourthrow_all_field' name="location" placeholder="Panja" 
                                onChange={changeLocation} 
                        />
                    </div>
                    <div>
                        <Label for="bodysite">Visit Reason</Label>
                        <Input type="text" className='fourthrow_all_field' name="visitreason" placeholder="Nnee." 
                                onChange={changeVisitReason} 
                            />
                    </div>
            </div>
            <br/>
        {/* fifth row */}
            <div className='form_fifthflex_container'>
                <div>
                    <Label for="comments">Comments</Label>
                    <Input type="textarea"
                        name="comments" 
                        className='fifthrow_comments_field'
                        placeholder='Paitent speaks, dont need translator'
                        onChange={changeComments}
                        />
                </div>
                <div>
                    <Button className='buttoncancel'>Cancel</Button>{' '}
                    <Button className='buttonsubmit' onClick={click}>Save</Button>
                </div>
            </div>
        </div>
     );
}
 
export default DashBoard;