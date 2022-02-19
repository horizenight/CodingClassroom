import { Dialog, DialogContent } from '@material-ui/core'
import React from 'react'
import { useLocalContext } from '../../../context/context'

const CreateClass = () => {
    const { createClassDialog, setCreateClassDialog } = useLocalContext()
    return (
        <div>
            <Dialog
            onClose={()=>setCreateClassDialog(false)}
            aria-labelledby='customise-dialog-title'
            open={createClassDialog}
            >
                <div classname='class__title'>
                    Using Classroom at a School with students?
                </div>
                <DialogContent className='class__content'>
                    <div className='class__text'>
                        <p>If so , your school must sign up for a free</p>
                        <a href="/help" className='class__link'>
                            G Suite For Education
                        </a>
                    </div>
                </DialogContent>
            </Dialog>
        </div>


    )
}

export default CreateClass