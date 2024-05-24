
const UserInfo = () => {
  return (
    <div className='grid place-items-center h-screen'>
      <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 py-6">
        <div>Name: <span className="font-bold">NA</span></div>
        <div>Name: <span className="font-bold">Email</span></div>
        <button className="bg-red-500 text-white font-bold px-6 py-2 mt-3">LogOut</button>
      </div>
    </div>
  )
}

export default UserInfo;
