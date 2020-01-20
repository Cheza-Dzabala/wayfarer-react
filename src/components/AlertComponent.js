import React, { useState } from 'react'
import { Alert } from 'reactstrap';

export default function AlertComponent(props) {

  const { message, variant } = props;
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <div>
      <Alert color={variant} isOpen={visible} toggle={onDismiss} fade={false}>
        {message}
      </Alert>
    </div>
  )
}
