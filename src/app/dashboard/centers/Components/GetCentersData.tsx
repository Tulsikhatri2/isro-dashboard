import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material'
import React from 'react'

interface CentersDataProps{
    handleClose: () => void;
    open: boolean;
    moreInfo: any;
}

const GetCentersData: React.FC<CentersDataProps> = ({open, handleClose, moreInfo}) => {
    
  return (
    <div>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        <p className='text-center font-bold font-mono underline'>{moreInfo.name}</p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <p className='font-mono font-bold mt-5 text-center'>ID: {moreInfo.id}</p>
            <p className='font-mono font-bold text-center'>Place: {moreInfo.Place}</p>
            <p className='font-mono font-bold text-center'>State: {moreInfo.State}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <button className='rounded-3xl w-[40%] h-[7%] bg-cyan-800 py-2 px-4 font-mono
              text-center text-sm text-white shadow-md hover:shadow-sm 
              hover:bg-cyan-900 font-bold m-2'
          onClick={handleClose}>Back</button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default GetCentersData