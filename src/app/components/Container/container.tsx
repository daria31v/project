type Container = {
  children: React.ReactNode
}

export const Container = ({ children }: Container) => {
  return <div className=" mx-auto">{children}</div>
}
