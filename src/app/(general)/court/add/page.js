import React from 'react'
import dynamic from 'next/dynamic'
import CourtEditContent from '@/components/court/CourtEditContent'
import ProposalEditHeader from '@/components/proposalEditCreate/ProposalEditHeader'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
const ProposalSent = dynamic(() => import('@/components/proposalEditCreate/ProposalSent'), { ssr: false })
const page = () => {
    return (
        <>
            <PageHeader>
                <ProposalEditHeader />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <CourtEditContent />
                </div>
            </div>
            <ProposalSent />
        </>
    )
}

export default page