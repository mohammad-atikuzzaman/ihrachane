import React from 'react';

const page =async ({params}) => {
    const {slug} = await params
    return (
        <div>
            this is page : {slug}
        </div>
    );
};

export default page;