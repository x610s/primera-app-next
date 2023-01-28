import React, { FC } from 'react'
import styles from './Dark.module.scss'
import { MainLayoutProps } from '../../props/MainLayout'

export const DarkLayout: FC<MainLayoutProps> = ({children}) => {
  return (
    <div className={styles.darklayout}>
      {children}
    </div>
  )
}
