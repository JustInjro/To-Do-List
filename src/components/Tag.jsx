import React from 'react'
import "./Css/Tag.css"

const Tag = ({tagName, selectTag, selected}) => {
  const tagStyle ={
    HTML: {backgroundColor: "red"},
    CSS: {backgroundColor: "blue"},
    JavaScript: {backgroundColor: "yellow"},
    React: {backgroundColor: "#00FFFF"},
    Git: {backgroundColor: "gray"},
    default: {backgroundColor: "#f9f9f9"}
  }
  return (
    <button type="button"
    className='tag'
    style={selected ? tagStyle[tagName] : tagStyle.default}
    onClick={() => selectTag(tagName)}>
    {tagName}
    </button>
  )
}
export default Tag