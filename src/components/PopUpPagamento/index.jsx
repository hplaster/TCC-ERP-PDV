import React from 'react'
import styles from './style.module.css'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const index = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [desconto, setDesconto] = React.useState();

  return (
    <div>
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          Finalizar Venda
        </Button>
        <Dialog style={{minHeight: "333px"}}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" style={{textAlign: "center"}}>
            {"Finalizar Venda"}
          </DialogTitle>
          <DialogContent>
            <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
              <TextField
                label="Valor do Desconto"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                type='number'
                slotProps={{
                  input: {
                    startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                  },
                }}
                style={{marginLeft: 0}}
              />
              <TextField
                label="% do Desconto"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                type='number'
                slotProps={{
                  input: {
                    startAdornment: <InputAdornment position="start">%</InputAdornment>,
                  },
                }}
                style={{marginRight: 0}}
              />
            </div>
            <TextField style={{width: "100%", marginTop: "5px"}}
              id="outlined-multiline-flexible"
              label="Observação"
              multiline
              required
              maxRows={4}
              minRows={4}
            />
          </DialogContent>
          <DialogActions style={{paddingRight: "24px"}}>
            <Button variant="outlined" onClick={handleClose}>Disagree</Button>
            <Button variant="outlined" onClick={handleClose} autoFocus>Agree</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  )
}

export default index