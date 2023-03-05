import Image from 'next/image'
import Link from 'next/link'
import logoImage from '../assets/logo.svg'
import { Cart } from './cart'
import { HeaderContainer } from '@/styles/components/header'

export function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImage} alt="" />
      </Link>

      <Cart />
    </HeaderContainer>
  )
}
