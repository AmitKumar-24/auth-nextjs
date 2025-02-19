export default function UserProfile({ params }: any) {
    return (
        <div className="flex flex-col text-white bg-gray-950 items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile page
                <span className="p-2 rounded bg-orange-500 ml-2 text-black">{params.id}</span>
            </p>
        </div>
    )
}