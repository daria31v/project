import partners from '../../partners/parnters.json'

const DevicesComponent = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
         {partners.map((partner) => (
          <label
            key={partner.id}
            className="mr-2 flex justify-center items-center rounded-md h-8 md:px-3 px-1 py-1 text-center cursor-pointer bg-white border border-duna  text-duna text-small font-normal hover:bg-secondary hover:text-pink hover:font-bold hover:shadow-md focus:shadow-md"
          >
            <span>{partner.name}</span>
            <input type="checkbox" className="absolute opacity-0 pointer-events-none" />
          </label>
        ))}
    </div>
  )
}

export default DevicesComponent