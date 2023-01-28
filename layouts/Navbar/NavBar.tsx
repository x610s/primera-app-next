import Link from 'next/link'
import React, { FC } from 'react'
import styles from './Navbar.module.scss';

export const NavBar: FC<NavbarProps> = ({ path }) => {

  const menuItem: any[] = [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Contact',
      href: '/contact'
    },
    {
      text: 'Pricing',
      href: '/pricing'
    },
  ]

  return (
    <>
      <nav className={styles.navbar}>
        {
          menuItem.map(x => {
            return (<Link
              key={x.text}
              className={`${styles["navbar__item"]}  ${(path != x.href ? "" : styles["navbar__item--disabled"])}`}
              href={x.href}> {x.text} </Link>
            )
          })
        }
      </nav>
    </>
  )
}
