import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material'
import React from 'react'

interface CardDataProps{
  handleClose: ()=> void;
  open: boolean;
  moreInfo: any
}

const CardData: React.FC<CardDataProps> = ({handleClose, open,moreInfo}) => {

   return (
    <div >
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <p className='text-center font-bold font-mono underline'>{moreInfo.country}</p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" >
            <p className='font-mono font-bold mt-5 text-center'>ID: {moreInfo.id}</p>
            <p className='font-mono font-bold text-center'>Launch Date: {moreInfo.launch_date}</p>
            <p className='font-mono font-bold text-center'>Launcher: {moreInfo.launcher}</p>
            {moreInfo.mass !== ""?
            <p className='font-mono font-bold text-center'>Mass: {moreInfo.mass}</p>:
            <p className='font-mono font-bold text-center'>Mass: 0</p>

            }
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button className='rounded-3xl w-[30%] h-[7%] bg-cyan-800 py-2 px-4 font-mono
              text-center text-sm text-white shadow-md hover:shadow-sm 
              hover:bg-cyan-900 font-bold m-2'
          onClick={handleClose}>Back</button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default CardData