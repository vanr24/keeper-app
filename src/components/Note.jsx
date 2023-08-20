import React from 'react';

function Note(props)
{
    function handleCheck(){
        props.onDelete(props.id);
    }
    return (
        <div className='note'>
            {/* <h1> This is note title</h1>
            <p>this is note content</p> */}
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleCheck}>DELETE</button>

        </div>

    );
}

export default Note;