import PartnerUpdate from '@/components/dashboard/partner/PartnerUpdate';
import React from 'react';

const page = ({ params }) => {
    return (
        <div>
            <PartnerUpdate partnerId={params.id} />
        </div>
    );
};

export default page;