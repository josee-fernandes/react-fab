import React, { FC, useState } from 'react'

import { IFab } from '../../interfaces/fab'

import { Button, ClosedIcon, OpenIcon } from './styles'

export const Fab: FC<IFab>  = ({
   children,
   closedIcon,
   openIcon,
   closedBackgroundColor,
   closedTextColor,
   openBackgroundColor,
   openTextColor,
   position
}) => {
   const [isClosed, setIsClosed] = useState(true)

   const handleToggleMenu = () => {
      setIsClosed(!isClosed)
   }

   return(
      <Button
         closedBackgroundColor={closedBackgroundColor}
         closedTextColor={closedTextColor}
         openBackgroundColor={openBackgroundColor}
         openTextColor={openTextColor}
         position={position}
         isClosed={isClosed}
         onClick={handleToggleMenu}
      >
         {isClosed ? (!!closedIcon || <ClosedIcon />) : (!!openIcon || <OpenIcon />)}
         {children}
      </Button>
   )
}