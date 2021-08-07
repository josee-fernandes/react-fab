import { ReactNode } from 'react'

export interface IFab {
   closedIcon?: ReactNode
   openIcon?: ReactNode
   closedBackgroundColor?: string
   openBackgroundColor?: string
   closedTextColor?: string
   openTextColor?: string
   position?: 
      'top-left' | 'top-center' | 'top-right' | 
      'center-left' | 'center-center' | 'center-right' | 
      'bottom-left' | 'bottom-center' | 'bottom-right'
}

export interface IFabButton extends IFab {
 isClosed?: boolean
}