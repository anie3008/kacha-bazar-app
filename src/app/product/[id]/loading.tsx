
const Loading = () => {
    return (
        <div>
             <div className="w-full py-10 flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900 mb-4"></div>
      <p className="text-gray-500">লোডিং হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...</p>
    </div>
        </div>
    );
};

export default Loading;