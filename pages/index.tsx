import type { NextPage } from 'next'
import { MainLayout } from '../layouts/MainLayout/MainLayout'
import { DarkLayout } from '../layouts/Dark/DarkLayout'
import { NextPageWithLayout } from '../props/MainLayout'
import { ReactElement } from 'react'


const Home: NextPageWithLayout = () => {
  return (
    <h2>Inicio nested Layout</h2>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}

export default Home;
