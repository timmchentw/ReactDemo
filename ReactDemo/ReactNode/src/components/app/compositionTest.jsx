import React from 'react'

function UseCompos () {
        return (
            <Compos myCompos="This is created by props.myCompos.">
                <span>This is created by props.children.</span>
            </Compos>
        )
}

function Compos(props) {
    return (
        <div>
            Here's the part of composition (Unknown input):     <br /><br />
            {props.children} ('children' is a default var)      <br />
            {props.myCompos} ('myCompos' is customized)         <br />
        </div>
    )
}

export { UseCompos };