import React, { FC } from 'react';
import {Loader} from "@/shared/ui";

export const LoaderWithWrapper: FC = () => {
    return (

        <div className="loaderWrapper">
            <Loader />
        </div>
    );
};
