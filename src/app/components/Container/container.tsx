type Container = {
  children: React.ReactNode
}

export const Container = ({ children }: Container) => {
  return <div className="container mx-auto">{children}</div>
}
