import partners from '../../partners/parnters.json'

const FiilterComponent = () => {
  return (
    <div>
      <div className="xl:flex xl:items-center grid md:grid-cols-5 grid-cols-2 gap-3">
        <label className="mr-5 rounded-md h-8 inline-block md:px-3 px-1 py-1 text-center cursor-pointer bg-white  text-duna text-small font-bold border border-nude hover:bg-secondary hover:text-pink hover:font-bold hover:shadow-md focus:shadow-md">
          All
          <input type="checkbox" className="absolute opacity-0 pointer-events-none" />
        </label>
        {partners.map((partner) => (
          <label
            key={partner.id}
            className="mr-2 rounded-md h-8 inline-block md:px-3 px-1 py-1 text-center cursor-pointer bg-white  text-duna text-small font-normal hover:bg-secondary hover:text-pink hover:font-bold hover:shadow-md focus:shadow-md"
          >
            <span>{partner.name}</span>
            <input type="checkbox" className="absolute opacity-0 pointer-events-none" />
          </label>
        ))}
      </div>
    </div>
  )
}

export default FiilterComponent
