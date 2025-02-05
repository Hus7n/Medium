import { Appbar } from "./Appbar";

const Skeleton = () => {
    return (
        <div className="w-full max-w-screen-2xl mx-auto p-10 animate-pulse">
                    <Appbar/>
            {/* Title and Post Info */}
            <div className="grid grid-cols-12 gap-6">
                {/* Left Side - Blog Content */}
                <div className="col-span-8">
                    <div className="h-12 bg-gray-300 rounded-md w-3/4 mb-4"></div>
                    <div className="h-6 bg-gray-300 rounded-md w-1/4 mb-6"></div>
                    <div className="space-y-4">
                        <div className="h-4 bg-gray-300 rounded-md w-full"></div>
                        <div className="h-4 bg-gray-300 rounded-md w-5/6"></div>
                        <div className="h-4 bg-gray-300 rounded-md w-4/6"></div>
                        <div className="h-4 bg-gray-300 rounded-md w-full"></div>
                    </div>
                </div>

                {/* Right Side - Author Info */}
                <div className="col-span-4 flex flex-col justify-start items-start">
                    <div className="h-6 bg-gray-300 rounded-md w-16 mb-3"></div>
                    <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
                        <div>
                            <div className="h-5 bg-gray-300 rounded-md w-24 mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded-md w-32"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skeleton;
