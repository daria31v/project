type Container = {
  children: React.ReactNode
}

export const Container = ({ children }: Container) => {
  return <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 max-w-7xl xl:max-w-full px-5">{children}</div>
}
