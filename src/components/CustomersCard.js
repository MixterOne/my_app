import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import {
  Card,
  CardHeader,
  CardActions,
  Avatar,
  IconButton,
} from '@material-ui/core';


import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import ModalConfirm from './ModalConfirm'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth:345,
  },
}))


 const CustomersCard = ({
     id,
     name,
     lastname,
     email,
     avatar,
     className,
     onRemoveCustomer,
 }) => {

  const classes = useStyles()

  const [ openModal, setOpenModal ] = useState(false);
  const handleToggleOpenModal = () =>{
    setOpenModal(!openModal)
  }

  const handleConfirmModal = id => {
    onRemoveCustomer(id)
    handleToggleOpenModal()
  }

  const handleRemoveCustomer = () =>{
    handleToggleOpenModal()
  }

  return (
    <>
      <Card className={classNames(className, classes.root)}>
        <CardHeader
          avatar={
            <Avatar  aria-label="recipe" src={avatar}>
              R
            </Avatar>
          }
          
          title={`${name} ${lastname}`}
          subheader={email}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="editar cadastro">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="remover cadastro" onClick={handleRemoveCustomer}>
            <DeleteForeverIcon />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm 
      open={openModal}
      onClose={handleToggleOpenModal}
      onConfirm={() => handleConfirmModal(id)}
      title="Deseja realmente excluir este cadastro?"
      message="Ao confirmar não será possível reveter essa operação."
       />
    </>
  );
}

export default CustomersCard