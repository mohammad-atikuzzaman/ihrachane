import UpdateClient from '@/components/dashboard/client/UpdateClient';
import React from 'react';

const page = ({ params }) => {
    return (
        <div>
          <UpdateClient clientId={params.id} />
        </div>
    );
};

export default page;