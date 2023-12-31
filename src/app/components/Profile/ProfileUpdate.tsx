'use client'
import Button from '../Button/Buttons'
// import { updateUser } from '@/actions/authActions'
import FormComponent from '../Forms/FormComponent'
import CounterLikes from './CounterLikes'


type Props = {

  name: string
  email: string
  password: string
  image: string
}

const ProfileUpdate = ({userData} : any) => {
  // async function handleUpdateProfile(formData : any){
  //     const name = formData.get('name');
  //     const email = formData.get('email');
  //     const password = formData.get('password');
  //     console.log({name, email, password});
  // }
  const handleUpdateProfile = async (formData: FormData) => {
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    const image = formData.get('image')

    // const res = await updateUser({ name, email, password, image })
    // if(res?.msg) alert (res?.msg)
    // console.log(res)
  }
  return (
    <div>
      <CounterLikes/>
      <h2 className="my-[54px] text-secondary font-bold text-l tracking-wider ">Account Settings</h2>
      <FormComponent onSubmit={handleUpdateProfile} className="grid grid-cols-1 gap-10 w-[426px] text-secondary">
        <label className="grid mt-1">Full Name
        <input className=" border-b border-b-secondary placeholder:text-duna text-medium font-semibold" name="name" type="text" placeholder={userData.name} required />
        </label>
      <label className="grid mt-1">Email Address
        <input className=" border-b border-b-secondary placeholder:text-duna text-medium font-semibold" name="email" type="email" placeholder={userData.email} required />
      </label>
      <label className="grid mt-1">Password
        <input className=" border-b border-b-secondary placeholder:text-duna text-medium font-semibold" name="password" type="password" placeholder={userData.password || '********'} required />
      </label>

    
      <div className="flex gap-2 justify-end items-center">
        <Button className="flex justify-center items-center bg-white border border-orange py-2 px-[56px] text-orange rounded-3xl hover:text-white hover:bg-gradient-to-l hover:from-[#F38605] hover:via-transparent hover:to-[#F3860542] shadow-md">Edit</Button>
        <Button className="flex justify-center items-center bg-white border border-orange py-2 px-[56px] text-orange rounded-3xl hover:text-white hover:bg-gradient-to-l hover:from-[#F38605] hover:via-transparent hover:to-[#F3860542] shadow-md">Save</Button>
      </div>

      </FormComponent>
    </div>
  )
}

export default ProfileUpdate
