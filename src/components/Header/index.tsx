import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import Link from 'next/link'
import { useShoppingCart } from 'use-shopping-cart'

import logoImg from '../../assets/logo.svg'
import { Cart } from '../Cart'
import { ShoppingCartButton } from '../ShopppingCartButton'
import { HeaderContainer } from './styles'

interface HeaderProps {
  hideCart?: boolean
}

export function Header({ hideCart }: HeaderProps) {
  const { cartCount } = useShoppingCart()

  const showCart = !hideCart

  return (
    <HeaderContainer hideCart={hideCart}>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      {showCart && (
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <ShoppingCartButton
              size={24}
              backgroundColor="gray"
              counter={cartCount}
            />
          </Dialog.Trigger>

          <Cart />
        </Dialog.Root>
      )}
    </HeaderContainer>
  )
}
