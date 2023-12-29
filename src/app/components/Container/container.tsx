type Container = {
  children: React.ReactNode
}

export const Container = ({ children }: Container) => {
  return <div className="mx-auto max-w-7xl">{children}</div>
}
