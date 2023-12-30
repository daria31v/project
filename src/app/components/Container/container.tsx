type Container = {
  children: React.ReactNode
}

export const Container = ({ children }: Container) => {
  return <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
}
