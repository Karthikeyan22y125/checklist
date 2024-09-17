import React from 'react'
import Workslist from './Workslist'
const Content = ({works,handleCheck,handleDelete}) => {

    return (
        <main>
            {(works.length) ? (
                <Workslist
                works={works}
                handleCheck = {handleCheck}
                handleDelete = {handleDelete}           
                ></Workslist>
            ) : (
                <p>You don't have any work</p>
            )}
        </main>
    )
}

export default Content