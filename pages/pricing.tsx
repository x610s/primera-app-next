import React, { ReactElement } from 'react'
import { NextPageWithLayout } from '../props/MainLayout'
import { MainLayout } from '../layouts/MainLayout/MainLayout'
import { DarkLayout } from '../layouts/Dark/DarkLayout'

const Pricing: NextPageWithLayout = () => {
    return (
        <h2>Preciooos !!</h2>
  )
}

Pricing.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout>
            <DarkLayout>
            {page}
            </DarkLayout>
        </MainLayout>        
    );
}


export default Pricing;
