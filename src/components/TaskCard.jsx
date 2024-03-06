import React from 'react'
import Tag from './Tag'
import './TaskCard.css'
import deleteIcon from '../assets/img/delete.png'

const TaskCard = () => {
  return (
    <article className='task_card'>
        <p className='task_text'>Something text</p>
        <div className='task_card_bottom_line'>
            <div className='task_card_tags'>
                <Tag tagName="HTML"/>
                <Tag tagName="CSS"/>
            </div>
            <div className='task_delete'>
                <img src={deleteIcon} className='delete_icon' alt="" />
            </div>
        </div>
    </article>
  )
}

export default TaskCard