import * as React from "react";
import { Link } from "../Link";

export const ModuleCard = ({
    module,
    completion
}: ModuleProps): JSX.Element => {
    return (
        <div>
            <div className="border-gray h-48 w-full flex flex-nowrap border border-solid">
                <div className={`flex h-full w-4 mr-4 ${completion ? `bg-green-400` :
                    module.percentage >= 25 ? `bg-blue-300` : `bg-red-500`
                    }`}>
                    <div className="h-full p-5">
                        <p className="pb-8 text-gray-300 text-sm w-48">{`${module.courseName} M ${module.moduleIdentifiers}`}</p>
                        <p className="flex flex-nowrap pb-14 font-bold text-lg w-96">{module.moduleName}</p>
                        <div className="flex pb-4">
                            <p className="underline underline-offset-2 inline-block text-sm text-gray-400"><span className="pl-8 pr-8 border-black border-r-4">Forum</span></p>
                            <p className="underline underline-offset-2 inline-block text-sm text-gray-400"><span className="pl-8 pr-8 border-black border-r-4">Assignment</span></p>
                            <p className="underline underline-offset-2 inline-block text-sm text-gray-400"><span className="pl-8 pr-8 border-black border-r-4">Download</span></p>
                            {completion ? `` : <p className="underline underline-offset-2 inline-block text-sm text-red-500"><span className="pl-8 pr-8">Abandon</span></p>}
                            <div className="flex items-center justify-center">
                                <svg className="w-20 h-20">
                                    <circle
                                        className="text-gray-300"
                                        strokeWidth="5"
                                        stroke="currentColor"
                                        fill="transparent"
                                        r="30"
                                        cx="40"
                                        cy="40"
                                    />
                                    <circle
                                        className="text-blue-600"
                                        strokeWidth="5"
                                        strokeDasharray="10"
                                        strokeDashoffset="100 - 75 / 100 * 10"
                                        strokeLinecap="round"
                                        stroke="currentColor"
                                        fill="transparent"
                                        r="30"
                                        cx="40"
                                        cy="40"
                                    />
                                </svg>
                                <div className="flex flex-col items-center justify-center text-center ml-10">
                                    <p>{`${module.percentage} %`}</p>
                                    <p>Viewed</p>
                                    <div className="flex flex-col items-center justify-center text-center ml-10 text-gray-400">
                                        {completion ? <p>
                                            {`Average: ${module.averageTime}`}{`Your time: ${module.userTime}`}
                                        </p> : <p className="flex flex-col">
                                            {`Approximately ${module.duration} ${module.duration === 1 ? `minute` : `minutes`} left `}
                                        </p>}
                                        <div className="ml-5 flex h-6/ w-3 bg-gray-300">
                                            {completion ? <p className="text-white bg-blue-300 px-20  py-1 w-full my-1">Continue</p> :
                                                <div className="mx-14 flex flex-col items-center justify-center gap-3 ">
                                                    <p className="text-gray-400 text-sm">Current Topic</p>
                                                    <p className="font-medium text-sm mb-4">{module.currentTopic}</p>
                                                    <p className="text-white bg-blue-300 px-20  py-1 w-full my-1">{module.returnIdPage}</p>{/* Link to returnIdPage */}
                                                    <p className="text-white bg-orange-400 px-20 py-1 w-full my-1">{module.treeView}</p>{/* Link to treeView */}
                                                </div>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
type ModuleObject = {
    courseName: string;
    moduleIdentifiers: string;
    moduleName: string;
    percentage: number;
    duration?: number;
    averageTime?: number;
    userTime?: number;
    currentTopic?: string;
    returnIdPage: string;
    treeView?: string;
};

export type ModuleProps = {
    module: ModuleObject;
    completion: boolean;
};
