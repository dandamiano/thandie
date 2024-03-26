const Denied = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-lg text-red-500">Access Denied!</h1>
            <p className="text-sm">You dont have the access to this page.</p>
        </div>
    );
}

export default Denied;