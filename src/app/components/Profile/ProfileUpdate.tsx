import { updateUser } from '@/actions/authActions'
import FormComponent from '../Forms/FormComponent'


type Props = {
  name: string
  email: string
  password: string
  image: string
}

const ProfileUpdate: React.FC = () => {
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
      <h2 className="mb-9 font-bold text-md tracking-wider uppercase">Account Settings</h2>
      <FormComponent onSubmit={handleUpdateProfile} className="grid gap-3">
        <input className="p-2" name="name" type="text" placeholder="*Full name" required />
        <input className="p-2" name="email" type="text" placeholder="*Email" required />
        <input className="p-2" name="password" type="text" placeholder="*Password" required />
        <input className="p-2" name="image" type="text" placeholder="*Photo" />
    
        <button className="w-[280px] h-[33px] shadow-xl rounded-[50px] bg-gradient-to-r to-[#2e5fba] via-transparent from-[#E2EAF9] my-3 text-white text-medium font-normal hover:font-bold">
          Save Changes
        </button>
      </FormComponent>
    </div>
  )
}

export default ProfileUpdate
