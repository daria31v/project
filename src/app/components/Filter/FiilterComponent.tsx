import partners from '../../partners/parnters.json'

const FiilterComponent = () => {
  return (
    <div>
      <div className="mb-8">
        <p className="text-medium text-secondary font-semibold mb-3 uppercase">Select deviсe</p>
      </div>


      <div className="flex items-center mb-16">
        <label className="mr-5 rounded-md h-8 inline-block px-3 py-1 text-center cursor-pointer bg-white  text-duna text-small font-bold border border-nude hover:bg-secondary hover:text-pink hover:font-bold hover:shadow-md focus:shadow-md">
          All
          <input type="checkbox" className="absolute opacity-0 pointer-events-none" />
        </label>
        {partners.map((partner) => (
        <label key={partner.id} className="mr-2 rounded-md h-8 inline-block px-3 py-1 text-center cursor-pointer bg-white  text-duna text-small font-normal hover:bg-secondary hover:text-pink hover:font-bold hover:shadow-md focus:shadow-md">
          <span>{partner.name}</span>
          <input type="checkbox" className="absolute opacity-0 pointer-events-none" />
        </label>
        ))}
      </div>
    </div>
  )
}

export default FiilterComponent
