

export default function UserProfile({params}: any){

    return (
       <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1>Profile</h1>
          <hr />
          <p className="text-4xl">Profile Page <span className="text-4xl ml-2 rounded bg-red-200 p-2 text-color-white">{params.id}</span></p>

       </div>

    );
}