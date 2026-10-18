import React from 'react'
import Card from './Card'
import classes from './ErrorModal.module.css'
import Button from './Button.jsx'

const ErrorModal = (props) => {
  return (
    <div>
        <div className={classes.backdrop}/>

        <Card className={classes.modal}>
            <header>
                <h2 className={classes.header}>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button>Okay</Button>
            </footer>
        </Card>
    </div>
    
  )
}

export default ErrorModal