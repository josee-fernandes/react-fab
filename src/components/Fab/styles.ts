import styled from 'styled-components'

import { Menu, Close } from 'styled-icons/ionicons-solid'

import { IFabButton } from '../../interfaces/fab'

export const Button = styled.button<IFabButton>`
   position: absolute;
   top: ${
      props =>
         props.position?.includes('top-') ?
            '20px'
            :  props.position?.includes('center-') ?
               '50%'
               : 'initial'
   };
   left: ${
      props =>
         props.position?.includes('-left') ?
            '20px'
            :  props.position?.includes('-center') ?
               '50%'
               : 'initial'
   };
   bottom: ${
      props =>
         props.position?.includes('bottom-') ?
            '20px'
            : props.position?.includes('top-') ?
               'initial'
               : '20px'
   };
   right: ${
      props =>
         props.position?.includes('-right') ?
            '20px'
            : props.position?.includes('-left') ?
               'initial'
               : '20px'
   };
   width: 40px;
   height: 40px;
   border-radius: 50%;
   border: none;
   background-color: ${
      props => 
         props.isClosed ? 
            (props.closedBackgroundColor || '#624be5')
            : (props.openBackgroundColor || '#c13878')
   };
   color: ${
      props => 
         props.isClosed ? 
            (props.closedTextColor || '#ffffff')
            : (props.openTextColor || '#ffffff')
   };
   cursor: pointer;
   transition: all 0.4s ease, transform 0.2s ease;

   &:hover{
      transform: scale(1.1);
   }

   &:active{
      filter: brightness(1.25);
   }

   &:focus{
      filter: brightness(1.25);
      outline: none
   }
`

export const ClosedIcon = styled(Menu)`
   animation: opening .2s ease forwards;

   @keyframes opening{
      from{
         transform: rotate(90deg);
         opacity: 0;
      }

      to{
         transform: rotate(0);
         opacity: 1;
      }
   }
`

export const OpenIcon = styled(Close)`
   animation: closing .2s ease forwards;

   @keyframes closing{
      from{
         transform: rotate(0);
         opacity: 0;
      }

      to{
         transform: rotate(90deg);
         opacity: 1;
      }
   }
`