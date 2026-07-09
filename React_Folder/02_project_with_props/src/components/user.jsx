import React from 'react'


const user = (props) => {
    console.log(props)
  return (
    <div style={{'color':'white'}}>
        Sarthak, {props.name}
    </div>
  )
}

export default user
