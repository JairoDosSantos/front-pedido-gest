import React from 'react';

interface MetricTypes {
    title: string;
    description: string;
    iconElement: JSX.Element;
    iconAlternative?: JSX.Element;
    color: string

}

const MetricCard: React.FC<MetricTypes> = ({ description, iconElement, title, iconAlternative, color }: MetricTypes) => {
    return (
        <>
            <div className="w-full md:w-1/2 xl:w-1/3 p-3">

                <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
                    <div className="flex flex-row items-center">
                        <div className="flex-shrink pr-4">
                            <div className={`rounded p-2 ${color}`}>
                                {iconElement}
                            </div>
                        </div>
                        <div className="flex-1 text-right md:text-center">
                            <h5 className="font-bold uppercase text-gray-400 truncate">{title}</h5>
                            <div className='flex items-center justify-center space-x-1'>
                                <h3 className="font-bold text-3xl text-gray-600">{description}</h3>
                                {iconAlternative}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default MetricCard;