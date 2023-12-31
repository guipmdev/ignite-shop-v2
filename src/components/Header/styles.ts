import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100%',
  maxWidth: 1180,

  padding: '2rem 0',
  margin: '0 auto',

  variants: {
    hideCart: {
      true: {
        justifyContent: 'center',
      },
    },
  },
})
